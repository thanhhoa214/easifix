import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-update-success',
  templateUrl: './profile-update-success.component.html',
  styleUrls: ['./profile-update-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileUpdateSuccessComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit(): void {}
  dismissModal() {
    this.modalController.dismiss();
  }
}
