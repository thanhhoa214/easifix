import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionDetailScreenComponent } from './promotion-detail-screen.component';

describe('PromotionDetailScreenComponent', () => {
  let component: PromotionDetailScreenComponent;
  let fixture: ComponentFixture<PromotionDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionDetailScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
