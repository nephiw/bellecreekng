import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MinutesComponent } from './minutes.component';
import { By } from '@angular/platform-browser';
import { ActivatedRouteStub } from '@test/activated-route-stub';

describe('MinutesComponent', () => {
  let component: MinutesComponent;
  let fixture: ComponentFixture<MinutesComponent>;
  let debugElement: DebugElement;
  let moment: jasmine.Spy;
  let format: jasmine.Spy;

  beforeEach(async(() => {
    moment = jasmine.createSpy('moment');
    format = jasmine.createSpy('format');

    moment.and.returnValue({ format });
    format.and.returnValue('Tuesdays');


    const mockRoute = new ActivatedRouteStub({
      date: '2018-01-01'
    });

    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ MinutesComponent ],
      providers: [
        { provide: 'moment', useValue: moment },
        { provide: ActivatedRoute, useValue: mockRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the date for the minutes', () => {
    const headerElem = debugElement.query(By.css('h2')).nativeElement;
    expect(headerElem.textContent).toContain('Tuesdays');
  });

  it('builds the path and date', () => {
    expect(component.path).toBe('assets/minutes/2018-01-01.md');
    expect(component.date).toBe('Tuesdays');
  });
});
