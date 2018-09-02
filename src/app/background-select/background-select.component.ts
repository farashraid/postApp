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
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
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
   
    console.log( this._str,'背景选择图')
  }
  backClothes(){
    // this.router.navigate( ['clothes',this.id] );
  }
}
