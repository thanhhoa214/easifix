import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FailedComponent {
  constructor(public modalController: ModalController) {}
  dismissModal() {
    this.modalController.dismiss();
  }
}
