import { Component, inject, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Observable } from 'rxjs';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

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
  ]
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private renderer: Renderer2 = inject(Renderer2);
  mode: 'light' | 'dark' = 'dark';
  theme: 'pale-blue' | 'pale-green' = 'pale-green';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  setMode(mode: 'light' | 'dark') {
    this.mode = mode;
  }

  setTheme(theme: 'pale-blue' | 'pale-green') {
    this.theme = theme;
  }
}
