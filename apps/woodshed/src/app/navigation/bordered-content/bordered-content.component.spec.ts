import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderedContentComponent } from './bordered-content.component';

describe('BorderedContentComponent', () => {
  let component: BorderedContentComponent;
  let fixture: ComponentFixture<BorderedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderedContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BorderedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
