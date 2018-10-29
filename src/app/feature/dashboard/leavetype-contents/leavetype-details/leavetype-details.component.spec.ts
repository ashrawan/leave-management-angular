import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetypeDetailsComponent } from './leavetype-details.component';

describe('LeavetypeDetailsComponent', () => {
  let component: LeavetypeDetailsComponent;
  let fixture: ComponentFixture<LeavetypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavetypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavetypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
