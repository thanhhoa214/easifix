import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-request-more',
  templateUrl: './request-more.component.html',
  styleUrls: ['./request-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestMoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
