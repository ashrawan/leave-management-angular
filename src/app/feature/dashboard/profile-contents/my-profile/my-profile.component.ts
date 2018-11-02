import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  ohide = true;
  nhide = true;
  rnhide = true;

  has_error = false;
  password_update_msg;
  selected_user_msg;
  user;
  employeesUnderSupervision;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this._employeeService.getCurrentEmployee()
      .subscribe(
        data => {
          this.user = data;
        },
        error => {
          this.selected_user_msg = 'Oops ! Can\'t load Profile';
        });
  }

  getEmployeeUnderSupervision() {
    this._employeeService.getEmployeeUnderSupervision(this.user.employeeId).subscribe(res => {
      this.employeesUnderSupervision = res;
    }, error => {
      this.employeesUnderSupervision = null;
    });
  }

  updatePassword(form) {
    const oldPassword = form.value.oldPassword;
    const newPassword = form.value.newPassword;
    const reNewPassword = form.value.reNewPassword;

    if (newPassword !== reNewPassword) {
      this.has_error = true;
      this.password_update_msg = 'New Password and Confirm Password must be same';
      return;
    }
    this._employeeService.updatePassword(oldPassword, newPassword)
      .subscribe(res => {
        this.has_error = false;
        this.password_update_msg = 'Password Update Successful, Please Logout and Re Login !!!';
        form.reset();
      },
        error => {
          this.has_error = true;
          this.password_update_msg = 'Password Update Failed !!!';
        });
  }
}
