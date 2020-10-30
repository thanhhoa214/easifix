import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-popup',
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPopupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
