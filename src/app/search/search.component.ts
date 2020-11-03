import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, Service, Category } from '../data.model';
import { DataService } from '../data.service';
import { Utils } from '../shared/utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent extends Utils {
  search: FormControl = new FormControl();
  users: User[] = [];
  nearby = ['Sửa lò nướng', 'Sửa máy giặt', 'Sửa Tivi'];
  nearbyUsers: User[] = [];
  categories: Category[] = [];
  brand: string = '';

  subscriptions: Subscription[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _changeDetector: ChangeDetectorRef,
    private _router: Router
  ) {
    super();
  }

  ionViewDidEnter(): void {
    this.nearbyUsers = this._dataService.getUsers();
    this.categories = this._dataService.getCategories();
    this.brand = this._dataService.getBrand();
    this.subscriptions.push(
      this.search.valueChanges.subscribe((value) => {
        if (!value) return;
        const searchCategoryName = this._dataService
          .getCategoryByRequestName(value)
          ?.name?.toLowerCase();
        console.log(searchCategoryName);

        const valueInLower = value?.toLowerCase();
        this.users = this._dataService
          .getUsers()
          .filter((user) =>
            user.categories.some(
              (category) =>
                category.name?.toLowerCase().includes(valueInLower) ||
                category.name?.toLowerCase().includes(searchCategoryName) ||
                category.services.some((service) =>
                  service.name?.toLowerCase().includes(valueInLower)
                )
            )
          );
      })
    );
    this.subscriptions.push(
      this._activatedRoute.queryParams.subscribe((queryParams) => {
        this.search.setValue(queryParams.q);
      })
    );
  }
  ionViewDidLeave() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
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

  // getSearchUsers() {
  //   const services: Service[] = [];
  //   const searchValue = this.search.value?.toLowerCase();
  //   this._dataService.getUsers().forEach((user) => {
  //     user.categories.forEach((category) => {
  //       if (category.name?.toLowerCase().includes(searchValue)) {
  //         services.push(...category.services);
  //         return;
  //       }
  //       category.services.forEach((service) => {
  //         if (service.name?.toLowerCase().includes(searchValue)) {
  //           services.push(service);
  //         }
  //       });
  //     });
  //   });
  //   return services;
  // }

  getRandom() {
    return Math.floor(Math.random() * 9);
  }
  getRecommendedUsers() {
    return this._dataService.getUsers().sort((a, b) => a.distance - b.distance);
  }
  getMinAndMaxPrice(userId: string) {
    const prices = [].concat
      .apply(
        [],
        this._dataService
          .getUser(userId)
          .categories.map((category) => category.services)
      )
      .map((service: Service) => service.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }
  getKm() {
    return Math.round(Math.random() * 5) + 1;
  }
  goToBooking(user: string, category: string, service: string) {
    localStorage.setItem('data', JSON.stringify({ user, category, service }));
    this._router.navigate(['..', 'home', 'booking']);
  }
  goToFixerProfile(user: string) {
    const category =
      this._dataService.getCategoryByRequestName(this.search.value) ||
      this._dataService.getCategoryByName(this.search.value);
    const data = JSON.parse(localStorage.getItem('data'));
    localStorage.setItem(
      'data',
      JSON.stringify({ ...data, category: category.id })
    );

    this._router.navigate(['..', 'fixer-profile'], {
      queryParams: { backTo: '/search', q: this.search.value ?? '' },
    });
  }
  getPredictions() {
    const q = this.search.value;
    if (!q) return this._dataService.getRequests();
    return this._dataService
      .getRequests()
      .filter((item) => item.includes(q) && item !== q);
  }
}
