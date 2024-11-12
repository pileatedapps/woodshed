import { Component, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, DOCUMENT, NgIf, UpperCasePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { filter, map, shareReplay } from 'rxjs/operators';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Observable, Subscription } from 'rxjs';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AsyncPipe,
    RouterOutlet,
    MatIconModule,
    MatTooltip,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    UpperCasePipe,
    MatProgressBar,
    NgIf
  ]
})
export class NavigationComponent implements OnInit, OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);
  private document: Document = inject(DOCUMENT);
  private renderer: Renderer2 = inject(Renderer2);
  private router: Router = inject(Router);
  mode: 'light' | 'dark' = 'light';
  theme: 'pale-blue' | 'pale-green' | 'red' = 'pale-green';
  isLoading = true;
  activeUrl = '';
  router$!: Subscription;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  setMode(mode: 'light' | 'dark') {
    this.mode = mode;
    this.renderer.setAttribute(this.document.documentElement, 'mode', mode);
  }

  setTheme(theme: 'pale-blue' | 'pale-green' | 'red') {
    this.theme = theme;
    this.renderer.setAttribute(this.document.documentElement, 'theme', theme);
  }

  ngOnInit(): void {
    this.router$ = this.router.events.pipe(
      filter((routerEvent: Event) => {
        return routerEvent instanceof NavigationStart
          || routerEvent instanceof NavigationEnd
          || routerEvent instanceof NavigationError
        }
      ),
      ).subscribe((routerEvent: Event) => {
        if (routerEvent instanceof NavigationEnd) {
          const navEnd: NavigationEnd = routerEvent as NavigationEnd;
          this.activeUrl = navEnd.url;
        }
        console.log(this.activeUrl);
        this.isLoading = false;
    });
  }

  isActivated(path: string) {
    return this.activeUrl.includes(path);
  }

  ngOnDestroy(): void {
    this.router$?.unsubscribe();
  }
}
