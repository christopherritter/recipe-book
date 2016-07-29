import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { APP_ROUTES_PROVIDERS } from './app/app.routes';
import { ShoppingListService } from './app/shopping-list';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  ShoppingListService, 
  APP_ROUTES_PROVIDERS,
  disableDeprecatedForms(), // disabled old forms
  provideForms(), // enables new forms
  HTTP_PROVIDERS
]);

