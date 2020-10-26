import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileUpdateSuccessComponent } from '../shared/profile-update-success/profile-update-success.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  async openSuccessModal() {
    const modal = await this.modalController.create({
      component: ProfileUpdateSuccessComponent,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
    });
    await modal.present();
  }
}
