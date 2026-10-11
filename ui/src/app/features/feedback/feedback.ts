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
  router = inject(Router)

  issuerId = signal('');
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
      this.issuerService
        .getIssuerById(this.issuerId())
        .subscribe((response: any) => {
          this.feedbackService.issuerDetails = response;
          this.populateForm();
        });
    } else {
      this.populateForm();
    }
  }

  populateForm(): void {
    const data = this.issuerDetails().issuer;
    if (data) {
      this.feedbackForm.patchValue({
        name: data.name,
      });
    }
  }

  submit() {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted!', this.feedbackForm.value);
      this.feedbackService.submitFeedback(this.feedbackForm.value).subscribe((response) => {
        console.log(response);
      })
    } else {
      console.log('Invalid form data.');
    }
  }

  goToIssuerDetails(): void {
    this.router.navigate(['/issuer', this.issuerId()])
  }
}
