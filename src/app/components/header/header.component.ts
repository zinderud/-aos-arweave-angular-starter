import { Component, inject, INJECTOR, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuComponent } from '../menu/menu.component';
import { ArweaveWalletKitNgModule, AWKConnectButtonModule, AWKConnectionModalModule, AWKProfileModalModule } from 'arweave-wallet-kit-ng';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [CommonModule,RouterModule,MenuComponent, AWKConnectButtonModule,
    AWKProfileModalModule,
    AWKConnectionModalModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
	menuOpen!: Observable<boolean>;
 
	constructor(private menuService: MenuService) {
		super();
	}

	ngOnInit() {
		this.menuOpen = this.menuService.isOpen();
	}

	closeMenu() {
		this.menuService.close();
	}

	toggleMenu(event: Event) {
		event.stopPropagation();
		this.menuService.toggle();
	}
	categories = [
		{link: '', name: 'Home'},
	 
	];
}
