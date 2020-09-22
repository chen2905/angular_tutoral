import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
{{name|uppercase}}<br/>
{{name|titlecase}}<br/>
<h2>{{5.29|percent}}</h2>
<h2>{{5.29|currency:'CNY'}}</h2>
{{oHero|json}}<br/>
<h2>{{5.29|number:'percentage'}}</h2>
<button (click) ="fireEvent()">send event</button>
<h2>{{ date }}</h2>
<h2>{{ date | date:'short' }}</h2>
<h2>{{ date | date:'shortDate' }}</h2>
<h2>{{ date | date:'shortTime' }}</h2>
  `,
  styles: [
    `
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      front-style:italic;
    }
    `
  ]
})
export class TestComponent implements OnInit {

  public name = 'GOD, please get rid of Xi Jin Ping and CCP for Chinese people';
  public show = true;
  public homeTeam ='Laker';
  public oHero ={
    "name" : "Superman",
    "power" : "Fly"
  };
public date = new Date();

  @Input('parentData') public pray;
  @Output() public childEvent = new EventEmitter();
fireEvent = () =>{
  this.childEvent.emit("God, please get rid of xi jin ping and ccp");
}

  constructor() { }

  ngOnInit(): void {
  }

  
}
