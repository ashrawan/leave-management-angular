import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHomeComponent } from './dash-home.component';

describe('DashHomeComponent', () => {
  let component: DashHomeComponent;
  let fixture: ComponentFixture<DashHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
