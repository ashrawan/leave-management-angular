import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this._employeeService.getCurrentEmployee()
      .subscribe(
        res => {
          const role = res.role;
          console.log(res);
          localStorage.setItem('role', role);
        },
        error => {
          // this.login_user_msg = "Oops ! Can't load Profile";
        });
  }

}
