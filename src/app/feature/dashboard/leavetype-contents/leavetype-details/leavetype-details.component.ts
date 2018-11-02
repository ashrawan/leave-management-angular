import { AuthService } from './../../auth/auth.service';
import { LeaveType } from './../../model/leaveType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveTypeService } from './../../services/leaveType.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavetype-details',
  templateUrl: './leavetype-details.component.html',
  styleUrls: ['./leavetype-details.component.css']
})
export class LeavetypeDetailsComponent implements OnInit {

  private id: number;
  private sub: any;

  isEdit = false;
  errorMsg;
  leaveType_update_msg;
  has_error = false;
  submitted = false;
  isLeaveTypeSelected = false;
  selectedleaveType;
  leaveTypeUpdateForm: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
     private _authService: AuthService , private _leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.routeId();
  }

  routeId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getLeaveTypeById(this.id);
    });
  }

  initLeaveTypeUpdateForm() {
    this.leaveTypeUpdateForm = this.formBuilder.group({
      leaveTypeId : [this.selectedleaveType.leaveTypeId],
      typeName: [this.selectedleaveType.typeName, [Validators.required, Validators.minLength(3)]],
      status: [this.selectedleaveType.status, Validators.required]
    });
  }


  toggleEdit() {
    this.isEdit = !this.isEdit;
    if (this.isEdit) {
      this.initLeaveTypeUpdateForm();
    }
  }

  getLeaveTypeById(id: number) {
    if (id > 0) {
      this._leaveTypeService.getLeaveTypeById(id)
        .subscribe(
          data => {
            this.selectedleaveType = data;
            this.isLeaveTypeSelected = true;
            // console.log("Selected Leave Type data: ", data);
          },
          error => this.errorMsg = error);
    } else {
      this.isLeaveTypeSelected = false;
    }
  }

  get f() { return this.leaveTypeUpdateForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.leaveTypeUpdateForm.invalid) {
      return;
    }
    // console.log("success ", this.leaveTypeUpdateForm.value);
    this._leaveTypeService.updateLeaveType(this.leaveTypeUpdateForm.value).subscribe(res => {
      this.has_error = false;
      this.selectedleaveType = res;
      this.leaveType_update_msg = 'Update Successful';
      this.leaveTypeUpdateForm.reset();
      this.submitted = false;
    }, error => {
      this.has_error = false;
      this.leaveType_update_msg = error.error.message;
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
