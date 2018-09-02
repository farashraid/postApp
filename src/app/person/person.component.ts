import { Component, OnInit , Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {
  
  // private child2;
  @Input() child2: Wear;
  private personObj:Wear;
  constructor() { }

  ngOnInit() {
    this.personObj =  {
      click:'hair',
      hair:{
        has:true,
        index:0,
      },
      jew:{
        has:false,
        index:0,
      },
      coat:{
        has:true,
        index:0,
      },
      suits:{
        has:false,
        index:0,
        hasShoes:false,
        hasJew:false
      },
      pants:{
        has:false,
        index:0,
      },
      shoes:{
        has:false,
        index:0,
      }
    };
  }
  ngOnChanges( changes: SimpleChange) { 
    this.personObj = this.child2;
  }
  ngDoCheck():void{
    if(this.personObj){
      if(this.personObj.click == 'suits'){
        this.personObj.coat.has = false;
        this.personObj.pants.has = false; 
          if(this.personObj.suits.hasShoes){
            this.personObj.shoes.has = false;
          }
          if(this.personObj.suits.hasJew){
            this.personObj.jew.has = false;
          }
         
      }
      if(this.personObj.click == 'coat'){
        this.personObj.suits.has = false;
      }
      if(this.personObj.click == 'pants'){
        this.personObj.suits.has = false;
      }
      console.log('数据变化了')
    }
     
  }
  suits(){
  
  }

}
class Wear{
  click:string;
  hair:{
    has:boolean,
    index:number,
  }
  jew:{
    has:boolean,
    index:number,
  }
  coat:{
    has:boolean,
    index:number,
  }
  suits:{
    has:boolean,
    index:number,
    hasShoes:boolean,
    hasJew:boolean
  }
  pants:{
    has:boolean,
    index:number,
  }
  shoes:{
    has:boolean,
    index:number,
  }
}