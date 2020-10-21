import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-policy-setting',
  templateUrl: './policy-setting.component.html',
  styleUrls: ['./policy-setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolicySettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
