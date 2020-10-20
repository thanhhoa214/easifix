import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyScreenComponent } from './policy-screen.component';

describe('PolicyScreenComponent', () => {
  let component: PolicyScreenComponent;
  let fixture: ComponentFixture<PolicyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
