import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CecPageComponent } from './cec-page.component';
import { MomentPipe } from '../moment/moment.pipe';
import { mockPipe } from '../../../testing';

describe('CecPageComponent', () => {
  let component: CecPageComponent;
  let fixture: ComponentFixture<CecPageComponent>;

  beforeEach(async(() => {
    const MockMomentPipe = mockPipe<MomentPipe>('bcMoment');

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ CecPageComponent, MockMomentPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
