import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  heroname:<input [disabled]="disabled" id='{{myID}}' type='text' value='spiderman' [class]="successClass"/>
  <h2 [class.text-danger] ="hasError">{{name}}</h2>
  `,
  styles:[
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

  public name ="Mighty God"
  public myID="hero1"
  public disabled= true
  public successClass="text-success"
  public hasError = true
  constructor() { }

  ngOnInit(): void {
  }

  greetUser=()=>{
    return this.name +"! I am your follower!"
  }

}
