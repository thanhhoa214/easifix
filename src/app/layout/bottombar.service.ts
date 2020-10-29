import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BottomBarService {
  private _isVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    true
  );
  public isVisible$: Observable<
    boolean
  > = this._isVisibleSubject.asObservable();

  hide() {
    this._isVisibleSubject.next(false);
  }
  show() {
    this._isVisibleSubject.next(true);
  }
}
