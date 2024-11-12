import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgClass, NgForOf } from '@angular/common';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
import { filter } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,
    NgClass,
    MatSidenavContainer, MatSidenav,
    MatSidenavContent,
    MatButtonModule,
    MatNavList, MatListItem, MatIcon, MatToolbar, NgForOf, NavigationComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy, OnInit {
  readonly matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private readonly breakPoint$: BreakpointObserver = inject(BreakpointObserver);
  private readonly media = inject(MediaMatcher);
  title = `Joe's Woodshed`;
  mobileQuery: MediaQueryList;

  constructor() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
  }

  ngOnDestroy(): void {
    this.breakPoint$.ngOnDestroy();
  }

  ngOnInit(): void {
    this.matIconRegistry.setDefaultFontSetClass(
      'material-symbols-outlined');

    this.breakPoint$.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall,
      Breakpoints.Handset,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.Web,
      Breakpoints.WebPortrait,
      Breakpoints.WebLandscape,
      Breakpoints.Tablet,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape
    ]).pipe(
      filter((breakPoint: BreakpointState) => breakPoint.matches)
    )
      .subscribe((breakPoint: BreakpointState) => {
      console.log(breakPoint);
    })
  }
}
