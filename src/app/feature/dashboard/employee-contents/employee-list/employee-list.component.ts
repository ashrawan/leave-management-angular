import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private id: number;
  private sub: any;

  private isEmployeeSelected: boolean = false;
  private selectedEmployee;
  employees;
  errorMsg;

  constructor(private route: ActivatedRoute, private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployees();
    this.routeId();
  }

  routeId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getEmployeeById(this.id);
    });
  }

  getAllEmployees() {
    this._employeeService.getAllEmployees()
      .subscribe(
        data => { this.employees = data.content; console.log("employees data: ", data); },
        error => this.errorMsg = error);
  }

  getEmployeeById(id: number) {
    if (id > 0) {
      this._employeeService.getEmployeeById(id)
        .subscribe(
          data => {
            this.selectedEmployee = data;
            this.isEmployeeSelected = true;
            console.log("selectedEmployee data: ", data);
          },
          error => this.errorMsg = error);
    } else {
      this.isEmployeeSelected = false;
    }
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
