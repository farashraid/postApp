import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import * as html2canvas from "html2canvas";

@Component({
  selector: "app-background-select",
  templateUrl: "./background-select.component.html",
  styleUrls: ["./background-select.component.less"]
})
export class BackgroundSelectComponent implements OnInit {
  private id; //性别
  private str; //人物衣服的对象
  private _str; //解码后的对象
  private bgImgNumber = 1; //背景图的bg
  private getPost: boolean = false; //生成海报
  private name: string = "";
  private canvasImg = "";
  private url; //路由上一页传递过来的url
  private longPutImg: boolean = false;//长按图片保存

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.name = "";

    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
      this.str = params["obj"];
      this.url = params["url"];
    });

    if (this.url == "clo") {
      this._str = JSON.parse(decodeURI(this.str));
    }
  }
  ngDoCheck() {}
  getInfoFromBg(data) {
    this.bgImgNumber = data;
  }
  backClothes() {
    const obj = encodeURI(JSON.stringify(this._str));
    this.router.navigate(["clothes"], {
      queryParams: { id: this.id, obj: obj, url: "bg" }
    });
  }
  bornPost() {
    this.getPost = true;
  }
  onKey(value: string) {
    this.name = value;
    console.log(value, "名字");
  }
  saveImg() {
    this.longPutImg = true;
    this.takeScreenShot();
  }
  takeScreenShot() {
    // 使用html2canvas插件，将数据源中的数据转换成画布。
    html2canvas(document.querySelector("#mainTable")).then(canvas => {
      // 修改生成的宽度
      canvas.style.width = "450px";
      canvas.style.height = "720px";
      console.log(canvas, "生成的画布文件");
      this.canvasImg = canvas.toDataURL("image/png");
      // this.saveImgLocal();
    });
    // this.downloadFile("导出图片", this.canvasImg);
  }
  downloadFile(filename, content) {
    var base64Img = content;
    var oA = document.createElement("a");
    oA.href = base64Img;
    oA.download = filename;
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    oA.dispatchEvent(event);
  }
  // 方法调用
  saveImgLocal() {
    this.downloadFile("川农人" + this.name, this.canvasImg);
  }
}
