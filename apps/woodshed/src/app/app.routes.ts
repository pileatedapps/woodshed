import { Route } from '@angular/router';

const currentDate: Date = new Date();
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
    children: [
      {
        path: '',
        redirectTo: `month/${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}`,
        pathMatch: 'full'
      },
      {
        path: 'month/:year/:month/:date',
        loadComponent: () => import('./calendar/calendar.component')
          .then(c => c.CalendarComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('@pily8/calendar').then(c => c.Pily8CalendarMonthComponent)
          }
        ]
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./navigation/errors/error-404.component').then(c => c.Error404Component)
  }
];
