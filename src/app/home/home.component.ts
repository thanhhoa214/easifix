import { Component, ChangeDetectionStrategy } from '@angular/core';
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

  constructor(private dataService: DataService) {
    this.nearbyUsers = this.dataService.getUsers().slice(0, 6);
    this.categories = this.dataService.getCategories();
    this.services = this.dataService.getServices();
  }

  afterslidesLoad(slides) {
    slides.startAutoplay();
  }
}
