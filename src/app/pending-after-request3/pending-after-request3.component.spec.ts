import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAfterRequest3Component } from './pending-after-request3.component';

describe('PendingAfterRequest3Component', () => {
  let component: PendingAfterRequest3Component;
  let fixture: ComponentFixture<PendingAfterRequest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAfterRequest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAfterRequest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
