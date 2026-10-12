import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FeedbackService } from './services/feedback';
import { Issuer } from '../ratings-dashboard/services/issuer';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../../shared/services/spinner';
import { NotificationService } from '../../shared/services/notification';
import { IssuerDetailsDto } from '../interfaces/issuer-details.interface';
import {
  FeedbackRequest,
  FeedbackResponse,
} from '../interfaces/feedback.interface';

@Component({
  selector: 'app-feedback',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss',
})
export class Feedback implements OnInit {
  feedbackService = inject(FeedbackService);
  issuerService = inject(Issuer);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  _spinnerService = inject(SpinnerService);
  _notificationService = inject(NotificationService);

  issuerId = signal('');
  isFormSubmitted = signal(false);
  feedbackForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    rating: new FormControl(0, [
      Validators.required,
      Validators.max(5),
      Validators.min(1),
    ]),
    comments: new FormControl('', [Validators.maxLength(500)]),
  });

  issuerDetails = computed(() => this.feedbackService.issuerDetails);

  constructor() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      this.issuerId.set(param.get('id'));
    });
  }

  ngOnInit(): void {
    if (!this.issuerDetails()) {
      this._spinnerService.showSpinner(true);
      this.issuerService.getIssuerById(this.issuerId()).subscribe(
        (response: IssuerDetailsDto) => {
          this.feedbackService.issuerDetails = response;
          this.populateForm();
          this._spinnerService.showSpinner(false);
        },
        (err) => {
          const { error } = err;
          this._notificationService.error(error.message);
          this._spinnerService.showSpinner(false);
        },
      );
    } else {
      this.populateForm();
    }
  }

  public populateForm(): void {
    const data = this.issuerDetails().issuer;
    if (data) {
      this.feedbackForm.patchValue({
        name: data.name,
      });
    }
  }

  public submit(): void {
    if (this.feedbackForm.valid) {
      this._spinnerService.showSpinner(true);
      console.log('Form Submitted!', this.feedbackForm.value);
      const request = {
        ...this.feedbackForm.value,
        issuerId: this.issuerId(),
      };
      this.feedbackService.submitFeedback(request).subscribe(
        (response: FeedbackResponse) => {
          this._spinnerService.showSpinner(false);
          console.log(response);
          this.isFormSubmitted.set(true);
          this._notificationService.success(response.message);
        },
        (err) => {
          const { error } = err;
          this._notificationService.error(error.message);
          this._spinnerService.showSpinner(false);
        },
      );
    } else {
      console.log('Invalid form data.');
      this._notificationService.error(
        'Form is invalid, please correct fields marked in red',
      );
    }
  }

  public goToIssuerDetails(): void {
    this.router.navigate(['/issuer', this.issuerId()]);
  }
}
