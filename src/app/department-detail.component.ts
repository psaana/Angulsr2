import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  
  template: `<h3>you selected department with id={{departmentId}}</h3>`
  //styleUrls: ['./app.component.css']
})
export class DepartmentDetailComponent {
  //title = 'app works!';
  departmentId:string;
  constructor(private route:ActivatedRoute){}
  ngOnInit()
  {
      let id=this.route.snapshot.params['id'];
      this.departmentId=id;
  }
}