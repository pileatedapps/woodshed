import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationComponent } from './navigation.component';
import { DOCUMENT } from '@angular/common';
import { NavigationStart, provideRouter, Router, RouterEvent } from '@angular/router';
import { of } from 'rxjs';
import { appRoutes } from '../app.routes';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let document: Document;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [
        provideRouter(appRoutes)
      ]
    }).compileComponents();

    document = TestBed.inject(DOCUMENT);
    router = TestBed.inject(Router);
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('setTheme sets the theme', () => {
    component.setTheme('red');
    expect(document.documentElement.getAttribute('theme')).toEqual('red');
  });

  it('setMode sets the mode', () => {
    component.setMode('dark');
    expect(document.documentElement.getAttribute('mode')).toEqual('dark');
  });

  it('sets isLoading and activeUrl when navigation ends', async () => {
    await router.navigate(['samples'])
    expect(component.isLoading).toEqual(false);
    expect(component.activeUrl).toEqual('/samples');
  })
});
