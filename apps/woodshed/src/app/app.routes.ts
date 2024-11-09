import { Route } from '@angular/router';
import { Error404Component } from './navigation/errors/error-404.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'samples',
    pathMatch: 'full'
  },
  {
    path: 'samples',
    loadChildren: () => import('./samples/samples.module').then(m => m.SamplesModule),
  },
  {
    path: '**',
    loadComponent: () => import('./navigation/errors/error-404.component').then(c => c.Error404Component)
  }
];
