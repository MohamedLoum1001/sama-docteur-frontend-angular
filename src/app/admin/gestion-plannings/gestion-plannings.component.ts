import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Planning {
  id: number;
  nom: string;
  specialite: string;
  jours: string[];
  heureDebut: string;
  heureFin: string;
}

@Component({
  selector: 'app-gestion-plannings',
  imports : [CommonModule, FormsModule, RouterLink],
  templateUrl: './gestion-plannings.component.html',
  styleUrls: ['./gestion-plannings.component.css']
})
export class GestionPlanningsComponent implements OnInit {
  plannings: Planning[] = [];

  ngOnInit(): void {
    // Données fictives, à remplacer par un appel API
    this.plannings = [
      {
        id: 1,
        nom: 'Dr. Jean Dupont',
        specialite: 'Cardiologie',
        jours: ['Lundi', 'Mercredi', 'Vendredi'],
        heureDebut: '09:00',
        heureFin: '12:00'
      },
      {
        id: 2,
        nom: 'Dr. Marie Lefevre',
        specialite: 'Dermatologie',
        jours: ['Mardi', 'Jeudi'],
        heureDebut: '14:00',
        heureFin: '18:00'
      }
    ];
  }

  modifierPlanning(planning: Planning): void {
    alert(`Modifier planning de ${planning.nom}`);
    // Ouvre un formulaire dans un modal ou page dédiée
  }

  supprimerPlanning(id: number): void {
    this.plannings = this.plannings.filter(p => p.id !== id);
  }

  ajouterPlanning(): void {
    alert('Ajouter un nouveau planning');
    // Redirige vers formulaire ou ouvre un modal
  }
}
