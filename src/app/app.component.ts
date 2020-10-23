import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Home',
        link: './home',
        icon: 'home',
      },
      {
        label: 'Bet',
        link: './bet',
        icon: 'gavel',
      },
      {
        label: 'Buy',
        link: './buy',
        icon: 'local_mall',
      },
      {
        label: 'Menu',
        link: './menu',
        icon: 'menu',
      },
    ];
  }
}
