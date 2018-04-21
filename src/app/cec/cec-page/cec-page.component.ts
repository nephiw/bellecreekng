import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { MinutesService, CECMinute } from './minutes.service';

@Component({
  selector: 'bc-cec-page',
  templateUrl: './cec-page.component.html',
  styleUrls: ['./cec-page.component.css']
})
export class CecPageComponent {
  public months: any[];
  public years: string[];

  // TODO: Move AngularFire logic to a service
  // TODO: Sort values that are returned by date
  // TODO: Group by year.
  constructor(private minutesService: MinutesService) {
    this.minutesService.getMinutesByYear('2017').subscribe((months: any[]) => {
      this.months = months;
    });

    this.years = ['2015', '2016', '2017', '2018'];
  }

  public onYearChange(year: string): void {
    console.log(year);
    this.minutesService.getMinutesByYear(year).subscribe((months: any[]) => {
      this.months = months;
    });
  }
}
