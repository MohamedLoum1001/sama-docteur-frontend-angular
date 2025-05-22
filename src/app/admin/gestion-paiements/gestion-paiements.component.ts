import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Paiement {
  id: number;
  nom: string;
  email: string;
  montant: number;
  date: Date;
  statut: 'Validé' | 'En attente' | 'Refusé';
}

@Component({
  selector: 'app-gestion-paiements',
  imports : [CommonModule, FormsModule, RouterLink], 
  templateUrl: './gestion-paiements.component.html',
  styleUrls: ['./gestion-paiements.component.css']
})
export class GestionPaiementsComponent implements OnInit {
  paiements: Paiement[] = [];

  ngOnInit(): void {
    // Remplacer par un appel à l'API pour les vrais paiements
    this.paiements = [
      { id: 1, nom: 'Alice Moreau', email: 'alice@example.com', montant: 75, date: new Date(), statut: 'En attente' },
      { id: 2, nom: 'Dr. Bernard', email: 'bernard@example.com', montant: 150, date: new Date(), statut: 'Validé' }
    ];
  }

  voirDetails(paiement: Paiement): void {
    alert(`Détails du paiement de ${paiement.nom} - Montant : ${paiement.montant}€`);
  }

  validerPaiement(id: number): void {
    const index = this.paiements.findIndex(p => p.id === id);
    if (index !== -1) {
      this.paiements[index].statut = 'Validé';
    }
  }
}
