import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-history-completed',
  templateUrl: './history-completed.component.html',
  styleUrls: ['./history-completed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryCompletedComponent implements OnInit {
  updated = true;

  constructor() {}

  ngOnInit(): void {}

  getArray(length: number) {
    return Array(length).fill('');
  }
}
