import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withDebugTracing,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withDebugTracing(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
  ],
};

// {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'}
