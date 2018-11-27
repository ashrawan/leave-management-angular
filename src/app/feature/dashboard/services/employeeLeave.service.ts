import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constant } from '../constant/constant';
import { EmployeeLeave } from '../model/EmployeeLeave';

@Injectable()
export class EmployeeLeaveService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    console.log('EmployeeLeave api error ', error);
    return throwError(error);
  }

  getAllEmployeeLeaves(page, size, sort): Observable<any> {
    return this.http.get<EmployeeLeave[]>(Constant.API_ENDPOINT + '/rest/employee-leaves',
    {
      params: {
        page: page,
        size: size,
        sort: sort
      }
    })
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeLeaveById(id): Observable<EmployeeLeave> {
    return this.http.get<EmployeeLeave>(Constant.API_ENDPOINT + '/rest/employee-leaves/' + id)
      .pipe(catchError(this.errorHandler));
  }

  createEmployeeLeave(EmployeeLeaveData): Observable<EmployeeLeave> {
    return this.http.post<EmployeeLeave>(Constant.API_ENDPOINT + '/rest/employee-leaves', EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

  updateEmployeeLeave(EmployeeLeaveData, id): Observable<EmployeeLeave> {
    return this.http.put<EmployeeLeave>(Constant.API_ENDPOINT + '/rest/employee-leaves/' + id, EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

  approveEmployeeLeave(EmployeeLeaveData): Observable<EmployeeLeave> {
    return this.http.put<EmployeeLeave>(Constant.API_ENDPOINT + '/rest/employee-leaves/approve-employee-leave', EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeLeavesBetweenDate(startDate, endDate): Observable<EmployeeLeave[]> {
    return this.http.get<EmployeeLeave[]>(Constant.API_ENDPOINT + '/rest/employee-leaves/byDate',
    {
      params: {
        date1: startDate,
        date2: endDate
      }
    })
      .pipe(catchError(this.errorHandler));
  }
}
