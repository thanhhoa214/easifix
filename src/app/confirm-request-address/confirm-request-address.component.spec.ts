import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRequestAddressComponent } from './confirm-request-address.component';

describe('ConfirmRequestAddressComponent', () => {
  let component: ConfirmRequestAddressComponent;
  let fixture: ComponentFixture<ConfirmRequestAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmRequestAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRequestAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
