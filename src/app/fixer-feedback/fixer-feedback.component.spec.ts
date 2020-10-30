import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixerFeedbackComponent } from './fixer-feedback.component';

describe('FixerFeedbackComponent', () => {
  let component: FixerFeedbackComponent;
  let fixture: ComponentFixture<FixerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixerFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
