import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Category, User } from '../data.model';
import { DataService } from '../data.service';
import { BrandSelectComponent } from '../shared/components/brand-select/brand-select.component';
import { HomeSearchModalComponent } from '../shared/components/home-search-modal/home-search-modal.component';
import { Utils } from '../shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends Utils {
  nearbyUsers: User[] = [];
  categories: Category[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private _modalController: ModalController
  ) {
    super();
    this.nearbyUsers = this.dataService.getUsers();
    this.categories = this.dataService.getCategories();
  }

  afterslidesLoad(slides) {
    slides.startAutoplay();
  }

  goToSearch(value: string) {
    this.router.navigate(['..', 'search'], {
      queryParams: { q: value },
    });
  }

  goToBooking(user: string, category: string, service: string) {
    localStorage.setItem('data', JSON.stringify({ user, category, service }));
    this.router.navigate(['home', 'booking']);
  }

  getRandom() {
    return Math.floor(Math.random() * 9);
  }

  async showFilters(selectedCategory: string) {
    const modal = await this._modalController.create({
      component: HomeSearchModalComponent,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
      componentProps: { selectedCategory },
    });
    await modal.present();
  }
  async showBrandPicker(user: string, category: string, service: string) {
    localStorage.setItem('data', JSON.stringify({ user, category, service }));
    const modal = await this._modalController.create({
      component: BrandSelectComponent,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
    });
    await modal.present();
  }
}
