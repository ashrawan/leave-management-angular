import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constant } from '../constant/constant';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse){
    console.log("Employee api error ", error);
    return throwError(error); 
  }

  getAllEmployees(): Observable<any> {
    return this.http.get<Employee[]>(Constant.API_ENDPOINT+"/rest/employees")
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeById(id): Observable<Employee[]> {
    return this.http.get<Employee[]>(Constant.API_ENDPOINT+"/rest/employees/"+id)
      .pipe(catchError(this.errorHandler));
  }

  createEmployee(EmployeeData): Observable<Employee[]> {
    return this.http.post<any>(Constant.API_ENDPOINT+"/employees", EmployeeData)
      .pipe(catchError(this.errorHandler));
  }

  updateEmployee(EmployeeData, id): Observable<Employee[]> {
    return this.http.put<any>(Constant.API_ENDPOINT+"/rest/employees"+id, EmployeeData)
      .pipe(catchError(this.errorHandler));
  }

}
