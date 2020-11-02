import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-brand-select',
  templateUrl: './brand-select.component.html',
  styleUrls: ['./brand-select.component.scss'],
})
export class BrandSelectComponent {
  search = new FormControl();

  constructor(
    private dataService: DataService,
    private router: Router,
    private modalController: ModalController
  ) {}

  getPredictions() {
    return this.dataService
      .getPredictions()
      .filter(
        (item) => item.includes(this.search.value) && item !== this.search.value
      );
  }

  setSearchValue(value: string) {
    this.search.setValue(value);
  }

  goToSearch() {
    this.dataService.writeBrand(this.search.value);
    this.router.navigateByUrl('/home/booking');
    this.modalController.dismiss();
  }
}
