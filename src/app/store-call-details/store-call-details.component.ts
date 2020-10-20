import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-store-call-details',
  templateUrl: './store-call-details.component.html',
  styleUrls: ['./store-call-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreCallDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
