import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { BottomBarService } from 'src/app/layout/bottombar.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomBarComponent implements OnInit {
  isBottomBarVisible$: Observable<boolean>;
  notiNumber$: Observable<number>;
  processNotiNumber$: Observable<number>;

  constructor(private _bottomBarService: BottomBarService) {}

  ngOnInit(): void {
    this.isBottomBarVisible$ = this._bottomBarService.isVisible$;
    this.notiNumber$ = this._bottomBarService.notfication$;
    this.processNotiNumber$ = this._bottomBarService.processingNotfication$;
  }
}
