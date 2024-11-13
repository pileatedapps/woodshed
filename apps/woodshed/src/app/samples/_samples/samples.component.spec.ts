import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplesComponent } from './samples.component';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { appRoutes } from '../../app.routes';

describe('SamplesComponent', () => {
  let component: SamplesComponent;
  let fixture: ComponentFixture<SamplesComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplesComponent],
      providers: [
        provideRouter(appRoutes),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              title: 'Parent Title',
              children: [
                {
                  routeConfig: {
                    path: '/Child01'
                  },
                  title: 'Child 01'
                },
                {
                  routeConfig: {
                    path: ':childid'
                  },
                  title: 'Child By Id'
                }
              ]
            },
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only have links for snapshots that have titles but are not ids', () => {
    expect(component.links.length).toEqual(1);
  })
});
