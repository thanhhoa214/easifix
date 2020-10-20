import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListStoreComponent } from './home-list-store.component';

describe('HomeListStoreComponent', () => {
  let component: HomeListStoreComponent;
  let fixture: ComponentFixture<HomeListStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeListStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
