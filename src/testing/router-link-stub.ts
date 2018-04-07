import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onClick()' }
})
export class RouterLinkStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  public onClick(): void {
    this.navigatedTo = this.linkParams;
  }
}
