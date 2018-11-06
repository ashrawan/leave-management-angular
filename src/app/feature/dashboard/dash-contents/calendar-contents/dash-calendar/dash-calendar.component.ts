import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';
import {
  CalendarEvent,
  CalendarView
} from 'angular-calendar';
import { Subject, Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

interface LeaveEvents {
  id: number;
  title: string;
  dateFrom: string;
  dateTo: string;
}

@Component({
  selector: 'app-dash-calendar',
  templateUrl: './dash-calendar.component.html',
  styleUrls: ['./dash-calendar.component.css']
})
export class DashCalendarComponent implements OnInit {

  view = 'month';
  viewDate: Date = new Date();

  activeDayIsOpen = false;
  refresh: Subject<any> = new Subject();
  excludeDays: number[] = [];
  events$: Observable<Array<CalendarEvent<{ leaveEvents: LeaveEvents }>>>;

  leaveEventsList = {
    'results': [
      {
        'id': 1,
        'title': 'leave from emp1',
        'dateFrom': '2018-11-06',
        'dateTo': '2018-11-06',
      },
      {
        'id': 2,
        'title': 'leave from emp2',
        'dateFrom': '2018-11-08',
        'dateTo': '2018-11-10',
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchEvents();
    }, 500);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventClicked(event: CalendarEvent<{ leaveEvent: LeaveEvents }>): void {
    console.log('Event clicked', event.meta.leaveEvent);
  }

  fetchEvents(): void {
    this.events$ = this.getAllEventsList()
      .pipe(
        map((results: any) => {
          console.log(results);
          return results.map((leaveEvent: LeaveEvents) => {
            return {
              title: leaveEvent.title,
              start: startOfDay(new Date(leaveEvent.dateFrom)),
              end: endOfDay(new Date(leaveEvent.dateTo)),
              allDay: true,
              meta: {
                leaveEvent
              }
            };
          });
        }));
  }

  getAllEventsList(): Observable<LeaveEvents[]> {
    console.log('leave event list ', this.leaveEventsList);
    return of(this.leaveEventsList.results);
  }

}
