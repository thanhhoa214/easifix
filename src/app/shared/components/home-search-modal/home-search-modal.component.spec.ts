import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchModalComponent } from './home-search-modal.component';

describe('HomeSearchModalComponent', () => {
  let component: HomeSearchModalComponent;
  let fixture: ComponentFixture<HomeSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
