import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  days = [true, false, false, false, false, false, false];
  user: User;
  dateNow: number = 6;
  monthNow: number = 11;
  constructor() {}

  ngOnInit(): void {}

  updateDay(index: number) {
    const newDays = this.days.map((_) => false);
    newDays[index] = true;
    this.days = newDays;
    this.dateNow = 6 + index;
    this.monthNow = 11;
  }
}
