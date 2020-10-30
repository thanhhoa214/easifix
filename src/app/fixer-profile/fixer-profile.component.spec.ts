import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixerProfileComponent } from './fixer-profile.component';

describe('FixerProfileComponent', () => {
  let component: FixerProfileComponent;
  let fixture: ComponentFixture<FixerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
