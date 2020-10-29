import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Service } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingComponent implements OnInit {
  days = [true, false, false, false, false, false, false];
  parts = [true, false, false];
  service: Service;
  category: Category;
  dateNow: number = 30;
  monthNow: number = 10;

  constructor(
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );
    this.service = this._dataService.getService(user, category, service);
    this.category = this._dataService.getCategory(user, category);
  }

  commitments = [
    {
      title: ['Bảo hành', 'dịch vụ'],
      icon: 'arrow-undo-circle-outline',
    },
    {
      title: ['Bảo hiểm', 'hỏng, vỡ đồ'],
      icon: 'shield-checkmark-outline',
    },
    {
      title: ['Đảm bảo', 'nhân thân'],
      icon: 'person',
    },
    {
      title: ['Đảm bảo', 'nhanh chóng'],
      icon: 'hourglass-outline',
    },
    {
      title: ['Khả năng', 'nhân viên'],
      icon: 'construct-outline',
    },
  ];

  updateDay(index: number) {
    const newDays = this.days.map((_) => false);
    newDays[index] = true;
    this.days = newDays;
    if (index == 0) {
      this.dateNow = 30;
      this.monthNow = 10;
    } else if (index == 1) {
      this.dateNow = 31;
      this.monthNow = 10;
    } else if (index == 2) {
      this.dateNow = 1;
      this.monthNow = 11;
    } else if (index == 3) {
      this.dateNow = 2;
      this.monthNow = 11;
    } else if (index == 4) {
      this.dateNow = 3;
      this.monthNow = 11;
    } else if (index == 5) {
      this.dateNow = 4;
      this.monthNow = 11;
    } else if (index == 6) {
      this.dateNow = 5;
      this.monthNow = 11;
    }
  }
  updatePart(index: number) {
    const newParts = this.parts.map((_) => false);
    newParts[index] = true;
    this.parts = newParts;
  }
  gotToCheckout() {
    this._router.navigateByUrl('/home/checkout');
  }
}
