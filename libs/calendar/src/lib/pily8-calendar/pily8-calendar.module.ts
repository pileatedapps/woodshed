import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Pily8CalendarToolbarComponent
} from '../components/calendar/pily8-calendar-toolbar/pily8-calendar-toolbar.component';
import {
  Pily8CalendarMonthComponent
} from '../components/calendar/pily8-calendar-month/pily8-calendar-month.component';
import { Pily8CaledarWeekComponent } from '../components/calendar/pily8-calendar-week/pily8-calendar-week.component';


@NgModule({
  imports: [
    CommonModule,
    Pily8CalendarToolbarComponent,
    Pily8CalendarMonthComponent,
    Pily8CaledarWeekComponent,
  ],
  exports: [
    Pily8CalendarToolbarComponent,
    Pily8CalendarMonthComponent,
    Pily8CaledarWeekComponent,
  ]
})
export class Pily8CalendarModule { }
