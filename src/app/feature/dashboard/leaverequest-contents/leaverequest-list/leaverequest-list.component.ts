import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveService } from '../../services/employeeLeave.service';

@Component({
  selector: 'app-leaverequest-list',
  templateUrl: './leaverequest-list.component.html',
  styleUrls: ['./leaverequest-list.component.css']
})
export class LeaverequestListComponent implements OnInit {

  private id: number;
  private sub: any;

  private isLeaveRequestSelected: boolean = false;
  private selectedLeaveRequest;
  leaveRequests;
  errorMsg;

  constructor(private route: ActivatedRoute, private _employeeLeaveService: EmployeeLeaveService) { }

  ngOnInit() {
    this.getAllEmployeeLeaves();
    this.routeId();
  }

  routeId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getEmployeeLeaveById(this.id);
    });
  }

  getAllEmployeeLeaves() {
    this._employeeLeaveService.getAllEmployeeLeaves()
      .subscribe(
        data => { this.leaveRequests = data.content; console.log("employees data: ", data); },
        error => this.errorMsg = error);
  }

  getEmployeeLeaveById(id: number) {
    if (id > 0) {
      this._employeeLeaveService.getEmployeeLeaveById(id)
        .subscribe(
          data => {
            this.selectedLeaveRequest = data;
            this.isLeaveRequestSelected = true;
            console.log("selectedEmployee data: ", data);
          },
          error => this.errorMsg = error);
    } else {
      this.isLeaveRequestSelected = false;
    }
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
