import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Medecin {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  specialite: string;
  statut: 'en_attente' | 'valide' | 'rejete';
}

@Component({
  selector: 'app-validation-medecins',
  imports : [CommonModule, RouterLink],
  templateUrl: './validation-medecins.component.html',
  styleUrls: ['./validation-medecins.component.css']
})
export class ValidationMedecinsComponent implements OnInit {

  medecinsEnAttente: Medecin[] = [
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Jean',
      email: 'jean.dupont@example.com',
      telephone: '0600000001',
      specialite: 'Cardiologie',
      statut: 'en_attente'
    },
    {
      id: 2,
      nom: 'Durand',
      prenom: 'Alice',
      email: 'alice.durand@example.com',
      telephone: '0600000002',
      specialite: 'Dermatologie',
      statut: 'en_attente'
    }
  ];

  ngOnInit(): void {}

  valider(id: number): void {
    this.medecinsEnAttente = this.medecinsEnAttente.filter(m => m.id !== id);
    alert('Médecin validé.');
  }

  rejeter(id: number): void {
    this.medecinsEnAttente = this.medecinsEnAttente.filter(m => m.id !== id);
    alert('Médecin rejeté.');
  }
}
