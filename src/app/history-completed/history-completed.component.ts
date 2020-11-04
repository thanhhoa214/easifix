import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { BottomBarService } from '../layout/bottombar.service';
import { Category, Service, User } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history-completed',
  templateUrl: './history-completed.component.html',
  styleUrls: ['./history-completed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryCompletedComponent implements OnInit {
  notiNumber$: Observable<number>;
  processNotiNumber$: Observable<number>;

  user: User;
  service: Service;
  category: Category;
  totalPrice: number;

  constructor(
    private _bottomBarService: BottomBarService,
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
    this.notiNumber$ = this._bottomBarService.notfication$;
    this.processNotiNumber$ = this._bottomBarService.processingNotfication$;
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );
    this.totalPrice = parseInt(localStorage.getItem('totalPrice'));
    this.user = this._dataService.getUser(user);
    this.category = this._dataService.getCategory(user, category);
    this.service = this._dataService.getService(user, category, service);
  }
  ionViewDidEnter(): void {
    this.notiNumber$ = this._bottomBarService.notfication$;
    this.processNotiNumber$ = this._bottomBarService.processingNotfication$;
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );
    this.totalPrice = parseInt(localStorage.getItem('totalPrice'));
    this.user = this._dataService.getUser(user);
    this.category = this._dataService.getCategory(user, category);
    this.service = this._dataService.getService(user, category, service);
  }

  getArray(length: number) {
    return Array(length).fill('');
  }
}
