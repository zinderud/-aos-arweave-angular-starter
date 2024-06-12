import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {RouterModule, withComponentInputBinding} from "@angular/router";
import {routes} from "./app/routes";
import { ArweaveWalletKitNgModule } from 'arweave-wallet-kit-ng';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers:[
        importProvidersFrom(RouterModule.forRoot(routes),ArweaveWalletKitNgModule.forRoot() ),
        {provide: 'ENVIRONMENT', useValue: environment}
    ]

})
  .catch(err => console.error(err));
