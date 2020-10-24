import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SuccessComponent } from '../shared/components/success/success.component';
import { FailedComponent } from '../shared/components/failed/failed.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingComponent {
  days = [false, true, false, false, false, false, false];
  parts = [true, false, false];

  commitments = [
    {
      title: ['Bảo hành', 'dịch vụ'],
      icon: 'arrow-undo-circle-outline',
    },
    {
      title: ['Bảo hiểm', 'hỏng, vỡ đồ'],
      icon: 'hand-left-outline',
    },
    {
      title: ['Đảm bảo', 'nhân thân'],
      icon: 'person',
    },
    {
      title: ['Đảm bảo', 'nhanh chóng'],
      icon: 'hourglass-outline',
    },
    {
      title: ['Khả năng', 'nhân viên'],
      icon: 'construct-outline',
    },
  ];
  constructor(public modalController: ModalController) {}

  updateDay(index: number) {
    const newDays = this.days.map((_) => false);
    newDays[index] = true;
    this.days = newDays;
  }
  updatePart(index: number) {
    const newParts = this.parts.map((_) => false);
    newParts[index] = true;
    this.parts = newParts;
  }

  async openSuccessModal() {
    const random = Math.round(Math.random() * 2) % 2;
    console.log(random);

    const modal = await this.modalController.create({
      component: random ? SuccessComponent : FailedComponent,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
}
