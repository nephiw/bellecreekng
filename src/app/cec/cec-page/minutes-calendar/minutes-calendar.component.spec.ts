import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesCalendarComponent } from './minutes-calendar.component';

describe('MinutesCalendarComponent', () => {
  let component: MinutesCalendarComponent;
  let fixture: ComponentFixture<MinutesCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutesCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
