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
    this.nearbyUsers = this.dataService.getUsers().slice(0, 6);
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
}
