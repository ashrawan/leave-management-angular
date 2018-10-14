import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetypeManageComponent } from './leavetype-manage.component';

describe('LeavetypeManageComponent', () => {
  let component: LeavetypeManageComponent;
  let fixture: ComponentFixture<LeavetypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavetypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavetypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
