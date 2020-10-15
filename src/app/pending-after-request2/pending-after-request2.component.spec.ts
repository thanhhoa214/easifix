import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAfterRequest2Component } from './pending-after-request2.component';

describe('PendingAfterRequest2Component', () => {
  let component: PendingAfterRequest2Component;
  let fixture: ComponentFixture<PendingAfterRequest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAfterRequest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAfterRequest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
