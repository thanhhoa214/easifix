import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
