import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAfterRequest1Component } from './pending-after-request1.component';

describe('PendingAfterRequest1Component', () => {
  let component: PendingAfterRequest1Component;
  let fixture: ComponentFixture<PendingAfterRequest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAfterRequest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAfterRequest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
