import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Service, User } from '../data.model';
import { DataService } from '../data.service';
import { BottomBarService } from '../layout/bottombar.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnInit {
  notiNumber$: Observable<number>;
  user: User;
  service: Service;
  category: Category;
  totalPrice: number;

  constructor(
    private _bottomBarService: BottomBarService,
    private _dataService: DataService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.notiNumber$ = this._bottomBarService.notfication$;
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );
    this.user = this._dataService.getUser(user);
    this.totalPrice = parseInt(localStorage.getItem('totalPrice'));
    this.service = this._dataService.getService(user, category, service);
    this.category = this._dataService.getCategory(user, category);
    if (!this.user || !this.category || !this.service) {
      this._router.navigateByUrl('/home');
    }
  }
}
