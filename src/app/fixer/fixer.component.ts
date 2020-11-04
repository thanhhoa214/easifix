import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fixer',
  templateUrl: './fixer.component.html',
  styleUrls: ['./fixer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FixerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
