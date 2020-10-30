import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { BottomBarService } from '../layout/bottombar.service';
import { Category, Service, User } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history-processing',
  templateUrl: './history-processing.component.html',
  styleUrls: ['./history-processing.component.scss'],
})
export class HistoryProcessingComponent {
  processNotiNumber$: Observable<number>;

  user: User;
  service: Service;
  category: Category;
  totalPrice: number;

  constructor(
    private _bottomBarService: BottomBarService,
    private _dataService: DataService
  ) {}

  ionViewDidEnter(): void {
    this.processNotiNumber$ = this._bottomBarService.processingNotfication$;
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );
    this.user = this._dataService.getUser(user);
    this.totalPrice = parseInt(localStorage.getItem('totalPrice'));
    this.service = this._dataService.getService(user, category, service);
    this.category = this._dataService.getCategory(user, category);
    console.log(this.user, this.category, this.service);
  }

  getArray(length: number) {
    return Array(length).fill('');
  }
}
