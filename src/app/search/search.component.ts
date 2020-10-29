import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DATABASE } from '../data';
import { User, Service, Category } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  search: FormControl = new FormControl();
  users: User[] = [];
  nearby = ['Sửa lò nướng', 'Sửa máy giặt', 'Sửa Tivi'];
  nearbyUsers: User[] = [];
  categories: Category[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _changeDetector: ChangeDetectorRef,
    private _router: Router
  ) {}

  ionViewDidEnter(): void {
    this.nearbyUsers = this._dataService.getUsers();
    this.categories = this._dataService.getCategories();
    this.search.valueChanges.subscribe((value) => {
      const valueInLower = value.toLowerCase();
      this.users = DATABASE.users.filter((user) =>
        user.categories.filter(
          (category) =>
            category.name.toLowerCase().includes(valueInLower) ||
            category.services.filter((service) =>
              service.name.toLowerCase().includes(valueInLower)
            )
        )
      );
    });
    const { q } = this._activatedRoute.snapshot.queryParams;
    this.search.setValue(q);
  }

  getSearchHistory(): string[] {
    return this._dataService.getSearchHistory();
  }

  setSearchValue(value: string) {
    this.search.setValue(value);
  }
  removeSearchHistory(value: string) {
    this._dataService.removeSearchHistory(value);
    this._changeDetector.detectChanges();
  }

  getServices(user: User) {
    const services: Service[] = [];
    const searchValue = this.search.value.toLowerCase();
    user.categories.forEach((category) => {
      if (category.name.toLowerCase().includes(searchValue)) {
        services.push(...category.services);
        return;
      }
      category.services.forEach((service) => {
        if (service.name.toLowerCase().includes(searchValue)) {
          services.push(service);
        }
      });
    });
    return services;
  }

  getRandom() {
    return Math.floor(Math.random() * 9);
  }
  getKm() {
    return Math.round(Math.random() * 5) + 1;
  }
  goToBooking(user: string, category: string, service: string) {
    localStorage.setItem('data', JSON.stringify({ user, category, service }));
    this._router.navigateByUrl('/home/booking');
  }
}
