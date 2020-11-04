import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private router: Router) {}
  login(phone: string) {
    if (phone == '9999999999') {
      localStorage.setItem('role', 'fixer');
      this.router.navigateByUrl('/fixer');
    } else {
      localStorage.setItem('role', 'user');
      this.router.navigateByUrl('/home');
    }
  }
}
