import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAfterRequest4Component } from './pending-after-request4.component';

describe('PendingAfterRequest4Component', () => {
  let component: PendingAfterRequest4Component;
  let fixture: ComponentFixture<PendingAfterRequest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAfterRequest4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAfterRequest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
