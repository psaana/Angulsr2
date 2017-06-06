import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { DepartmentComponent } from './department.component';

import { DepartmentDetailComponent } from './department-detail.component';
const routes: Routes = [
{
        path: 'employee',
        component: EmployeeComponent
      },
       {
        path: 'department',
        component: DepartmentComponent
      },
      {
        path: 'department/:id',
        component: DepartmentDetailComponent
      }
      
      
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents=[EmployeeComponent,DepartmentComponent,DepartmentDetailComponent]
