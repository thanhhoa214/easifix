import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotiComponent implements OnInit {
  title = 'Thông báo';

  ngOnInit(): void {}
}
