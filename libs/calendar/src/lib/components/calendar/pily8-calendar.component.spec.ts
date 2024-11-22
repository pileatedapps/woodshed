import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pily8CalendarComponent } from './pily8-calendar.component';

describe('CalendarComponent', () => {
  let component: Pily8CalendarComponent;
  let fixture: ComponentFixture<Pily8CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pily8CalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Pily8CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
