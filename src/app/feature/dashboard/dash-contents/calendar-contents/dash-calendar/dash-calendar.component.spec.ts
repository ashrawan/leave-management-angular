import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCalendarComponent } from './dash-calendar.component';

describe('DashCalendarComponent', () => {
  let component: DashCalendarComponent;
  let fixture: ComponentFixture<DashCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
