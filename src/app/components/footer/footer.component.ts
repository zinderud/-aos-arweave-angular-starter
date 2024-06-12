import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent implements OnInit {
	currentYear!: number;
	isDarkTheme!: Observable<boolean>;
	roundedComponentTotal: number;

	constructor() {
		super();
		this.roundedComponentTotal = environment.roundedComponentTotal;
	}

	ngOnInit(): void {
		this.currentYear = new Date().getFullYear();
		this.isDarkTheme = this.themeService.getDarkTheme();
	}

	toggleDarkTheme(dark: boolean): void {
		this.themeService.setDarkTheme(dark);
	}
}