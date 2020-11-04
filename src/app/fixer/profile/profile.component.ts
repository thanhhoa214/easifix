import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/data.model';
import { DataService } from 'src/app/data.service';
import { Utils } from 'src/app/shared/utils';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent extends Utils implements OnInit {
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
    const { user = '1' } = JSON.parse(localStorage.getItem('data') ?? '{}');
    this.user = this._dataService.getUser(user);
    this.collapsedCategories = this.getArray(this.user.categories.length).map(
      (item) => !!item
    );

    if (!this.user) {
      this._router.navigateByUrl('/home');
    }
  }

  ionViewDidEnter(): void {
    const { backTo } = this._activatedRoute.snapshot.queryParams;
    this.backTo = backTo;

    const { user = '1' } = JSON.parse(localStorage.getItem('data') ?? '{}');
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

  goToFixerFeedback() {
    this._router.navigateByUrl('fixer-feedback?backTo=/fixer/profile');
  }

  getRandom() {
    return Math.floor(Math.random() * 3) + 3;
  }
}
