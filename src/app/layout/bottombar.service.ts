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

  private _notfication: BehaviorSubject<number> = new BehaviorSubject(0);
  public notfication$: Observable<number> = this._notfication.asObservable();

  private _processingNotfication: BehaviorSubject<number> = new BehaviorSubject(
    0
  );
  public processingNotfication$: Observable<
    number
  > = this._processingNotfication.asObservable();

  hide() {
    this._isVisibleSubject.next(false);
  }
  show() {
    this._isVisibleSubject.next(true);
  }

  pushNotification() {
    this._notfication.next(1);
  }
  turnOffNotification() {
    this._notfication.next(0);
  }
  pushProcessingNotification() {
    this._processingNotfication.next(1);
  }
  turnOffProcessingNotification() {
    this._processingNotfication.next(0);
  }
}
