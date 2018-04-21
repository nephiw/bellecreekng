import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

export interface CECMinute {
  filename: string;
  date: Date;
}

@Injectable()
export class MinutesService {
  // TODO: Sort values that are returned by date
  // TODO: Group by year.
  constructor(private afs: AngularFirestore) {}

  public getMinutesByYear(year: string): Observable<CECMinute[]> {
    const minuteCollection = this.afs.collection<CECMinute>('cec-minutes', ref => {
      return ref.orderBy('date');
    });

    return minuteCollection.valueChanges().map(minutes => {
      return minutes.map((minute) => Object.assign({ met: true }, minute));
    });
  }
}
