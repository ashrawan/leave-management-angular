import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaverequestManageComponent } from './leaverequest-manage.component';

describe('LeaverequestManageComponent', () => {
  let component: LeaverequestManageComponent;
  let fixture: ComponentFixture<LeaverequestManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaverequestManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaverequestManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
