import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMomoComponent } from './success-momo.component';

describe('SuccessMomoComponent', () => {
  let component: SuccessMomoComponent;
  let fixture: ComponentFixture<SuccessMomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessMomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
