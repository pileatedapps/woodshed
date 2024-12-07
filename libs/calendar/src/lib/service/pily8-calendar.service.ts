import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Pily8CalendarService {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  constructor() { }
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
}
