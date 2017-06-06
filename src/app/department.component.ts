import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'department',
  template: `<h3>Department List</h3>
  <ul class="test">
    <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>&nbsp;&nbsp;{{department.name}}
    </li>
  </ul>`,
  styleUrls: ['./app.component.css']
})
export class DepartmentComponent {
  //title = 'app works!';
  constructor(private router:Router){}
departments=[
    {"id":201,"name":"Angular"},
    {"id":202,"name":"Node"},
    {"id":203,"name":"Express"},
    {"id":204,"name":"Mongodb"},
    {"id":205,"name":"MySql"},
                
]
onSelect(department)
{
    this.router.navigate(['/department',department.id])
}


}
