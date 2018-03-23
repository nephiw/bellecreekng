import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcNavigationComponent } from './navigation.component';

describe('BcNavigationComponent', () => {
  let component: BcNavigationComponent;
  let fixture: ComponentFixture<BcNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
