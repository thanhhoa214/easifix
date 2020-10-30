import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Service, User } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  nearbyUsers: User[] = [];
  categories: Category[] = [];
  services: Service[] = [];

  constructor(private dataService: DataService, private router: Router) {
    this.nearbyUsers = this.dataService.getUsers();
    this.categories = this.dataService.getCategories();
    this.services = this.dataService.getServices();
  }

  afterslidesLoad(slides) {
    slides.startAutoplay();
  }

  goToSearch(value: string) {
    this.router.navigate(['..', 'search'], {
      queryParams: { q: value },
    });
  }

  goToBooking(user: string, category: string, service: string) {
    localStorage.setItem('data', JSON.stringify({ user, category, service }));
    console.log(localStorage.getItem('data'));

    this.router.navigate(['home', 'booking']);
  }

  getRandom() {
    return Math.floor(Math.random() * 9);
  }
}
