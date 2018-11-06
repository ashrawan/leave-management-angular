import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css']
})
export class CalendarHeaderComponent {

  @Input()
  view: string;

  @Input()
  viewDate: Date;

  @Input()
  locale = 'en';

  @Output()
  viewChange: EventEmitter<string> = new EventEmitter();

  @Output()
  viewDateChange: EventEmitter<Date> = new EventEmitter();

}
