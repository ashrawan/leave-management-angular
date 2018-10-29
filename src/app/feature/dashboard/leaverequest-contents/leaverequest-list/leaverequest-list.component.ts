import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveService } from '../../services/employeeLeave.service';

@Component({
  selector: 'app-leaverequest-list',
  templateUrl: './leaverequest-list.component.html',
  styleUrls: ['./leaverequest-list.component.css']
})
export class LeaverequestListComponent implements OnInit {

  leaveRequests;
  errorMsg;

  constructor(private _employeeLeaveService: EmployeeLeaveService) { }

  ngOnInit() {
    this.getAllEmployeeLeaves();
  }

  getAllEmployeeLeaves() {
    this._employeeLeaveService.getAllEmployeeLeaves()
      .subscribe(
        data => { this.leaveRequests = data.content; console.log("employees data: ", data); },
        error => this.errorMsg = error);
  }

}
