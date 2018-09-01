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

  ngOnInit() {
    // this.gender = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id,'345')
  }
  back(){
    this.router.navigate( ['home'] );
  }
  toSelectBg(){
    this.router.navigate( ['bgSelect'] );
  }
}
