import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Pily8CalendarService {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  setDateFromRoute(paramMap: ParamMap) {
    const pMonth: string | null = paramMap.get('month');
    const pYear: string | null = paramMap.get('year');
    const pDate: string | null = paramMap.get('date');
    const date: Date = new Date(Date.parse(`${pMonth}/${pDate}/${pYear}`));
    if (isNaN(date.getTime())) {
      return new Date(new Date().setHours(0,0,0,0));
    }
    return date;
  }

  adjustDates(date: Date, increment: number): Date {
    const newDate: Date = new Date(date);
    newDate.setDate(newDate.getDate() + increment);
    newDate.setHours(0,0,0,0);
    return newDate;
  }

  adjustHours(date: Date, hour: number) {
    const newDate: Date = new Date(date);
    newDate.setHours(hour,0,0,0);
    return newDate;
  }

  createMonthCalendar(selectedDate: Date): Date[] {
    const cells: Date[] = [];
    const startDate: Date = new Date(selectedDate.getTime());
    startDate.setHours(0, 0, 0, 0);
    const date1: Date = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
    const gridStartDate: Date = this.adjustDates(date1, 0 - date1.getDay());
    for(let i = 0; i < 35; i++) {
      cells.push(this.adjustDates(gridStartDate, i))
    }
    return cells
  }

  createWeekCalendar(selectedDate: Date): Date[] {
    const maxHours = 24;
    const maxDays = 7;
    const headerRowSize = 1;
    const gridSize: number = (maxHours * maxDays) + headerRowSize;
    const cells: Date[] = [];
    const startDate: Date = new Date(selectedDate.getTime());
    startDate.setHours(0, 0, 0, 0);
    const date1: Date = selectedDate;
    const gridStartDate: Date = this.adjustDates(date1, 0 - date1.getDay());
    for(let hour = 0; hour < maxHours; hour++) {
      for(let day = 0; day < maxDays; day++) {
        const newDate =this.adjustHours(this.adjustDates(gridStartDate, day), hour);
        cells.push(newDate);
      }
    }
    return cells
  }
}
