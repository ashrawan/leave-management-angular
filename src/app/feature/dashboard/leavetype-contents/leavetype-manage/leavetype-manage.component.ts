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

  constructor(private _leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
  }

  createLeaveType(formData){
    this._leaveTypeService.createLeaveType(formData.value).subscribe(res => {
      this.has_error = false;
      this.leaveType_req_msg = "Leave Type Successfully Created";
    }, error => {
      this.has_error = true;
      this.leaveType_req_msg = error.error.message;
    })
  }

}
