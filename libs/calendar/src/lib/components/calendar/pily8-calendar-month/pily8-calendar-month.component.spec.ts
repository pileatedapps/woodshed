import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pily8CalendarMonthComponent } from './pily8-calendar-month.component';
import { provideRouter } from '@angular/router';

describe('CalendarComponent', () => {
  let component: Pily8CalendarMonthComponent;
  let fixture: ComponentFixture<Pily8CalendarMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pily8CalendarMonthComponent],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Pily8CalendarMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
