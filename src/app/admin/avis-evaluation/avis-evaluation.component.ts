import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Avis {
  id: number;
  nom: string;
  role: 'Médecin' | 'Patient';
  commentaire: string;
  note: number;
  date: Date;
}

@Component({
  selector: 'app-avis-evaluation',
  imports : [CommonModule, FormsModule, RouterLink],
  templateUrl: './avis-evaluation.component.html',
  styleUrls: ['./avis-evaluation.component.css']
})
export class AvisEvaluationComponent implements OnInit {
  avisList: Avis[] = [];

  ngOnInit(): void {
    // Exemple de données mockées. Remplacer par un appel à l’API
    this.avisList = [
      { id: 1, nom: 'Jean Dupont', role: 'Patient', commentaire: 'Très bon service.', note: 5, date: new Date() },
      { id: 2, nom: 'Dr. Martin', role: 'Médecin', commentaire: 'Bonne plateforme.', note: 4, date: new Date() },
    ];
  }

  supprimerAvis(id: number): void {
    this.avisList = this.avisList.filter(avis => avis.id !== id);
  }

  modererAvis(id: number): void {
    alert(`Avis ${id} en cours de modération...`);
    // Ajouter ici l'appel à l’API si nécessaire
  }
}
