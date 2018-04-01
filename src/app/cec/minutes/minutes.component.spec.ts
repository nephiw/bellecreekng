import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MinutesComponent } from './minutes.component';
import { ActivatedRouteStub } from '../../../test/activated-route-stub';

fdescribe('MinutesComponent', () => {
  let component: MinutesComponent;
  let fixture: ComponentFixture<MinutesComponent>;
  let moment: jasmine.Spy;
  let format: jasmine.Spy;

  beforeEach(async(() => {
    moment = jasmine.createSpy('moment');
    format = jasmine.createSpy('format');

    moment.and.returnValue({ format });
    format.and.returnValue('test value');


    const mockRoute = new ActivatedRouteStub();

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
