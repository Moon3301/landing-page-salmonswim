import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartSidebarService {
  private _open$ = new BehaviorSubject<boolean>(false);

  /** Observable that emits the current open/closed state */
  readonly open$: Observable<boolean> = this._open$.asObservable();

  

  /** Toggle sidebar visibility */
  toggle(): void {
    this._open$.next(!this._open$.value);
  }

  /** Close the sidebar */
  close(): void {
    this._open$.next(false);
  }
}
