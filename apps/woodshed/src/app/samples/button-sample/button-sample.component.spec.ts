import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonSampleComponent } from './button-sample.component';
import { provideRouter } from '@angular/router';

describe('ButtonSampleComponent', () => {
  let component: ButtonSampleComponent;
  let fixture: ComponentFixture<ButtonSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSampleComponent],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
