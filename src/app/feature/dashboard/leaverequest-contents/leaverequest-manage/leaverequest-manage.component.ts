import { tap, catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, concat, of } from 'rxjs';
import { EmployeeLeaveService } from './../../services/employeeLeave.service';
import { Component, OnInit } from '@angular/core';
import { LeaveType } from '../../model/leaveType';
import { LeaveTypeService } from '../../services/leaveType.service';

@Component({
  selector: 'app-leaverequest-manage',
  templateUrl: './leaverequest-manage.component.html',
  styleUrls: ['./leaverequest-manage.component.css']
})
export class LeaverequestManageComponent implements OnInit {

  private create_leave_req_msg: string;
  public has_error = false;

  leaveTypes: Observable<any>;
  selectedLeaveType: LeaveType = null;

  constructor(private _employeeService: EmployeeLeaveService, private _leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.leaveTypes = this._leaveTypeService.getAllLeaveTypes();
  }

  

  createLeaveRequest(formData){
    console.log("form data ",formData.value);
  //   this._employeeLeaveService.createEmployeeLeave(formData.value).subscribe(res => {
  //     // console.log("creation successful", res);
  //     this.has_error = false;
  //     this.leave_req_msg = "Leave Request succesfully Submitted";
  // }, error => { 
  //   // console.log("user creation error", error.error);
  //   this.has_error = true;
  //   this.leave_req_msg = error.error.message;
  // });

  }

}
