import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface CECMinute {
  filename: string;
  date: Date;
}

@Component({
  selector: 'bc-cec-page',
  templateUrl: './cec-page.component.html',
  styleUrls: ['./cec-page.component.css']
})
export class CecPageComponent { // implements OnInit {
  public months: any[];

  public minuteCollection: AngularFirestoreCollection<CECMinute>;
  public minutes: Observable<CECMinute[]>;

  // TODO: Move AngularFire logic to a service
  // TODO: Sort values that are returned by date
  // TODO: Group by year.
  constructor(private afs: AngularFirestore) {
    this.minuteCollection = this.afs.collection<CECMinute>('cec-minutes');
    this.minutes = this.minuteCollection.valueChanges();
    this.minutes.subscribe(minutes => {
      this.months = [];
      minutes.forEach((minute) => {
        this.months.push(Object.assign({ met: true }, minute));
      });
    });
  }
}
