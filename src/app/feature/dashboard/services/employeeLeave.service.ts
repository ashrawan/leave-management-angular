import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constant } from '../constant/constant';
import { EmployeeLeave } from '../model/EmployeeLeave';

@Injectable()
export class EmployeeLeaveService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    console.log("EmployeeLeave api error ", error);
    return throwError(error);
  }

  getAllEmployeeLeaves(): Observable<EmployeeLeave[]> {
    return this.http.get<EmployeeLeave[]>(Constant.API_ENDPOINT + "/rest/employee-leaves")
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeLeaveById(id): Observable<EmployeeLeave[]> {
    return this.http.get<EmployeeLeave[]>(Constant.API_ENDPOINT + "/rest/employee-leaves/" + id)
      .pipe(catchError(this.errorHandler));
  }

  createEmployeeLeave(EmployeeLeaveData): Observable<EmployeeLeave[]> {
    return this.http.post<any>(Constant.API_ENDPOINT + "/rest/employee-leaves", EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

  updateEmployeeLeave(EmployeeLeaveData, id): Observable<EmployeeLeave[]> {
    return this.http.put<any>(Constant.API_ENDPOINT + "/rest/employee-leaves" + id, EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

}
