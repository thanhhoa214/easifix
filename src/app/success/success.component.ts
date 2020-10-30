import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BottomBarService } from '../layout/bottombar.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessComponent {
  rate = 0;
  parts = [false, false, false, false, false, false];
  constructor(
    private _bottomBarService: BottomBarService,
    private router: Router
  ) {
    _bottomBarService.pushNotification();
  }

  onRateChange(event) {
    console.log(event);
  }
  updatePart(index: number) {
    const newParts = this.parts;
    newParts[index] = true;
    this.parts = newParts;
  }
  goToHome() {
    this._bottomBarService.turnOffProcessingNotification();
    this.router.navigateByUrl('/home');
  }
}
