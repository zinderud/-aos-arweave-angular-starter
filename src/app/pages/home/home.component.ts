import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from 'src/app/core/base/base.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
 
import { MainLayoutsComponent } from 'src/app/layouts/main-layouts/main-layouts.component';

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
  constructor() {
    super();
  }
}
