import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoreDetailsComponent } from './list-store-details.component';

describe('ListStoreDetailsComponent', () => {
  let component: ListStoreDetailsComponent;
  let fixture: ComponentFixture<ListStoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
