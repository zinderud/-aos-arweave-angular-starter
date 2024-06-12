import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { MenuService } from 'src/app/core/services/menu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
	menuOpen!: Observable<boolean>;
	docsOpen = false;
	categories = [
		{link: '', name: 'Home'},
		{link: 'faq', name: 'faq'},
		{link: 'app-intro', name: 'app'},
		{link: 'home-doc', name: 'doc'},
	];
	 

	constructor(private menuService: MenuService) {
		super();
	}

	ngOnInit() {
		this.menuOpen = this.menuService.isOpen();
	}

	closeMenu() {
		this.docsOpen = false;
		this.menuService.close();
	}

	toggleDocs(event: Event) {
		this.docsOpen = !this.docsOpen;
		event.stopPropagation();
	}
}
