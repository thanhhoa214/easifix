import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-search-modal',
  templateUrl: './home-search-modal.component.html',
  styleUrls: ['./home-search-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSearchModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
