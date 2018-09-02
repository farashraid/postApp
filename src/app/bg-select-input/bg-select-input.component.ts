import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bg-select-input',
  templateUrl: './bg-select-input.component.html',
  styleUrls: ['./bg-select-input.component.less']
})
export class BgSelectInputComponent implements OnInit {
  private bgArr:Array<Background>;
  constructor() { }
  @Output() eventbg= new EventEmitter();
  ngOnInit() {
    this.bgArr = [
      {
      src:'../../assets/background/select-bg-btn (1).png',id:1
      },
      {
        src:'../../assets/background/select-bg-btn (2).png',id:2
        },
        {
          src:'../../assets/background/select-bg-btn (3).png',id:3
          },
          {
            src:'../../assets/background/select-bg-btn (4).png',id:4
            },
            {
              src:'../../assets/background/select-bg-btn (5).png',id:5
              }
    ]
  }
  selectBg(id){
    console.log('emit')
    this.eventbg.emit(id);
  }

}
class Background{
  src:string
  id:number
}
