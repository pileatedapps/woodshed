import { Route } from '@angular/router';
import { PILY8_CALENDAR_ROUTES } from '@pily8/calendar/PILY8_CALENDAR_ROUTES.const';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'samples',
    pathMatch: 'full'
  },
  ...PILY8_CALENDAR_ROUTES,
  {
    path: 'samples',
    loadChildren: () => import('./samples/samples.module').then(m => m.SamplesModule)
  },

  {
    path: '**',
    loadComponent: () => import('./navigation/errors/error-404.component').then(c => c.Error404Component)
  }
];
