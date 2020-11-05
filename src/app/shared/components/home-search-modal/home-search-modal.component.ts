import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Category } from 'src/app/data.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home-search-modal',
  templateUrl: './home-search-modal.component.html',
  styleUrls: ['./home-search-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSearchModalComponent {
  @Input() searchQuery: string = '';
  @Input() selectedUserId: string = '1';
  @Input() selectedCategory: string = '2';
  search = new FormControl();
  brandSearch = new FormControl();
  category: Category;

  constructor(
    private dataService: DataService,
    private router: Router,
    private modalController: ModalController
  ) {
    this.category = this.dataService.getCategory(
      this.selectedUserId,
      this.selectedCategory
    );
  }

  getBrandPredictions() {
    const q = this.brandSearch.value;
    if (!q) return this.dataService.getPredictions();
    return this.dataService
      .getPredictions()
      .filter((item) => item.includes(q) && item !== q);
  }

  getPredictions() {
    const q = this.search.value;
    if (!q) return this.dataService.getRequests();
    return this.dataService
      .getRequests()
      .filter((item) => item.includes(q) && item !== q);
  }

  setSearchValue(value: string) {
    this.search.setValue(value);
  }
  setBrandSearchValue(value: string) {
    this.brandSearch.setValue(value);
  }

  goToSearch() {
    this.dataService.writeBrand(this.brandSearch.value);
    const queryParams = this.category.name + ' ' + this.search.value ?? '';
    this.router.navigateByUrl('/search?q=' + queryParams);
    this.modalController.dismiss();
  }
}
