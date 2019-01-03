import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeLeaveService } from './../../services/employeeLeave.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeLeave } from '../../model/EmployeeLeave';

@Component({
  selector: 'app-leaverequest-details',
  templateUrl: './leaverequest-details.component.html',
  styleUrls: ['./leaverequest-details.component.css']
})
export class LeaverequestDetailsComponent implements OnInit {

  private id: number;
  private sub: any;
  errorMsg: String;
  isRequestEdit = false;

  isLeaveRequestSelected = false;
  selectedLeaveRequest: EmployeeLeave;
  selected_leave_msg: String;
  requestApproveForm: FormGroup;
  has_error = false;
  approve_leave_update_msg: String;
  submitted = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private _employeeLeaveService: EmployeeLeaveService) { }

  ngOnInit() {
    this.routeId();
  }

  routeId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getEmployeeLeaveById(this.id);
    });
  }

  initRequestApproveForm() {
    this.requestApproveForm = this.formBuilder.group({
      leaveId: [this.selectedLeaveRequest.leaveId],
      deniedReason: [this.selectedLeaveRequest.deniedReason],
      status: [this.selectedLeaveRequest.status, Validators.required]
    });
  }

  toggleEdit() {
    this.isRequestEdit = !this.isRequestEdit;
    this.initRequestApproveForm();
  }

  get f() { return this.requestApproveForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.requestApproveForm.invalid) {
      return;
    }
    console.log('success ', this.requestApproveForm.value);
    // this.requestApproveForm.patchValue({
    //   leaveId
    // });
    this._employeeLeaveService.approveEmployeeLeave(this.requestApproveForm.value).subscribe(res => {
      this.has_error = false;
      this.approve_leave_update_msg = 'Successfully Submitted';
      this.selectedLeaveRequest = res;
      this.requestApproveForm.reset();
      this.submitted = false;
    }, error => {
      this.has_error = true;
      this.approve_leave_update_msg = error.error.message;
    });

  }

  getEmployeeLeaveById(id: number) {
    if (id > 0) {
      this._employeeLeaveService.getEmployeeLeaveById(id)
        .subscribe(
          data => {
            this.selectedLeaveRequest = data;
            this.isLeaveRequestSelected = true;
            // console.log('selectedEmployee data: ', data);
          }, error => {
            this.errorMsg = error;
            this.selected_leave_msg = 'Oops ! Can\'t load selected Leave Request';
          });
    } else {
      this.isLeaveRequestSelected = false;
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
