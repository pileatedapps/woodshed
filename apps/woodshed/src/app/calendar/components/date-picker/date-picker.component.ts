import { Component, inject, model, ModelSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef, MatDialogTitle
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

export interface DatePickerDialogDate {
  selectedDate: Date
}

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, MatDialogContent,
    MatButtonModule,
    MatFormField, MatLabel, MatInputModule,
    MatIcon,
    FormsModule, MatDialogActions, MatDialogClose, MatDialogTitle,
    MatDatepickerToggle, MatDatepickerInput, MatDatepicker],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  readonly dialogRef: MatDialogRef<DatePickerComponent> = inject(MatDialogRef<DatePickerComponent>);
  readonly data: DatePickerDialogDate = inject<DatePickerDialogDate>(MAT_DIALOG_DATA);
  readonly selectedDateSignal: ModelSignal<Date> = model(this.data.selectedDate);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
