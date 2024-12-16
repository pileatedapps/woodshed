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
import { MatOption, MatSelect } from '@angular/material/select';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

export type CalType = 'Day' | 'Week' | 'Month' | 'Agenda';

@Component({
  selector: 'pily8-cal-calendar-toolbar',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, MatToolbar, MatTooltip, MatIconButton, MatSuffix, RouterOutlet, MatSelect, MatOption, MatMenuTrigger, MatMenu, MatMenuItem],
  templateUrl: './pily8-calendar-toolbar.component.html',
  styleUrl: './pily8-calendar-toolbar.component.scss',
})
export class Pily8CalendarToolbarComponent implements OnInit, OnDestroy {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);
  private readonly calendarService: Pily8CalendarService = inject(Pily8CalendarService);
  calType: CalType = 'Month';
  private routeParam$!: Subscription;
  selectedDate: Date = new Date(new Date().setHours(0,0,0,0));

  ngOnInit(): void {
    this.calType = this.route.snapshot.data['calType'];
    this.routeParam$ = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.selectedDate = this.calendarService.setDateFromRoute(paramMap);
      })
  }

  ngOnDestroy(): void {
    this.routeParam$?.unsubscribe();
  }

  adjustDate(newDate: Date, increment: 1 | -1 | 0): Date {
    newDate.setHours(0,0,0,0);
    switch (this.calType) {
      case 'Agenda':
        break;
      case 'Day':
        newDate.setDate(newDate.getDate() + increment);
        break;
      case 'Week':
        newDate.setDate(newDate.getDate() + (7 * increment));
        break;
      case 'Month':
        newDate.setMonth(newDate.getMonth() + increment);
        break;
    }
    return newDate;
  }

  async changeCalendarType(calType: CalType) {
    this.calType = calType;
    await this.navigateToDate(this.selectedDate);
  }

  async navigateToDate(newDate: Date = new Date()) {
    await this.router.navigate([
      '/calendar',
      this.calType,
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      newDate.getDate()
    ])
  }
}
