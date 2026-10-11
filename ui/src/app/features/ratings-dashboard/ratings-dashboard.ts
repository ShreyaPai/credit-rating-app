import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Issuer } from './services/issuer';
import { IssuerDetails } from '../issuer-details/issuer-details';
import { IssuerTable } from './components/issuer-table/issuer-table';
import { Search } from './components/search/search';

@Component({
  selector: 'app-ratings-dashboard',
  imports: [IssuerTable, Search],
  templateUrl: './ratings-dashboard.html',
  styleUrl: './ratings-dashboard.scss',
})
export class RatingsDashboard implements OnInit {
  private _issuerService = inject(Issuer);
  public issuers = signal([])
  public searchTerm = signal('')

  filtertedIssuers = computed(() => {
    const searchvalue = this.searchTerm().trim();

    if (!searchvalue) {
      return this.issuers()
    }

    return this.issuers().filter((issuer: any) => {
      return (issuer.issuerName.toLowerCase().includes(searchvalue.toLowerCase()) || issuer.industry.toLowerCase().includes(searchvalue.toLowerCase()))
    })
  })

  ngOnInit(): void {
    this.getIssuers();
  }

  getIssuers() {
    const pageNo = 1;
    const pageSize = 5;
    this._issuerService
      .getIssuers(pageNo, pageSize)
      .subscribe((response: any) => {
        console.log(response);
        this.issuers.set(response.data)
      });
  }

  search(event: any) {
    console.log(event);
    this.searchTerm.set(event)
  }
}
