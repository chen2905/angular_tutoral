import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="item">
    <li *ngFor="let dep of departments" [class.selected]="isSelected(dep)">
      <a routerLink="/departments/{{dep.id}}" >{{dep.name}}</a>
    </li>
    </ul>
  `,
  styles: []
  
})
export class DepartmentListComponent implements OnInit {

    public departments =[
      {"id" : 1, "name" : "Angular"} ,
      {"id" : 2, "name" : "Node" },
      {"id" : 3, "name" : "REACT"} ,
      {"id" : 4, "name" : "SQL" }

    ]

    public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      const id = parseInt(params.get('id'))
      this.selectedId = id;
    });
 
  }
 isSelected(dep): boolean{
   if (dep.id===this.selectedId){
     return true;
   }else{
     return false;
   }
 }
}
 