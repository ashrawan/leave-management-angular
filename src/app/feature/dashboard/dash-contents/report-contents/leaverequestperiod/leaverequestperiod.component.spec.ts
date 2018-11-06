import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaverequestperiodComponent } from './leaverequestperiod.component';

describe('LeaverequestperiodComponent', () => {
  let component: LeaverequestperiodComponent;
  let fixture: ComponentFixture<LeaverequestperiodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaverequestperiodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaverequestperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
