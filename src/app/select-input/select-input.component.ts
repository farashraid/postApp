import { Component, OnInit,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.less']
})
export class SelectInputComponent implements OnInit {
  
  id:any = 'top1';
  clothesArr:any= [];
  showArr:any= [];
  public obj: Wear = {
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
    },
    pants:{
      has:true,
      index:0,
    },
    shoes:{
      has:true,
      index:0,
    }
  };
  @Output() eventChild1= new EventEmitter();

  constructor() { }

  ngOnInit() {
    
    this.clothesArr = {
      hairArr:[
        {src:'../../assets/hair/hair (1).png',id:'1'},
        {src:'../../assets/hair/hair (2).png',id:'2'},
        {src:'../../assets/hair/hair (3).png',id:'3'},
        {src:'../../assets/hair/hair (4).png',id:'4'},
        {src:'../../assets/hair/hair (5).png',id:'5'},
      ],
      jewArr:[
        {src:'../../assets/jew/jew (1).png',id:'1'},
        {src:'../../assets/jew/jew (2).png',id:'2'},
        {src:'../../assets/jew/jew (3).png',id:'3'},
        {src:'../../assets/jew/jew (4).png',id:'4'},
        {src:'../../assets/jew/jew (5).png',id:'5'},
        {src:'../../assets/jew/jew (6).png',id:'6'},
        {src:'../../assets/jew/jew (7).png',id:'7'},
        {src:'../../assets/jew/jew (8).png',id:'8'},
        {src:'../../assets/jew/jew (9).png',id:'9'},
        {src:'../../assets/jew/jew (10).png',id:'11'},
        {src:'../../assets/jew/jew (11).png',id:'12'},
        {src:'../../assets/jew/jew (12).png',id:'10'},
      ],
      coatArr:[
        {src:'../../assets/coat/coat (1).png',id:'1'},
        {src:'../../assets/coat/coat (2).png',id:'2'},
        {src:'../../assets/coat/coat (3).png',id:'3'},
        {src:'../../assets/coat/coat (4).png',id:'4'},
        {src:'../../assets/coat/coat (5).png',id:'5'},
        {src:'../../assets/coat/coat (6).png',id:'6'},
        {src:'../../assets/coat/coat (7).png',id:'7'},
        {src:'../../assets/coat/coat (8).png',id:'8'},
        {src:'../../assets/coat/coat (9).png',id:'9'},
        {src:'../../assets/coat/coat (10).png',id:'10'},
        {src:'../../assets/coat/coat (11).png',id:'11'},
        {src:'../../assets/coat/coat (12).png',id:'12'},
        {src:'../../assets/coat/coat (13).png',id:'13'},
        {src:'../../assets/coat/coat (14).png',id:'14'},
        {src:'../../assets/coat/coat (15).png',id:'15'},
        {src:'../../assets/coat/coat (16).png',id:'16'},
        {src:'../../assets/coat/coat (17).png',id:'17'},
        {src:'../../assets/coat/coat (18).png',id:'18'},
        {src:'../../assets/coat/coat (19).png',id:'19'},
        {src:'../../assets/coat/coat (20).png',id:'20'},
      ],
      suitsArr:[
        {src:'../../assets/suits/suits (1).png',id:'1'},
        {src:'../../assets/suits/suits (2).png',id:'2'},
        {src:'../../assets/suits/suits (3).png',id:'3'},
        {src:'../../assets/suits/suits (4).png',id:'4'},
        {src:'../../assets/suits/suits (5).png',id:'5'},
        {src:'../../assets/suits/suits (6).png',id:'6'},
        {src:'../../assets/suits/suits (7).png',id:'7'},
        {src:'../../assets/suits/suits (8).png',id:'8'},
        {src:'../../assets/suits/suits (9).png',id:'9'},
        {src:'../../assets/suits/suits (10).png',id:'10'},
        {src:'../../assets/suits/suits (11).png',id:'11'},
        {src:'../../assets/suits/suits (12).png',id:'12'},
        {src:'../../assets/suits/suits (13).png',id:'13'},
        {src:'../../assets/suits/suits (14).png',id:'14'},
        {src:'../../assets/suits/suits (15).png',id:'15'},
        {src:'../../assets/suits/suits (16).png',id:'16'},
        {src:'../../assets/suits/suits (17).png',id:'17'},
        {src:'../../assets/suits/suits (18).png',id:'18'},
        {src:'../../assets/suits/suits (19).png',id:'19'},
        {src:'../../assets/suits/suits (20).png',id:'20'},
        {src:'../../assets/suits/suits (21).png',id:'21'},
        {src:'../../assets/suits/suits (22).png',id:'22'},
        {src:'../../assets/suits/suits (23).png',id:'23'},
        {src:'../../assets/suits/suits (24).png',id:'24'},
        {src:'../../assets/suits/suits (25).png',id:'25'},
        {src:'../../assets/suits/suits (26).png',id:'26'},
        {src:'../../assets/suits/suits (27).png',id:'27'},
        {src:'../../assets/suits/suits (28).png',id:'28'},
        {src:'../../assets/suits/suits (29).png',id:'29'},
        {src:'../../assets/suits/suits (30).png',id:'30'},
      ],
      pantsArr:[
        {src:'../../assets/pants/pants (1).png',id:'1'},
        {src:'../../assets/pants/pants (2).png',id:'2'},
        {src:'../../assets/pants/pants (3).png',id:'3'},
        {src:'../../assets/pants/pants (4).png',id:'4'},
        {src:'../../assets/pants/pants (5).png',id:'5'},
        {src:'../../assets/pants/pants (6).png',id:'6'},
        {src:'../../assets/pants/pants (7).png',id:'7'},
        {src:'../../assets/pants/pants (8).png',id:'8'},
        {src:'../../assets/pants/pants (9).png',id:'9'},
        {src:'../../assets/pants/pants (10).png',id:'10'},
      ],
      shoesArr:[
        {src:'../../assets/shoes/shoes (1).png',id:'1'},
        {src:'../../assets/shoes/shoes (2).png',id:'2'},
        {src:'../../assets/shoes/shoes (3).png',id:'3'},
        {src:'../../assets/shoes/shoes (4).png',id:'4'},
        {src:'../../assets/shoes/shoes (5).png',id:'5'},
        {src:'../../assets/shoes/shoes (6).png',id:'6'},
        {src:'../../assets/shoes/shoes (7).png',id:'7'},
        {src:'../../assets/shoes/shoes (8).png',id:'8'},
        {src:'../../assets/shoes/shoes (9).png',id:'9'},
        {src:'../../assets/shoes/shoes (10).png',id:'10'},
        {src:'../../assets/shoes/shoes (11).png',id:'11'},
        {src:'../../assets/shoes/shoes (12).png',id:'12'},
        {src:'../../assets/shoes/shoes (13).png',id:'13'},
        {src:'../../assets/shoes/shoes (14).png',id:'14'},
      ]
    }

  }
  select(param){
    this.showArr = param;
    this.id = 'clothes';
    console.log(param,'param')
  }
  change(src,i){
    // const obj = ['','','']
    console.log(src,i,'===obj')
    if(src.includes('hair')){
      this.obj.hair.has = true;//obj的第一位是种类的意思
      this.obj.hair.index = i+1; //obj第二位是第几件衣服的意思
      this.eventChild1.emit(this.obj);
    }
     if(src.includes('coat')){
      this.obj.coat.has = true;
      this.obj.coat.index = i+1;
      this.eventChild1.emit(this.obj);
    }
     if(src.includes('suits')){
      this.obj.suits.has = true;
      this.obj.suits.index = i+1;
      this.eventChild1.emit(this.obj);
    }
     if(src.includes('pants')){
      this.obj.pants.has = true;
      this.obj.pants.index = i+1;
      this.eventChild1.emit(this.obj);
    }
     if(src.includes('shoes')){
      this.obj.shoes.has = true;
      this.obj.shoes.index = i+1;
      this.eventChild1.emit(this.obj);
    }
    
  }
  
}
class Wear{
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