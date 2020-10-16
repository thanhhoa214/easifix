import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFailedComponent } from './book-failed.component';

describe('BookFailedComponent', () => {
  let component: BookFailedComponent;
  let fixture: ComponentFixture<BookFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
