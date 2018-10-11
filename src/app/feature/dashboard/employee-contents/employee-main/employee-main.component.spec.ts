import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMainComponent } from './employee-main.component';

describe('EmployeeMainComponent', () => {
  let component: EmployeeMainComponent;
  let fixture: ComponentFixture<EmployeeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
