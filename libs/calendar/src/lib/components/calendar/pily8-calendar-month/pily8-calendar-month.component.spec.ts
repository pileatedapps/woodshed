import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pily8CalendarMonthComponent } from './pily8-calendar-month.component';

describe('CalendarComponent', () => {
  let component: Pily8CalendarMonthComponent;
  let fixture: ComponentFixture<Pily8CalendarMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pily8CalendarMonthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Pily8CalendarMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
