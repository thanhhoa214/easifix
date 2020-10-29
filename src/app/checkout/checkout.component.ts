import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Category, Service } from '../data.model';
import { DataService } from '../data.service';
import { FailedComponent } from '../shared/components/failed/failed.component';
import { SuccessComponent } from '../shared/components/success/success.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  activeButton = 'momo';
  service: Service;
  category: Category;
  checkFee = 50000;

  constructor(
    private _modalController: ModalController,
    private _dataService: DataService,
    private _router: Router
  ) {}

  ngOnInit() {
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );

    this.service = this._dataService.getService(user, category, service);
    this.category = this._dataService.getCategory(user, category);
  }

  async openSuccessModal() {
    const random = Math.round(Math.random() * 2) % 2;
    console.log(random);

    const modal = await this._modalController.create({
      component: random ? SuccessComponent : FailedComponent,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
    });
    await modal.present();
    if (random) {
      this._router.navigateByUrl('/home');
    }
  }

  updateMethod(method: string) {
    this.activeButton = method;
  }

  getTotal(fee: number): number {
    return this.checkFee + fee;
  }
}
