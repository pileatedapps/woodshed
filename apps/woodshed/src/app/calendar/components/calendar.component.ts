import { Component, inject, Input, model, ModelSignal, OnInit, signal } from '@angular/core';
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
import { DatePickerComponent, DatePickerDialogDate } from './date-picker/date-picker.component';

@Component({
  selector: 'app-calendar',
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
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  cells: number[] = [...Array(35)];
  dates: Date[] = [];
  currentDate: Date = new Date();
  date: number = new Date().getDate();
  readonly selectedDateModel: ModelSignal<Date> = model(new Date());
  readonly dialog: MatDialog = inject(MatDialog);

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentDate.setHours(0,0,0,0);
    this.selectedDateModel.set(this.currentDate);
    this.createCalendar();
    this.selectedDateModel.subscribe((selectedDate: Date) => {
      this.createCalendar();
    })
  }

  adjustMonth(date: Date, increment: number): Date {
    const newDate = new Date(date);
    newDate.setHours(0,0,0,0);
    newDate.setMonth(newDate.getMonth() + increment)
    return newDate;
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

  openDialog(): void {
    const dialogRef: MatDialogRef<DatePickerComponent> = this.dialog.open(DatePickerComponent, {
      data: { selectedDate: this.selectedDateModel() },
    });

    dialogRef.afterClosed().subscribe((result: Date) => {
      if (result !== undefined) {
        this.selectedDateModel.set(result);
      }
    });
  }

  incrementMonth(increment: number) {
    const newDate: Date = new Date()
    newDate.setHours(0,0,0,0);
    newDate.setMonth(this.selectedDateModel().getMonth() + increment);
    this.selectedDateModel.set(newDate);
  }

  protected readonly Date = Date;
}
