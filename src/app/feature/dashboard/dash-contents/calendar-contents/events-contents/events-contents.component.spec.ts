import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsContentsComponent } from './events-contents.component';

describe('EventsContentsComponent', () => {
  let component: EventsContentsComponent;
  let fixture: ComponentFixture<EventsContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
