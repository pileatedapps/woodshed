import { Route } from '@angular/router';

const calendarPathRoute: Route = {
  path: 'calendar',
  title: 'Calendar',
  loadComponent: () => import('./calendar/components/calendar/calendar.component').then(c => c.CalendarComponent),
  runGuardsAndResolvers: 'always'
}

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
    ...calendarPathRoute,
  },
  {
    ...calendarPathRoute,
    path: 'calendar/month/:year/:month/:date',
  },
  {
    path: '**',
    loadComponent: () => import('./navigation/errors/error-404.component').then(c => c.Error404Component)
  }
];
