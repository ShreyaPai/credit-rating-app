import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  _isLoading = signal(false);

  public showSpinner(show: boolean) {
    this._isLoading.set(show);
  }

  isLoading = this._isLoading.asReadonly();
}
