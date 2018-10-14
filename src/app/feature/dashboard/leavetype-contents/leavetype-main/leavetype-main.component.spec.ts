import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetypeMainComponent } from './leavetype-main.component';

describe('LeavetypeMainComponent', () => {
  let component: LeavetypeMainComponent;
  let fixture: ComponentFixture<LeavetypeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavetypeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavetypeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
