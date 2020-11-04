import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Category, Service, User } from '../data.model';
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
  user: User;
  service: Service;
  category: Category;
  checkFee = 30000;

  constructor(
    private _modalController: ModalController,
    private _dataService: DataService,
    private _router: Router
  ) {}

  ngOnInit() {
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );
    this.user = this._dataService.getUser(user);
    this.service = this._dataService.getService(user, category, service);
    this.category = this._dataService.getCategory(user, category);
    if (!this.user || !this.category || !this.service) {
      this._router.navigateByUrl('/home');
    }
  }

  ionViewDidEnter() {
    const { user, category, service } = JSON.parse(
      localStorage.getItem('data')
    );
    this.user = this._dataService.getUser(user);
    this.service = this._dataService.getService(user, category, service);
    this.category = this._dataService.getCategory(user, category);
    if (!this.user || !this.category || !this.service) {
      this._router.navigateByUrl('/home');
    }
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
  gotToPayment(total: number) {
    const des = this.activeButton == 'momo' ? 'momo' : 'success';
    this._router.navigateByUrl('/' + des);
    localStorage.setItem('totalPrice', total + '');
  }
}
