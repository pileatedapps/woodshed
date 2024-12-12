import { TestBed } from '@angular/core/testing';

import { Pily8CalendarService } from './pily8-calendar.service';
import { provideRouter } from '@angular/router';

describe('CalendarService', () => {
  let service: Pily8CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([])
      ]
    });
    service = TestBed.inject(Pily8CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
