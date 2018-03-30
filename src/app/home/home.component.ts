import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts: any[];

  public ngOnInit(): void {
    this.posts = [
      { title: 'First Post', summary: 'af jasf;j asfkj;asf jk a slk j;sflk jasflk j;a l kjal;skjg oiaj g;oaid g' },
      { title: 'Second Post', summary: 'asdf asdf ;jk lsdf;jkasdf jaksf jkasfkj; asfkja sfjk sf fas' },
      { title: 'Third Post', summary: 'asdfasdf asdf asdf asdf asd as as asasgasggga a agag asdgasdg aerg asdg asdf' }
    ];
  }
}
