import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['./promotion-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
