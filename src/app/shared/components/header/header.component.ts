import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() title = 'My Title';
  @Input() backTo = 'home';

  constructor(private _router: Router) {}

  back() {
    console.log(this.backTo);

    this._router.navigateByUrl(this.backTo);
  }
}
