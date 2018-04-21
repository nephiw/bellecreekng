import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CecPageComponent } from './cec-page.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { MinutesService } from './minutes.service';

describe('CecPageComponent', () => {
  let component: CecPageComponent;
  let fixture: ComponentFixture<CecPageComponent>;
  let minutes$: Subject<any>;

  beforeEach(async(() => {
    minutes$ = new Subject();
    const minutesService = jasmine.createSpyObj('MinutesService', [
      'getMinutesByYear'
    ]);
    minutesService.getMinutesByYear.and.returnValue(minutes$);

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ CecPageComponent ],
      providers: [
        { provide: MinutesService, useValue: minutesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
