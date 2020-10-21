import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-store-detail',
  templateUrl: './list-store-detail.component.html',
  styleUrls: ['./list-store-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListStoreDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
