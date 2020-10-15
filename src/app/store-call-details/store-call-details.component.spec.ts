import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCallDetailsComponent } from './store-call-details.component';

describe('StoreCallDetailsComponent', () => {
  let component: StoreCallDetailsComponent;
  let fixture: ComponentFixture<StoreCallDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCallDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCallDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
