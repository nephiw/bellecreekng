import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { MinutesService, CECMinute } from './minutes.service';

@Component({
  selector: 'bc-cec-page',
  templateUrl: './cec-page.component.html',
  styleUrls: ['./cec-page.component.css']
})
export class CecPageComponent { // implements OnInit {
  public months: any[];

  // TODO: Move AngularFire logic to a service
  // TODO: Sort values that are returned by date
  // TODO: Group by year.
  constructor(private minutesService: MinutesService) {
    this.minutesService.getMinutesByYear('2017').subscribe((months: CECMinute[]) => {
      this.months = months;
    });
  }
}
