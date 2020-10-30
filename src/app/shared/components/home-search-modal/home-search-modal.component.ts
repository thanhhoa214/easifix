import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/data.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home-search-modal',
  templateUrl: './home-search-modal.component.html',
  styleUrls: ['./home-search-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSearchModalComponent {
  @Input() selectedUserId: string = '1';
  @Input() selectedCategory: string = '2';
  search = new FormControl();
  category: Category;

  constructor(private dataService: DataService, private router: Router) {
    this.category = this.dataService.getCategory(
      this.selectedUserId,
      this.selectedCategory
    );
  }

  getPredictions() {
    return this.dataService
      .getPredictions()
      .filter((item) => item.includes(this.search.value));
  }

  setSearchValue(value: string) {
    this.search.setValue(value);
  }

  goToSearch() {
    const value = this.search.value;
    this.router.navigateByUrl('/home/search', {
      queryParams: { q: value },
    });
  }
}
