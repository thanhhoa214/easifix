import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
