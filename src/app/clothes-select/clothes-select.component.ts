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
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id,'345')
  }
  back(){
    this.router.navigate( ['home'] );
  }
  toSelectBg(){
    this.router.navigate( ['bgSelect'] );
  }
  getInfoFromChild1(data){
    this.faList= data;
    console.log(data,'jsljflsfjslfjsdlfj l')
    }
}
