import { EmployeeListComponent } from './../employee-contents/employee-list/employee-list.component';
import { DashHomeComponent } from './../dash-home/dash-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeMainComponent } from '../employee-contents/employee-main/employee-main.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { EmployeeManageComponent } from '../employee-contents/employee-manage/employee-manage.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
        { path: '', component: DashHomeComponent },
        {
          path: 'employees',
          component: EmployeeMainComponent,
          children: [
            {path: '', redirectTo: 'details/0', pathMatch: 'full'}, 
            // {path: 'add', component: EmployeeAddComponent},
            {path: 'details/:id', component: EmployeeListComponent},
            {path: 'add', component: EmployeeManageComponent}
          ]
        },
    ]
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
