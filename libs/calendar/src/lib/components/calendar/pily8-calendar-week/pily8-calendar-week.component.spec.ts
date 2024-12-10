import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pily8CaledarWeekComponent } from './pily8-calendar-week.component';

describe('Pily8CaledarWeekComponent', () => {
  let component: Pily8CaledarWeekComponent;
  let fixture: ComponentFixture<Pily8CaledarWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pily8CaledarWeekComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Pily8CaledarWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
