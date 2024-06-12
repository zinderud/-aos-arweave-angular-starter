import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from 'src/app/core/base/base.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';

@Component({
  selector: 'app-main-layouts',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MenuComponent,FooterComponent,SettingsComponent],
  templateUrl: './main-layouts.component.html',
  styleUrls: ['./main-layouts.component.css']
})
export class MainLayoutsComponent extends BaseComponent {
 
  price = 100;
  constructor() {
    super();
  }
}
