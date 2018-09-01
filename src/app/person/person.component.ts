import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {
  @Input()
  private child2;
  constructor() { }

  ngOnInit() {
    console.log(this.child2)
   
  }

}
