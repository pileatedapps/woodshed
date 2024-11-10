import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgClass, NgForOf } from '@angular/common';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';

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
  title = `Joe's Woodshed`;
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.matIconRegistry.setDefaultFontSetClass(
      'material-symbols-outlined');
  }
}
