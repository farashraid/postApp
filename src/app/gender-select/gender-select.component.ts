import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-gender-select',
  templateUrl: './gender-select.component.html',
  styleUrls: ['./gender-select.component.less']
})
export class GenderSelectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    
  }
  toggleImage(id){
    this.router.navigate( ['clothes'],{queryParams:{'id':id,'obj':'','url':'home'}} );
  }
}
