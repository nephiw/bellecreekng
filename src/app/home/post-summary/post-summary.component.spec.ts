import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { PostSummaryComponent } from './post-summary.component';
import { By } from '@angular/platform-browser';

describe('PostSummaryComponent', () => {
  let component: PostSummaryComponent;
  let fixture: ComponentFixture<PostSummaryComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ PostSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSummaryComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.post = { title: 'Test Title', summary: 'Test Summary' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the title', () => {
    const titleElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(titleElement.textContent).toContain('Test Title');
  });

  it('shows the summary', () => {
    const summaryElement = fixture.debugElement.query(By.css('.summary')).nativeElement;
    expect(summaryElement.textContent).toContain('Test Summary');
  });
});
