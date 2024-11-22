import { Component, inject, Input, model, ModelSignal, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pily8-cal-calendar',
  standalone: true,
  imports: [CommonModule,
    MatCard, MatCardHeader, MatCardTitle, MatCardContent,
    MatIcon,
    MatList, MatListItem, MatToolbar, MatButton, MatIconButton,
    MatTooltip, MatDatepickerInput, MatDatepicker, MatDialogContent,
    MatFormField,
    MatLabel,
    MatInputModule,
    ReactiveFormsModule, MatDatepickerToggle, MatDialogActions, MatDialogClose, FormsModule],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './pily8-calendar.component.html',
  styleUrl: './pily8-calendar.component.scss',
})
export class Pily8CalendarComponent implements OnInit, OnDestroy {
  cells: number[] = [...Array(35)];
  dates: Date[] = [];
  currentDate: Date = new Date();
  date: number = new Date().getDate();
  readonly selectedDateModel: ModelSignal<Date> = model(new Date());
  readonly dialog: MatDialog = inject(MatDialog);
  readonly route: ActivatedRoute = inject(ActivatedRoute);
  readonly router: Router = inject(Router);
  private paramMap$!: Subscription;

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentDate.setHours(0,0,0,0);
    this.setDateFromRoute(this.route.snapshot.paramMap);
    this.createCalendar();
    this.paramMap$ = this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.createCalendar();
    })
  }

  ngOnDestroy(): void {
    this.paramMap$?.unsubscribe();
  }

  adjustMonth(date: Date, increment: number): Date {
    const newDate = new Date(date);
    newDate.setHours(0,0,0,0);
    newDate.setMonth(newDate.getMonth() + increment)
    return newDate;
  }

  private setDateFromRoute(paramMap: ParamMap) {
    const pMonth: string | null = paramMap.get('month');
    const pYear: string | null = paramMap.get('year');
    const pDate: string | null = paramMap.get('date');
    const date: Date = new Date(Number(pYear), Number(pMonth) - 1 , Number(pDate), 0, 0, 0, 0);
    if (isNaN(date.getTime())) {
      this.selectedDateModel.set(this.currentDate);
      return;
    }

    this.selectedDateModel.set(date);
  }

  private adjustDates(date: Date, increment: number): Date {
    const newDate = new Date(date);
    newDate.setHours(0,0,0,0);
    newDate.setDate(newDate.getDate() + increment)
    return newDate;
  }

  private createCalendar() {
    this.dates = [];
    const startDate: Date = this.selectedDateModel();
    startDate.setHours(0, 0, 0, 0);
    const date1: Date = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
    const gridStartDate = this.adjustDates(date1, 0 - date1.getDay());
    this.cells.forEach((value: number, index: number) => {
      this.dates.push(this.adjustDates(gridStartDate, index));
    })
  }

  async incrementMonth(increment: number) {
    const newDate: Date = new Date()
    newDate.setHours(0,0,0,0);
    newDate.setMonth(this.selectedDateModel().getMonth() + increment);
    this.selectedDateModel.set(newDate);
    await this.router.navigate(['/calendar/month', newDate.getFullYear(), newDate.getMonth() + 1, 1])
  }
}
