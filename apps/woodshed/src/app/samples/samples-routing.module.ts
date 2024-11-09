import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplesComponent } from './_samples/samples.component';

const routes: Routes = [
  {
    path: '',
    component: SamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full'
      },
      {
        path: 'button',
        loadComponent: () => import('./button-sample/button-sample.component').then(c => c.ButtonSampleComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
