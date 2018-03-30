import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'bc-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent {
  public date: string;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((param: any) => {
      this.date = moment(param.get('date'), 'DDMMYYYY').format('ddd, MMM D YYYY');
    });
  }
}
