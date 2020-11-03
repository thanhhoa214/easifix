import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Category, User } from '../data.model';
import { DataService } from '../data.service';
import { BrandSelectComponent } from '../shared/components/brand-select/brand-select.component';
import { Utils } from '../shared/utils';

@Component({
  selector: 'app-fixer-profile',
  templateUrl: './fixer-profile.component.html',
  styleUrls: ['./fixer-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FixerProfileComponent extends Utils implements OnInit {
  user: User;
  backTo: string;
  collapsedCategories: boolean[];
  searchQuery: string;
  searchCategory: Category;
  brand: string;
  imgSrc1Hide = true;

  constructor(
    private _dataService: DataService,
    private _router: Router,
    private _modalController: ModalController,
    private _activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    const { backTo, q } = this._activatedRoute.snapshot.queryParams;
    this.backTo = backTo;
    this.searchQuery = q;
    this.brand = this._dataService.getBrand();

    const { user, category } = JSON.parse(localStorage.getItem('data'));
    this.user = this._dataService.getUser(user);
    this.searchCategory = this._dataService.getCategory(user, category);
    this.collapsedCategories = this.getArray(this.user.categories.length).map(
      (item) => !!item
    );

    if (!this.user) {
      this._router.navigateByUrl('/home');
    }
  }

  ionViewDidEnter(): void {
    const { backTo, q } = this._activatedRoute.snapshot.queryParams;
    this.backTo = backTo;
    this.searchQuery = q;
    this.brand = this._dataService.getBrand();

    const { user, category } = JSON.parse(localStorage.getItem('data'));
    this.searchCategory = category;
    this.user = this._dataService.getUser(user);
    this.collapsedCategories = this.getArray(this.user.categories.length).map(
      (item) => !!item
    );

    if (!this.user) {
      this._router.navigateByUrl('/home');
    }
  }

  chooseBrand(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  toggleCollapse(categoryId: string) {
    const newCollapsedCategories = [...this.collapsedCategories];
    newCollapsedCategories[categoryId] = !newCollapsedCategories[categoryId];
    this.collapsedCategories = newCollapsedCategories;
  }
  goToBooking(user: string, category: string, service: string) {
    localStorage.setItem('data', JSON.stringify({ user, category, service }));
    if (this.brand) {
      this._router.navigate(['home', 'booking']);
      return;
    }
    this.showFilters();
  }

  goToFixerFeedback() {
    this._router.navigate(['..', 'fixer-feedback'], {
      queryParams: { backTo: '/fixer-profile' },
    });
  }

  getRandom() {
    return Math.floor(Math.random() * 3) + 3;
  }
  async showFilters() {
    const modal = await this._modalController.create({
      component: BrandSelectComponent,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
    });
    await modal.present();
  }
  toggleCall() {
    this.imgSrc1Hide = !this.imgSrc1Hide;
  }
}
