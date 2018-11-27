import { LeaveType } from './../../model/leaveType';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject, concat, of } from 'rxjs';
import { EmployeeLeaveService } from './../../services/employeeLeave.service';
import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leaveType.service';
import { EmployeeLeave } from '../../model/EmployeeLeave';

@Component({
  selector: 'app-leaverequest-manage',
  templateUrl: './leaverequest-manage.component.html',
  styleUrls: ['./leaverequest-manage.component.css']
})
export class LeaverequestManageComponent implements OnInit {

  create_leave_req_msg: string;
  public has_error = false;

  leaveTypes: Observable<any>;
  selectedLeaveType: LeaveType = null;
  leaveForm: FormGroup;
  minDate: Date;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _employeeLeaveService: EmployeeLeaveService,
     private _leaveTypeService: LeaveTypeService) {
      this.minDate = new Date();
      }

  ngOnInit() {
    this.leaveTypes = this._leaveTypeService.getAllLeaveTypes();

    this.leaveForm = this.formBuilder.group({
      leaveType: [, Validators.required],
      leaveReason: ['', [Validators.required, Validators.minLength(3)]],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }

  get f() { return this.leaveForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.leaveForm.invalid) {
      return;
    }
    const submissionData = { ...this.leaveForm.value, 'leaveTypeDTO': { 'leaveTypeId': this.leaveForm.value.leaveType } };

    this._employeeLeaveService.createEmployeeLeave(submissionData).subscribe(res => {
      this.has_error = false;
      this.create_leave_req_msg = 'Leave Request succesfully Submitted';
      this.leaveForm.reset();
      this.submitted = false;
    }, error => {
      // console.log("leave creation error", error.error);
      this.has_error = true;
      this.create_leave_req_msg = error.error.message;
    });
  }



}
