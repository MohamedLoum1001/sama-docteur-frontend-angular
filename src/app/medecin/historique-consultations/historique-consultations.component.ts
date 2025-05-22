import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-consultations',
  imports : [CommonModule],
  templateUrl: './historique-consultations.component.html',
  styleUrls: ['./historique-consultations.component.css']
})
export class HistoriqueConsultationsComponent implements OnInit {
  consultations: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Exemple de données simulées (à remplacer par une API réelle)
    this.consultations = [
      {
        patient: 'Alice Dupont',
        date: '2025-04-10',
        diagnostic: 'Rhume saisonnier',
        traitement: 'Paracétamol 500mg',
        dossier: 'Dossier de suivi régulier. Aucun antécédent grave.'
      },
      {
        patient: 'Marc Bernard',
        date: '2025-03-25',
        diagnostic: 'Hypertension',
        traitement: 'Bêta-bloquants',
        dossier: 'Patient suivi pour hypertension chronique.'
      }
    ];
  }

  afficherDossier(consultation: any): void {
    alert(`Dossier médical de ${consultation.patient} :\n\n${consultation.dossier}`);
  }
}
