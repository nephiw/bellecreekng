import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bc-minutes-calendar',
  templateUrl: './minutes-calendar.component.html',
  styleUrls: ['./minutes-calendar.component.css']
})
export class MinutesCalendarComponent {
  @Input() public months: any[];

  constructor() { }
}
