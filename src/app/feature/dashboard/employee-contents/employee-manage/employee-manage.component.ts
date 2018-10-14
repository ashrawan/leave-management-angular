import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, concat, of, Subject } from 'rxjs';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent implements OnInit {

  has_error:boolean = false;
  create_employee_msg: String;

  supervisorEmployees: Observable<any>;
  employeeinput$ = new Subject<string>();
  employeeSupervisor: Employee = null;
  isSelectLoading: boolean = false;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadEmployee();
  }

  private loadEmployee() {
    this.supervisorEmployees = concat(
      of([]), // default items
      this.employeeinput$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => this.isSelectLoading = true),
        switchMap(term => this._employeeService.getEmployeeByFullName(term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.isSelectLoading = false)
        ))
      )
    );
  }

  createEmployee(formData) {
    console.log("form data ", formData.value);
    let newEmployeeInfo = {...formData.value, "employeeSupervisor":this.employeeSupervisor};
    console.log("new data ", newEmployeeInfo);
    this._employeeService.createEmployee(newEmployeeInfo).subscribe(res => {
      // console.log("creation successful", res);
      this.has_error = false;
      this.create_employee_msg = "Registration Successful";
    }, error => {
      // console.log("user creation error", error.error);
      this.has_error = true;
      this.create_employee_msg = error.error.message;
    });

  }

}
