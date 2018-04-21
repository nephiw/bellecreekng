import { TestBed, inject } from '@angular/core/testing';

import { MinutesService, CECMinute } from './minutes.service';
import { Subject } from 'rxjs/Subject';

describe('MinutesService', () => {
  let minutes: Subject<CECMinute>;
  let service: MinutesService;

  beforeEach(() => {
    minutes = new Subject<CECMinute>();
    const angularFirestore = jasmine.createSpyObj('AngularFirestore', ['collection']);
    const angularCollection = jasmine.createSpyObj('AngularCollection', ['valueChanges']);
    angularCollection.valueChanges.and.returnValue(minutes);
    angularFirestore.collection.and.returnValue(angularCollection);

    service = new MinutesService(angularFirestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
