import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Issuer {
  private _httpClient = inject(HttpClient);
  private URL = 'http://localhost:3000/api'

  getIssuers(pageNo: number, pageSize: number): Observable<any> {
    return this._httpClient.get(`${this.URL}/issuers?pageNo=${pageNo}&pageSize=${pageSize}`);
  }

  getIssuerById(id: string) {
    return this._httpClient.get(`${this.URL}/issuers/${id}`);
  }
}
