import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-cec-page',
  templateUrl: './cec-page.component.html',
  styleUrls: ['./cec-page.component.css']
})
export class CecPageComponent implements OnInit {
  public months: any[];

  public ngOnInit(): void {
    this.months = [
      { met: true, date: '2017-01-18' },
      { met: true, date: '2017-02-15' },
      { met: true, date: '2017-03-15' },
      { met: true, date: '2017-04-19' },
      { met: true, date: '2017-05-17' },
      { met: true, date: '2017-06-14' },
      { met: true, date: '2017-07-19' },
      { met: true, date: '2017-08-16' },
      { met: true, date: '2017-09-20' },
      { met: true, date: '2017-10-18' },
      { met: true, date: '2017-11-15' },
      { met: true, date: '2017-12-21' }
    ];
  }
}
