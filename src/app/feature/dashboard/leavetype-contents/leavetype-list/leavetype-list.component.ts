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
  loading = true;

  constructor(private _leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.getAllLeaveTypes();
  }

  getAllLeaveTypes() {
    this._leaveTypeService.getAllLeaveTypes()
      .subscribe(
        data => {
          this.leaveTypes = data;
          this.loading = false;
          // console.log("leaveTypes data: ", data);
        },
        error => this.errorMsg = error);
  }

  searchLeaveType(form) {
    // console.log(form.value);
    this.loading = true;
    this._leaveTypeService.searchByLeaveType(form.value.q).subscribe(res => {
      this.leaveTypes = res;
      this.loading = false;
    }, error => {
      this.errorMsg = error;
    });
  }


}
