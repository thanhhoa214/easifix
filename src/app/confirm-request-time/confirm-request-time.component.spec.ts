import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRequestTimeComponent } from './confirm-request-time.component';

describe('ConfirmRequestTimeComponent', () => {
  let component: ConfirmRequestTimeComponent;
  let fixture: ComponentFixture<ConfirmRequestTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmRequestTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRequestTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
