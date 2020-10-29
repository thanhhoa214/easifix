import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessComponent {
  rate = 0;
  parts = [false, false, false, false, false, false];

  onRateChange(event) {
    console.log(event);
  }
  updatePart(index: number) {
    const newParts = this.parts;
    newParts[index] = true;
    this.parts = newParts;
  }
}
