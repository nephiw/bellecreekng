import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export class ActivatedRouteStub {
  private subject = new ReplaySubject<ParamMap>();
  private readonly paramMap = this.subject.asObservable();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  public setParamMap(params?: Params): void {
    this.subject.next(convertToParamMap(params));
  }
}
