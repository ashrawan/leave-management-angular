import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leaveType.service';

@Component({
  selector: 'app-leavetype-list',
  templateUrl: './leavetype-list.component.html',
  styleUrls: ['./leavetype-list.component.css']
})
export class LeavetypeListComponent implements OnInit {

  leaveTypes;
  errorMsg;

  constructor(private _leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.getAllLeaveTypes();
  }

  getAllLeaveTypes() {
    this._leaveTypeService.getAllLeaveTypes()
      .subscribe(
        data => {
          this.leaveTypes = data;
          // console.log("leaveTypes data: ", data);
        },
        error => this.errorMsg = error);
  }


}
