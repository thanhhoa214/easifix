import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOngoingComponent } from './history-ongoing.component';

describe('HistoryOngoingComponent', () => {
  let component: HistoryOngoingComponent;
  let fixture: ComponentFixture<HistoryOngoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOngoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
