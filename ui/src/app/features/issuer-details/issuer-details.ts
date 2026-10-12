import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Issuer } from '../ratings-dashboard/services/issuer';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../feedback/services/feedback';
import { SpinnerService } from '../../shared/services/spinner';
import { NotificationService } from '../../shared/services/notification';
import { IssuerDetailsDto } from '../interfaces/issuer-details.interface';

@Component({
  selector: 'app-issuer-details',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './issuer-details.html',
  styleUrl: './issuer-details.scss',
})
export class IssuerDetails implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);

  private issuerService = inject(Issuer);
  private feedbackService = inject(FeedbackService);
  private _spinnerService = inject(SpinnerService);
  private _notificationService = inject(NotificationService);

  public issuerDetails = signal<IssuerDetailsDto>({issuer: {} as any, drivers: [], aiInsight: {} as any });
  public issuerId = signal('');

  constructor() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      this.issuerId.set(param.get('id'));
    });
  }

  ngOnInit(): void {
    console.log(this.issuerId());
    this.getIssuerDetails();
  }

  public getIssuerDetails(): void {
    this._spinnerService.showSpinner(true);
    this.issuerService.getIssuerById(this.issuerId()).subscribe(
      (response: IssuerDetailsDto) => {
        console.log(response);
        this.issuerDetails.set(response);
        this._spinnerService.showSpinner(false);
      },
      (err) => {
        const { error } = err;
        this._notificationService.error(error.message);
        this._spinnerService.showSpinner(false);
        this.goToDashboard();
      },
    );
  }

  public goToDashboard(): void {
    this._router.navigate(['']);
  }

  public goToFeedbackPage(): void {
    this.feedbackService.issuerDetails = this.issuerDetails();
    this._router.navigate(['issuer/' + this.issuerId() + '/feedback']);
  }
}
