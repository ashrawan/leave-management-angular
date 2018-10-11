import { HttpInterceptorService } from './auth/http-interceptor.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { EmployeeLeaveService } from './services/employeeLeave.service';
import { LeaveTypeService } from './services/leaveType.service';
import { EmployeeService } from './services/employee.service';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-contents/employee-list/employee-list.component';
import { EmployeeMainComponent } from './employee-contents/employee-main/employee-main.component';
import { NavigationComponent } from './../../core/navigation/navigation.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmployeeManageComponent } from './employee-contents/employee-manage/employee-manage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    NavigationComponent, 
    MainLayoutComponent,
    DashHomeComponent, 
    EmployeeMainComponent, 
    EmployeeListComponent,
    EmployeeManageComponent
  ],
  providers: [EmployeeService, LeaveTypeService, EmployeeLeaveService, AuthGuard, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class DashboardModule { }
