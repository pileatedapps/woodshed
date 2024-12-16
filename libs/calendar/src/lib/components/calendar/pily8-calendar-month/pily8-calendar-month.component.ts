import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pily8CalendarService } from '../../../service/pily8-calendar.service';

@Component({
    selector: 'pily8-cal-calendar',
    imports: [CommonModule],
    providers: [
        provideNativeDateAdapter()
    ],
    templateUrl: './pily8-calendar-month.component.html',
    styleUrl: './pily8-calendar-month.component.scss'
})
export class Pily8CalendarMonthComponent implements OnInit, OnDestroy {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly calendarService: Pily8CalendarService = inject(Pily8CalendarService);
  readonly currentDate = new Date(new Date().setHours(0,0,0,0));
  selectedDate: Date = this.currentDate;
  routeParam$!: Subscription;

  cells: Date[] = [];

  ngOnInit(): void {
   this.cells = this.calendarService.createMonthCalendar(this.selectedDate);
   this.routeParam$ = this.route.paramMap
     .subscribe((paramMap: ParamMap) => {
       this.selectedDate = this.calendarService.setDateFromRoute(paramMap);
       this.cells = this.calendarService.createMonthCalendar(this.selectedDate);
     })
  }

  ngOnDestroy(): void {
    this.routeParam$?.unsubscribe();
  }
}
