import { MyProfileComponent } from './../profile-contents/my-profile/my-profile.component';
import { LeaverequestManageComponent } from './../leaverequest-contents/leaverequest-manage/leaverequest-manage.component';
import { LeaverequestMainComponent } from './../leaverequest-contents/leaverequest-main/leaverequest-main.component';
import { EmployeeListComponent } from './../employee-contents/employee-list/employee-list.component';
import { DashHomeComponent } from './../dash-home/dash-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeMainComponent } from '../employee-contents/employee-main/employee-main.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { EmployeeManageComponent } from '../employee-contents/employee-manage/employee-manage.component';
import { LeavetypeListComponent } from '../leavetype-contents/leavetype-list/leavetype-list.component';
import { LeavetypeMainComponent } from '../leavetype-contents/leavetype-main/leavetype-main.component';
import { LeavetypeManageComponent } from '../leavetype-contents/leavetype-manage/leavetype-manage.component';
import { LeaverequestListComponent } from '../leaverequest-contents/leaverequest-list/leaverequest-list.component';

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
            {path: 'details/:id', component: EmployeeListComponent},
            {path: 'add', component: EmployeeManageComponent}
          ]
        },
        {
          path: 'leavetypes',
          component: LeavetypeMainComponent,
          children: [
            {path: '', redirectTo: 'details/0', pathMatch: 'full'}, 
            {path: 'details/:id', component: LeavetypeListComponent},
            {path: 'add', component: LeavetypeManageComponent}
          ]
        },
        {
          path: 'leaverequests',
          component: LeaverequestMainComponent,
          children: [
            {path: '', redirectTo: 'details/0', pathMatch: 'full'}, 
            {path: 'details/:id', component: LeaverequestListComponent},
            {path: 'add', component: LeaverequestManageComponent}
          ]
        },
        { path: 'profile', component: MyProfileComponent },
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
