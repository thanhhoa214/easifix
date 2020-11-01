import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fixer-feedback',
  templateUrl: './fixer-feedback.component.html',
  styleUrls: ['./fixer-feedback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FixerFeedbackComponent implements OnInit {
  backTo: string;
  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { backTo } = this._activatedRoute.snapshot.queryParams;
    console.log(backTo);

    this.backTo = backTo;
  }
}
