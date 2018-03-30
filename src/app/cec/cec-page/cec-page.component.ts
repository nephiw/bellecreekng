import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-cec-page',
  templateUrl: './cec-page.component.html',
  styleUrls: ['./cec-page.component.css']
})
export class CecPageComponent implements OnInit {
  public tiles: any[];

  public ngOnInit(): void {
    this.tiles = [
      { month: 'Jan', met: true, date: '15012017' },
      { month: 'Feb', met: true, date: '15022017' },
      { month: 'Mar', met: true, date: '15032017' },
      { month: 'Apr', met: true, date: '15042017' },
      { month: 'May', met: true, date: '15052017' },
      { month: 'Jun', met: true, date: '15062017' },
      { month: 'Jul', met: true, date: '15072017' },
      { month: 'Aug', met: true, date: '15082017' },
      { month: 'Sep', met: true, date: '15092017' },
      { month: 'Oct', met: true, date: '15102017' },
      { month: 'Nov', met: true, date: '15112017' },
      { month: 'Dec', met: true, date: '15122017' }
    ];
  }
}
