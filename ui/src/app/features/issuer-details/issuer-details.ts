import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Issuer } from '../ratings-dashboard/services/issuer';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../feedback/services/feedback';

@Component({
  selector: 'app-issuer-details',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './issuer-details.html',
  styleUrl: './issuer-details.scss',
})
export class IssuerDetails implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  _router = inject(Router);
  issuerId = signal('')
  issuerService = inject(Issuer)
  feedbackService = inject(FeedbackService)
  issuerDetails = signal({}) as any

  constructor() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      this.issuerId.set(param.get('id'))
    })
  }

  ngOnInit(): void {
    console.log(this.issuerId());
    this.getIssuerDetails()
  }

  getIssuerDetails() {
    this.issuerService.getIssuerById(this.issuerId()).subscribe((response: any) => {
      console.log(response);
      this.issuerDetails.set(response);
    })
  }

  goToDashboard(): void {
    this._router.navigate([''])
  }

  goToFeedbackPage(): void {
    this.feedbackService.issuerDetails = this.issuerDetails()
    this._router.navigate(['issuer/' + this.issuerId() + '/feedback'])
  }
}
