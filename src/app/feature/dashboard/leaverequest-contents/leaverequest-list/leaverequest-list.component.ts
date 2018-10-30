import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveService } from '../../services/employeeLeave.service';

@Component({
  selector: 'app-leaverequest-list',
  templateUrl: './leaverequest-list.component.html',
  styleUrls: ['./leaverequest-list.component.css']
})
export class LeaverequestListComponent implements OnInit {

  leaveRequests;
  errorMsg;

  loading: boolean = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 10;
  sortKey = "fromDate";
  reverse: boolean = false;

  constructor(private _employeeLeaveService: EmployeeLeaveService) { }

  ngOnInit() {
    this.getAllEmployeeLeaves();
  }

  getPage(page: number) {
    this.loading = true;
    this.currentPage = page;
    this.getAllEmployeeLeaves();
  }
  sort(key: string){
    this.loading = true;
    this.sortKey = key+",".concat(this.reverse ? 'DESC': 'ASC');
    this.reverse = !this.reverse;
    this.getAllEmployeeLeaves();
  }

  getAllEmployeeLeaves() {
    this._employeeLeaveService.getAllEmployeeLeaves(this.currentPage-1, this.size, this.sortKey)
      .subscribe(
        data => {
          this.leaveRequests = data.content;
          this.totalElements = data.totalElements;
          this.size = data.size;
          this.numberOfElements = data.numberOfElements;
          this.loading = false;
          console.log("employees data: ", data);
        },
        error => this.errorMsg = error);
  }

}
