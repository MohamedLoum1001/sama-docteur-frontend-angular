import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Signalement {
  id: number;
  type: 'avis' | 'commentaire';
  contenu: string;
  auteur: string;
  date: string;
  raison: string;
}

@Component({
  selector: 'app-moderation',
  imports : [CommonModule, FormsModule, RouterLink],
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})
export class ModerationComponent implements OnInit {

  signalements: Signalement[] = [
    {
      id: 1,
      type: 'avis',
      contenu: 'Ce médecin est incompétent !',
      auteur: 'jean@example.com',
      date: '2025-05-07',
      raison: 'Propos injurieux'
    },
    {
      id: 2,
      type: 'commentaire',
      contenu: 'Spam de liens publicitaires.',
      auteur: 'alice@example.com',
      date: '2025-05-08',
      raison: 'Spam'
    }
  ];

  ngOnInit(): void {}

  valider(id: number) {
    this.signalements = this.signalements.filter(item => item.id !== id);
    alert('Contenu validé.');
  }

  supprimer(id: number) {
    this.signalements = this.signalements.filter(item => item.id !== id);
    alert('Contenu supprimé.');
  }
}
