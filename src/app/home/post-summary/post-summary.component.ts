import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bc-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.css']
})
export class PostSummaryComponent implements OnInit {
  @Input() public post: any;

  public ngOnInit(): void {}
}
