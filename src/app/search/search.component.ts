import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  search: FormControl = new FormControl();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _changeDetector: ChangeDetectorRef
  ) {}

  ionViewDidEnter(): void {
    this.search.valueChanges.subscribe((value) => {
      // TODO: Filter values
    });
    const { q } = this._activatedRoute.snapshot.queryParams;
    this.search.setValue(q);
  }

  getSearchHistory(): string[] {
    return this._dataService.getSearchHistory();
  }

  setSearchValue(value: string) {
    this.search.setValue(value);
  }
  removeSearchHistory(value: string) {
    this._dataService.removeSearchHistory(value);
    this._changeDetector.detectChanges();
  }
}
