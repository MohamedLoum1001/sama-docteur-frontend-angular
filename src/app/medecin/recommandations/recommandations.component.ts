import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recommandations',
  imports : [CommonModule, FormsModule, RouterLink],
  templateUrl: './recommandations.component.html',
  styleUrls: ['./recommandations.component.css']
})
export class RecommandationsComponent {
  recommandations: string = '';

  // Exemple : formulaire de soumission des recommandations
  submitRecommandation() {
    if (this.recommandations.trim() !== '') {
      // Ici tu pourrais envoyer la recommandation au backend pour stockage
      alert('Recommandation enregistrée avec succès.');
      this.recommandations = ''; // Réinitialiser le champ
    } else {
      alert('Veuillez saisir une recommandation.');
    }
  }
}
