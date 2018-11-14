import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsManageComponent } from './events-manage.component';

describe('EventsManageComponent', () => {
  let component: EventsManageComponent;
  let fixture: ComponentFixture<EventsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
