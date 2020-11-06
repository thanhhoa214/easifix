import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/data.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  days = [true, false, true, false, false, false, false];
  user: User;
  dateNow: number = 9;
  monthNow: number = 11;
  selectedDay = 0;
  updated = false;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.user = this._dataService.getUser('3');
  }

  updateDay(index: number) {
    this.selectedDay = index;
    this.dateNow = 9 + index;
    this.monthNow = 11;
  }
}
