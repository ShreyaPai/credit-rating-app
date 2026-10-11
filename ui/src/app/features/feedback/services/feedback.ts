import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private _issuerDetails = signal(null);
  private URL= 'http://localhost:3000/api';

  _httpClient = inject(HttpClient)

  public set issuerDetails(details: any) {
    this._issuerDetails.set(details);
  }

  public get issuerDetails() {
    return this._issuerDetails();
  }

  public submitFeedback(data: any) {
    return this._httpClient.post(`${this.URL}/feedback`, data);
  }
}
