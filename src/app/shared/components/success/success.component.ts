import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessComponent {
  constructor(public modalController: ModalController) {}
  dismissModal() {
    this.modalController.dismiss();
  }
}
