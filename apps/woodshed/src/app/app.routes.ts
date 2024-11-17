import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'samples',
    pathMatch: 'full'
  },
  {
    path: 'samples',
    loadChildren: () => import('./samples/samples.module').then(m => m.SamplesModule)
  },
  {
    path: 'calendar',
    title: 'Calendar',
    loadComponent: () => import('./calendar/components/calendar.component').then(c => c.CalendarComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./navigation/errors/error-404.component').then(c => c.Error404Component)
  }
];
