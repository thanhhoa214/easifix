import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Category, Service, User } from '../data.model';
import { DataService } from '../data.service';
import { BottomBarService } from '../layout/bottombar.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingComponent implements OnInit {
  days = [true, false, false, false, false, false, false];
  parts = [true, false, false];
  user: User;
  service: Service;
  category: Category;
  dateNow = 13;
  monthNow = 13;
  brand = '';
  photo: SafeResourceUrl;

  time = ['7:30 đến 9:00', '14:00 đến 15:30', '18:30 đến 20:00'];
  timeHour = '';

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
  constructor(
    private _dataService: DataService,
    private _router: Router,
    private _bottomBarService: BottomBarService
  ) {}
  ngOnInit() {
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );
    this.brand = this._dataService.getBrand();
    this.user = this._dataService.getUser(user);
    this.service = this._dataService.getService(user, category, service);
    this.category = this._dataService.getCategory(user, category);
    this.photo = this._dataService.imageDataUrl;
    this.timeHour = this.time[0];
    this._bottomBarService.pushProcessingNotification();
  }
  ionViewDidEnter() {
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );
    this.brand = this._dataService.getBrand();
    this.user = this._dataService.getUser(user);
    this.service = this._dataService.getService(user, category, service);
    this.category = this._dataService.getCategory(user, category);
    this.timeHour = this.time[0];
    this._bottomBarService.pushProcessingNotification();
  }

  updateDay(index: number) {
    const newDays = this.days.map((_) => false);
    newDays[index] = true;
    this.days = newDays;
    this.dateNow = 13 + index;
    this.monthNow = 13;
  }
  updatePart(index: number) {
    const newParts = this.parts.map((_) => false);
    this.timeHour = this.time[index];
    newParts[index] = true;
    this.parts = newParts;
  }
  gotToCheckout() {
    this._router.navigateByUrl('/home/checkout');
  }
  goToFixerProfile(user: string) {
    localStorage.setItem('data', JSON.stringify({ user }));
    this._router.navigate(['..', 'fixer-profile'], {
      queryParams: { backTo: '/home/booking' },
    });
  }
}
