import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaverequestMainComponent } from './leaverequest-main.component';

describe('LeaverequestMainComponent', () => {
  let component: LeaverequestMainComponent;
  let fixture: ComponentFixture<LeaverequestMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaverequestMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaverequestMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
