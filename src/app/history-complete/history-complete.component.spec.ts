import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCompleteComponent } from './history-complete.component';

describe('HistoryCompleteComponent', () => {
  let component: HistoryCompleteComponent;
  let fixture: ComponentFixture<HistoryCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
