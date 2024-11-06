import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconRegistry } from '@angular/material/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes), provideAnimationsAsync(),
    {
      provide: 'MatSymbols',
      useFactory: () => {
        const registry: MatIconRegistry = inject(MatIconRegistry);
        // Register your custom icons here
        return registry.setDefaultFontSetClass(
          'material-symbols-outlined'
        )
      },
    }
  ],
};
