import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pily8CalendarComponent } from '@woodshed/calendar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, Pily8CalendarComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {}
