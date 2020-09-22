import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from  '@angular/router';
@Component({
  selector: 'app-depart-detail',
  template: `
    <p>
      you selected department with {{departmentid}}
      <a (click)="goPrevious()">Previous</a> | 
      <a (click)="goNext()">Next</a>
    </p>
    <div>  
    <button (click)="goBackToDeparments()">Back</button>
    </div>

    <p><button (click)="showOverview()">go to overview</button></p>
    <p><button (click)="showContact()">go to contact</button></p>

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class DepartDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  public departmentid;

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      const id = parseInt(params.get('id'))
      this.departmentid = id;
    });
 

  }

  goPrevious(): void {
    const prevDepartmentid = this.departmentid - 1;
    this.router.navigate(['/departments', prevDepartmentid]);
  }
  goNext(): void {
    const nextDepartmentid = this.departmentid + 1;
    this.router.navigate(['/departments', nextDepartmentid]);
  }

  showOverview(): void {
    this.router.navigate(['overview'],{relativeTo:this.route})
  }
  showContact(): void {
    this.router.navigate(['contact'],{relativeTo:this.route})
  }

  goBackToDeparments(): void {
    const selectedId = this.departmentid ? this.departmentid : null;
    this.router.navigate(['/departments', { id: selectedId}]);


  }
}
