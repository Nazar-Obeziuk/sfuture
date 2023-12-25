import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../shared/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(public sidebarService: SidebarService) {}

  toggleLightTheme(): void {
    this.sidebarService.isLightThemeActive = true;
  }

  toggleDarkTheme(): void {
    this.sidebarService.isLightThemeActive = false;
  }

}
