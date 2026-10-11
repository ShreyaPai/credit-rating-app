import { Component, inject, input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issuer-table',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './issuer-table.html',
  styleUrl: './issuer-table.scss',
})
export class IssuerTable implements OnInit {

  _router = inject(Router)

  issuers = input([]);
  displayedColumns: string[] = ['issuerName', 'industry', 'rating', 'outlook', 'lastUpdatedDate', 'open']

  ngOnInit(): void {
    console.log(this.issuers());
  }

  openDetails(element: any): void {
    console.log(element);
    this._router.navigate(['/issuer', element.id])
  }
}
