import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesCalendarComponent } from './minutes-calendar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockPipe } from '@test/test-helpers';
import { MomentPipe } from '../../moment/moment.pipe';

describe('MinutesCalendarComponent', () => {
  let component: MinutesCalendarComponent;
  let fixture: ComponentFixture<MinutesCalendarComponent>;

  beforeEach(async(() => {
    const MockMomentPipe = mockPipe<MomentPipe>('bcMoment');

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ MinutesCalendarComponent, MockMomentPipe ]
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
