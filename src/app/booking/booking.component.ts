import { Component, ChangeDetectionStrategy } from '@angular/core';

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
}
