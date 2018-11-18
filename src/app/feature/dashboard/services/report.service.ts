import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constant } from '../constant/constant';

@Injectable()
export class ReportService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    console.log('LeaveType api error ', error);
    return throwError(error);
  }

  getLeaveReport(): Observable<any> {
    return this.http.get<any>(Constant.API_ENDPOINT + '/rest/reports/leaveReport')
      .pipe(catchError(this.errorHandler));
  }

}



