import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Specialite {
  nom: string;
  edition?: boolean;
}

@Component({
  selector: 'app-gestion-specialites',
  imports : [CommonModule, FormsModule, RouterLink],
  templateUrl: './gestion-specialites.component.html',
  styleUrls: ['./gestion-specialites.component.css']
})
export class GestionSpecialitesComponent {
  specialites: Specialite[] = [
    { nom: 'Cardiologie' },
    { nom: 'Dermatologie' },
    { nom: 'Pédiatrie' }
  ];

  nouvelleSpecialite: string = '';

  ajouterSpecialite(): void {
    if (this.nouvelleSpecialite.trim()) {
      this.specialites.push({ nom: this.nouvelleSpecialite });
      this.nouvelleSpecialite = '';
    }
  }

  editerSpecialite(specialite: Specialite): void {
    if (specialite.edition) {
      specialite.edition = false; // enregistrer
    } else {
      specialite.edition = true; // activer édition
    }
  }

  supprimerSpecialite(index: number): void {
    this.specialites.splice(index, 1);
  }
}
