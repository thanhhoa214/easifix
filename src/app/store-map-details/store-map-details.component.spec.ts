import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMapDetailsComponent } from './store-map-details.component';

describe('StoreMapDetailsComponent', () => {
  let component: StoreMapDetailsComponent;
  let fixture: ComponentFixture<StoreMapDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreMapDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
