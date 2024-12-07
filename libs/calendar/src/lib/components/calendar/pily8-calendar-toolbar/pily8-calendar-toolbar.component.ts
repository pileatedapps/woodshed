import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSuffix } from '@angular/material/form-field';
import { ActivatedRoute, ParamMap, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pily8CalendarService } from '../../../service/pily8-calendar.service';

@Component({
  selector: 'pily8-cal-calendar-toolbar',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, MatToolbar, MatTooltip, MatIconButton, MatSuffix, RouterOutlet],
  templateUrl: './pily8-calendar-toolbar.component.html',
  styleUrl: './pily8-calendar-toolbar.component.scss',
})
export class Pily8CalendarToolbarComponent implements OnInit, OnDestroy {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);
  private readonly calendarService: Pily8CalendarService = inject(Pily8CalendarService);
  private routeParam$!: Subscription;
  selectedDate: Date = new Date(new Date().setHours(0,0,0,0));

  ngOnInit(): void {
    this.routeParam$ = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.selectedDate = this.calendarService.setDateFromRoute(paramMap)
      })
  }

  ngOnDestroy(): void {
    this.routeParam$?.unsubscribe();
  }

  adjustMonth(date: Date, increment: number): Date {
    const newDate = new Date(date);
    newDate.setHours(0,0,0,0);
    newDate.setMonth(newDate.getMonth() + increment);
    newDate.setDate(1);
    return newDate;
  }

  adjustYear(date: Date, increment: number): Date {
    const newDate = new Date(date);
    newDate.setHours(0,0,0,0);
    newDate.setFullYear(newDate.getFullYear() + increment);
    newDate.setDate(1);
    return newDate;
  }

  async navigateToDate(newDate: Date = new Date()) {
    await this.router.navigate([
      '/calendar',
      'month',
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      newDate.getDate()
    ])
  }
}
