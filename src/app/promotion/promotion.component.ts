import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromotionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
