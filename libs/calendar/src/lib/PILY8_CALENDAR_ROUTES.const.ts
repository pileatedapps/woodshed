import { Routes } from '@angular/router';

const currentDate: Date = new Date();

export const PILY8_CALENDAR_ROUTES: Routes = [
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
        loadComponent: () =>
          import('./components/calendar/pily8-calendar-toolbar/pily8-calendar-toolbar.component')
            .then(c => c.Pily8CalendarToolbarComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./components/calendar/pily8-calendar-month/pily8-calendar-month.component').then(c => c.Pily8CalendarMonthComponent)
          }
        ]
      },
      {
        path: 'week/:year/:month/:date',
        loadComponent: () =>
          import('./components/calendar/pily8-calendar-toolbar/pily8-calendar-toolbar.component')
            .then(c => c.Pily8CalendarToolbarComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./components/calendar/pily8-calendar-week/pily8-calendar-week.component')
                .then(c => c.Pily8CaledarWeekComponent)
          }
        ]
      }
    ]
  },
]
