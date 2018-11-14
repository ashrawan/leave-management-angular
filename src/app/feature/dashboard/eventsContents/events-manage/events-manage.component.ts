import { EventService } from './../../services/event.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-events-manage',
  templateUrl: './events-manage.component.html',
  styleUrls: ['./events-manage.component.css']
})
export class EventsManageComponent implements OnInit {

  @Input() event: Event;
  minDate: Date;
  create_event_msg: string;
  public has_error = false;

  eventForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _eventService: EventService) { }

  ngOnInit() {
    this.minDate = new Date();
    this.eventForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  get f() { return this.eventForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    }

    this._eventService.createEvent(this.eventForm.value).subscribe(res => {
      this.has_error = false;
      this.create_event_msg = 'Event succesfully Created';
      this.eventForm.reset();
      this.submitted = false;
    }, error => {
      this.has_error = true;
      this.create_event_msg = error.error.message;
    });
  }


}
