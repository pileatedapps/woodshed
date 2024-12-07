import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pily8CalendarToolbarComponent } from './pily8-calendar-toolbar.component';

describe('Pily8CalendarToolbarComponent', () => {
  let component: Pily8CalendarToolbarComponent;
  let fixture: ComponentFixture<Pily8CalendarToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pily8CalendarToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Pily8CalendarToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
