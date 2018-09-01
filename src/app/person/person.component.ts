import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {
  @Input()
  // private child2;
  private child2: Wear= {
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
  private personObj:Wear= {
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
  constructor() { }

  ngOnInit() {
    console.log(this.child2)
    this.personObj =  {
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
  }
  ngOnChanges(child2: Array<number> = [0, 0]) {
    this.personObj = this.child2;
    this.dynamicStyles()
  }
  dynamicStyles(){
    console.log('ngstyle')
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