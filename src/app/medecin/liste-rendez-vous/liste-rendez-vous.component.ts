import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-rendez-vous-medecin',
  imports : [CommonModule, FormsModule, RouterLink],
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.css']
})
export class ListeRendezVousComponent implements OnInit {
  rendezVousList = [
    {
      id: 1,
      patient: 'Alice Dupuis',
      date: new Date('2025-05-08T10:00:00'),
      motif: 'Suivi cardiaque',
      statut: 'Confirmé'
    },
    {
      id: 2,
      patient: 'Marc Dubois',
      date: new Date('2025-05-10T14:00:00'),
      motif: 'Bilan général',
      statut: 'En attente'
    },
    {
      id: 3,
      patient: 'Sophie Bernard',
      date: new Date('2025-05-12T09:30:00'),
      motif: 'Consultation post-opératoire',
      statut: 'Confirmé'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  formatDate(date: Date): string {
    return new Date(date).toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
