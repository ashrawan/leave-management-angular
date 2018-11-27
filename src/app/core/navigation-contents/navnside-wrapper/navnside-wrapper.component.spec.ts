import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavnsideWrapperComponent } from './navnside-wrapper.component';

describe('NavnsideWrapperComponent', () => {
  let component: NavnsideWrapperComponent;
  let fixture: ComponentFixture<NavnsideWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavnsideWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavnsideWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
