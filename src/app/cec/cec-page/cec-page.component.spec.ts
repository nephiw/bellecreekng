import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CecPageComponent, CECMinute } from './cec-page.component';
import { MomentPipe } from '../moment/moment.pipe';
import { mockPipe } from '../../../testing';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';

describe('CecPageComponent', () => {
  let component: CecPageComponent;
  let fixture: ComponentFixture<CecPageComponent>;

  beforeEach(async(() => {
    const minutes = new Subject<CECMinute>();
    const MockMomentPipe = mockPipe<MomentPipe>('bcMoment');

    const angularFirestore = jasmine.createSpyObj('AngularFirestore', ['collection']);
    const angularCollection = jasmine.createSpyObj('AngularCollection', ['valueChanges']);
    angularCollection.valueChanges.and.returnValue(minutes);
    angularFirestore.collection.and.returnValue(angularCollection);

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ CecPageComponent, MockMomentPipe ],
      providers: [
        { provide: AngularFirestore, useValue: angularFirestore }
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
