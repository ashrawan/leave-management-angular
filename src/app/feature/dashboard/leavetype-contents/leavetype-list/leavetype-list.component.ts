import { EmployeeService } from './../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leaveType.service';

@Component({
  selector: 'app-leavetype-list',
  templateUrl: './leavetype-list.component.html',
  styleUrls: ['./leavetype-list.component.css']
})
export class LeavetypeListComponent implements OnInit {

  private id: number;
  private sub: any;

  private isLeaveTypeSelected: boolean = false;
  private selectedleaveType;
  leaveTypes;
  errorMsg;
  displayedColumns: string[] = ['No.', 'Type Name', 'Options'];

  constructor(private route: ActivatedRoute, private _leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.getAllLeaveTypes();
    this.routeId();
  }

  routeId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getLeaveTypeById(this.id);
    });
  }

  getAllLeaveTypes() {
    this._leaveTypeService.getAllLeaveTypes()
      .subscribe(
        data => { this.leaveTypes = data; console.log("leaveTypes data: ", data); },
        error => this.errorMsg = error);
  }

  getLeaveTypeById(id: number) {
    if (id > 0) {
      this._leaveTypeService.getLeaveTypeById(id)
        .subscribe(
          data => {
            this.selectedleaveType = data;
            this.isLeaveTypeSelected = true;
            console.log("Selected Leave Type data: ", data);
          },
          error => this.errorMsg = error);
    } else {
      this.isLeaveTypeSelected = false;
    }
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
