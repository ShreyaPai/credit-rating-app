import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NotificationService } from '../services/notification';

export const invalidRouteGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const _notificationService = inject(NotificationService);

  _notificationService.error('Page not found. Redirected to main screen.')
  return _router.createUrlTree(['/']);
};
