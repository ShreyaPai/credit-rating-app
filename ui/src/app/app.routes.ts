import { Routes } from '@angular/router';
import { RatingsDashboard } from './features/ratings-dashboard/ratings-dashboard';
import { IssuerDetails } from './features/issuer-details/issuer-details';
import { Feedback } from './features/feedback/feedback';

export const routes: Routes = [
    { path: '', component: RatingsDashboard, title: 'Issuer Listing' },
    { path: 'issuer/:id', component: IssuerDetails, title: 'Issuer Details' },
    { path: 'issuer/:id/feedback', component: Feedback, title: 'Feedback' }
];
