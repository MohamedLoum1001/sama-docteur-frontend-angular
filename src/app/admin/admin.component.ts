import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-admin',
  // standalone: true,
  imports: [CommonModule, NavbarComponent, DashboardComponent, SidebarComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  sidebarOpen = true;  // initialement, la sidebar est ouverte

  // Méthode pour basculer l'état de la sidebar
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;  // inverse l'état de sidebarOpen
  }
}
