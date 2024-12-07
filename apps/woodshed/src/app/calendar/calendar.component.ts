import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pily8CalendarToolbarComponent } from '@pily8/calendar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    Pily8CalendarToolbarComponent,
    RouterOutlet
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {}
