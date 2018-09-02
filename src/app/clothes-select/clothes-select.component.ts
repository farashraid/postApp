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
  private faList;
  private id;
  private str;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
//var str=encodeURI(JSON.stringify(data));
  }
  back(){
    this.router.navigate( ['home'] );
  }
  toSelectBg(){
    console.log(encodeURI(JSON.stringify(this.faList)),'stringifystringifystringify')
    this.str = encodeURI(JSON.stringify(this.faList));
    // this.router.navigate( ['bgSelect', { id:this.id }] );//传多个参数
    this.router.navigate( ['bgSelect'],{queryParams:{'id':this.id,'obj':this.str}} );
  }
  getInfoFromChild1(data){
    this.faList= data;
    console.log(data)
    }
}
