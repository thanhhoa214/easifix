import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fixer-feedback',
  templateUrl: './fixer-feedback.component.html',
  styleUrls: ['./fixer-feedback.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixerFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
