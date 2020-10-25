import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FailedComponent } from '../shared/components/failed/failed.component';
import { SuccessComponent } from '../shared/components/success/success.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  activeButton = 'momo';

  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  async openSuccessModal() {
    const random = Math.round(Math.random() * 2) % 2;
    console.log(random);

    const modal = await this.modalController.create({
      component: random ? SuccessComponent : FailedComponent,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
    });
    await modal.present();
    if (random) {
      this.router.navigateByUrl('/home');
    }
  }

  updateMethod(method: string) {
    this.activeButton = method;
  }
}
