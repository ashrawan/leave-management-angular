import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaverequestDetailsComponent } from './leaverequest-details.component';

describe('LeaverequestDetailsComponent', () => {
  let component: LeaverequestDetailsComponent;
  let fixture: ComponentFixture<LeaverequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaverequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaverequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
