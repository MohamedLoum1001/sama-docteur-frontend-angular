import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports : [CommonModule, RouterLink], 
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarOpen = true; // Initialisation de la sidebar comme ouverte
  showText = false;    // Définition de la variable showText


  // Fonction pour ouvrir ou fermer la sidebar
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
