import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StroreDetailsComponent } from './strore-details.component';

describe('StroreDetailsComponent', () => {
  let component: StroreDetailsComponent;
  let fixture: ComponentFixture<StroreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StroreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StroreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
