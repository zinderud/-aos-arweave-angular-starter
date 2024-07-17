import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from 'src/app/core/base/base.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
 
import { MainLayoutsComponent } from 'src/app/layouts/main-layouts/main-layouts.component';
import { ArweaveWalletKitNgService, EVENT_CODES, formatAddress } from 'arweave-wallet-kit-ng';
import { ArIOService } from 'src/app/web3/arIOService';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
 
    HeroComponent,MainLayoutsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent {
  domainName = "www.aprendetypescript.com";
  price = 100;
   
  constructor(  private io:ArIOService,   private arweaveWalletKitNgService: ArweaveWalletKitNgService){super();}

  dene(){
    this.arweaveWalletKitNgService.eventEmitterObservable.subscribe(async (event) => {
      switch (event.code) {
    
        case EVENT_CODES.READY:
          // Do Something After Ready ( PAGE RELOAD AND CONNECTED )
          break;
    
        case EVENT_CODES.CONNECT:
          // Do Something After Connect

   /*        this.io.ioConnect(); */
          break;
    
        case EVENT_CODES.DISCONNECT:
          // Do Something After Disconnect
          break;
      }
    });
  }
// Listening For Events
 
}
 
