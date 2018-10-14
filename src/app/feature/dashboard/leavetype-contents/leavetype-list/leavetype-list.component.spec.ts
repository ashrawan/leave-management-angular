import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetypeListComponent } from './leavetype-list.component';

describe('LeavetypeListComponent', () => {
  let component: LeavetypeListComponent;
  let fixture: ComponentFixture<LeavetypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavetypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavetypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
