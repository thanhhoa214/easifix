import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionScreenComponent } from './promotion-screen.component';

describe('PromotionScreenComponent', () => {
  let component: PromotionScreenComponent;
  let fixture: ComponentFixture<PromotionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
