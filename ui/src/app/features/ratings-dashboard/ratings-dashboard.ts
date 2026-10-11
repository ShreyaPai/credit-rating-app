import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Issuer } from './services/issuer';
import { IssuerDetails } from '../issuer-details/issuer-details';
import { IssuerTable } from './components/issuer-table/issuer-table';
import { Search } from './components/search/search';
import { SpinnerService } from '../../shared/services/spinner';
import { NotificationService } from '../../shared/services/notification';

@Component({
  selector: 'app-ratings-dashboard',
  imports: [IssuerTable, Search],
  templateUrl: './ratings-dashboard.html',
  styleUrl: './ratings-dashboard.scss',
})
export class RatingsDashboard implements OnInit {
  private _issuerService = inject(Issuer);
  private _spinnerService = inject(SpinnerService);
  private _notificationService = inject(NotificationService);

  public issuers = signal([]);
  public searchTerm = signal('');

  public filtertedIssuers = computed(() => {
    const searchvalue = this.searchTerm().trim();

    if (!searchvalue) {
      return this.issuers();
    }

    return this.issuers().filter((issuer: any) => {
      return (
        issuer.issuerName.toLowerCase().includes(searchvalue.toLowerCase()) ||
        issuer.industry.toLowerCase().includes(searchvalue.toLowerCase())
      );
    });
  });

  ngOnInit(): void {
    this.getIssuers();
  }

  getIssuers() {
    this._spinnerService.showSpinner(true);
    const pageNo = 1;
    const pageSize = 5;
    this._issuerService.getIssuers(pageNo, pageSize).subscribe(
      (response: any) => {
        console.log(response);
        this.issuers.set(response.data);
        this._spinnerService.showSpinner(false);
      },
      (error) => {
        this._notificationService.error(error.message);
        this._spinnerService.showSpinner(false);
      },
    );
  }

  search(event: any) {
    console.log(event);
    this.searchTerm.set(event);
  }
}
