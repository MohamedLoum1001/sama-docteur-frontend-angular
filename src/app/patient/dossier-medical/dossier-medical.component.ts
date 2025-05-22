import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dossier-medical',
  imports: [
    CommonModule,
    FormsModule,  // Ajoute FormsModule dans les imports
  ],
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.css']
})
export class DossierMedicalComponent implements OnInit {
  constructor(private router: Router) { }
  homePatient() {
    this.router.navigate(['home-patient']);
  }
  dossier = {
    consultations: [
      { id: 1, date: '2023-04-01', type: 'Consultation générale', rapport: 'Compte rendu de la consultation...' },
      { id: 2, date: '2023-06-15', type: 'Consultation dermatologique', rapport: 'Rapport détaillé des examens cutanés...' },
    ],
    examens: [
      { id: 1, date: '2023-05-10', type: 'Radiographie thoracique', resultat: 'Résultat normal, aucune anomalie détectée.' },
      { id: 2, date: '2023-07-20', type: 'IRM cérébrale', resultat: 'Présence de légère inflammation...' },
    ],
    prescriptions: [
      { id: 1, medecin: 'Dr. Dupont', medicament: 'Paracétamol', dosage: '500mg, 3 fois par jour' },
      { id: 2, medecin: 'Dr. Martin', medicament: 'Ibuprofène', dosage: '200mg, 2 fois par jour' },
    ],
  };

  ngOnInit(): void {}

  // Méthode pour télécharger un rapport ou un examen
  downloadFichier(fichier: string) {
    const link = document.createElement('a');
    link.href = `assets/dossier-medical/${fichier}`; // Assurez-vous que les fichiers sont dans le bon dossier
    link.download = fichier;
    link.click();
  }
}
