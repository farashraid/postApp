import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-clothes-select',
  templateUrl: './clothes-select.component.html',
  styleUrls: ['./clothes-select.component.less']
})
export class ClothesSelectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }
  private faList;//下滑列表传递到person的参数
  private id;//性别
  private str;//对象
  private url;//url


  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.str = params['obj'];
      this.url = params['url'];
    });
    if(this.url == 'bg'){
      this.faList = JSON.parse(decodeURI(this.str));
    }else if(this.url == 'home'){

    }
  }
  back(){
    this.router.navigate( ['home'] );
  }
  toSelectBg(){
     const str = encodeURI(JSON.stringify(this.faList));
    this.router.navigate( ['bgSelect'],{queryParams:{'id':this.id,'obj':str,'url':'clo'}} );
  }
  getInfoFromChild1(data){
    this.faList= data;

    }
}
