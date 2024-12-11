import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pily8CalendarService } from '../../../service/pily8-calendar.service';
import { Subscription } from 'rxjs';
import { MatIconButton, MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'pily8-cal-pily8-caledar-week',
  standalone: true,
  imports: [CommonModule, MatIconButton, MatMiniFabButton],
  templateUrl: './pily8-calendar-week.component.html',
  styleUrl: './pily8-calendar-week.component.scss',
})
export class Pily8CaledarWeekComponent implements OnInit, OnDestroy {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly calendarService: Pily8CalendarService = inject(Pily8CalendarService);
  protected readonly currentDate = new Date();
  protected selectedDate: Date = new Date();
  private routeParam$!: Subscription;
  protected maxDays = 7;

  protected headerCells: Date[] = [];
  protected cells: Date[] = [];
  protected readonly hours: number[] = [...Array(24).keys()];

  ngOnInit(): void {
    this.cells = this.calendarService.createWeekCalendar(this.selectedDate);
    this.headerCells = this.cells.slice(0, 7);
    this.routeParam$ = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.selectedDate = this.calendarService.setDateFromRoute(paramMap);
        this.cells = this.calendarService.createWeekCalendar(this.selectedDate);
        this.headerCells = this.cells.slice(0, 7);
      })
  }

  ngOnDestroy(): void {
    this.routeParam$?.unsubscribe();
  }
}
