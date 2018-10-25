import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LeaveTypeService } from './../../services/leaveType.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavetype-manage',
  templateUrl: './leavetype-manage.component.html',
  styleUrls: ['./leavetype-manage.component.css']
})
export class LeavetypeManageComponent implements OnInit {

  private leaveType_req_msg: string;
  public has_error = false;

  leaveTypeForm: FormGroup;
  submitted: boolean = false;

  allLeaveTypeStatus = [
    { "label": "Available", "value": "ACTIVE" },
    { "label": "Not Avilable", "value": "INACTIVE" },
  ];

  constructor(private formBuilder: FormBuilder, private _leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.leaveTypeForm = this.formBuilder.group({
      typeName: ['', [Validators.required, Validators.minLength(3)]],
      status: [this.allLeaveTypeStatus[0].value, Validators.required]
    });
  }

  get f() { return this.leaveTypeForm.controls; }

  onSubmit() {
    this.submitted = true;

    console.log(this.leaveTypeForm.value);

    // stop here if form is invalid
    if (this.leaveTypeForm.invalid) {
      return;
    }
    console.log("success ", this.leaveTypeForm.value);

    this._leaveTypeService.createLeaveType(this.leaveTypeForm.value).subscribe(res => {
      this.has_error = false;
      this.leaveType_req_msg = "Leave Type Successfully Created";
    }, error => {
      this.has_error = true;
      this.leaveType_req_msg = error.error.message;
    })
  }

}
