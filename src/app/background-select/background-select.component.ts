import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-background-select',
  templateUrl: './background-select.component.html',
  styleUrls: ['./background-select.component.less']
})
export class BackgroundSelectComponent implements OnInit {
  private id;//性别
  private str;//人物衣服的对象
  private _str;//解码后的对象
  private bgImgNumber = 1;//背景图的bg
  private getPost:boolean=true;//生成海报
  private name:string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.name = '';
    // this.id = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe(params => {
        this.id = params['id'];
        this.str = params['obj'];
        // console.log(params,this.str ,'paramsparamsparams')
    });
    // console.log( this.str,'背景选择图')
    if(this.str){
      this._str = JSON.parse(decodeURI(this.str));
    }
  }
  ngDoCheck() {
    
  }
  getInfoFromBg(data){
    this.bgImgNumber = data;
    console.log(data,'bgbgbgbgbgbgbgbgbgbgbgbgbg')
  }
  backClothes(){
    this.router.navigate( ['clothes'] );
  }
  bornPost(){
    this.getPost = true;
  }
  onKey(value: string) {
    console.log(value,'名字');
  }
}
