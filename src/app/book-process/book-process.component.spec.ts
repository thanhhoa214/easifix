import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProcessComponent } from './book-process.component';

describe('BookProcessComponent', () => {
  let component: BookProcessComponent;
  let fixture: ComponentFixture<BookProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
