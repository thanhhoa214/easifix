import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, User } from '../data.model';
import { DataService } from '../data.service';
import { Utils } from '../shared/utils';

@Component({
  selector: 'app-fixer-profile',
  templateUrl: './fixer-profile.component.html',
  styleUrls: ['./fixer-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FixerProfileComponent extends Utils implements OnInit {
  user: User;
  backTo: string;
  collapsedCategories: boolean[];

  constructor(
    private _dataService: DataService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    const { backTo } = this._activatedRoute.snapshot.queryParams;
    this.backTo = backTo;
    const { user } = JSON.parse(localStorage.getItem('data'));
    this.user = this._dataService.getUser(user);
    this.collapsedCategories = this.getArray(this.user.categories.length).map(
      (item) => !!item
    );

    if (!this.user) {
      this._router.navigateByUrl('/home');
    }
  }

  chooseBrand(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  toggleCollapse(categoryId: string) {
    const newCollapsedCategories = [...this.collapsedCategories];
    newCollapsedCategories[categoryId] = !newCollapsedCategories[categoryId];
    this.collapsedCategories = newCollapsedCategories;
  }
  goToBooking(user: string, category: string, service: string) {
    localStorage.setItem('data', JSON.stringify({ user, category, service }));
    this._router.navigate(['home', 'booking']);
  }
}
