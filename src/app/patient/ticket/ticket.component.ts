import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  imports: [
    CommonModule,
    FormsModule,  // Ajoute FormsModule dans les imports
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  constructor(private router: Router) { }
  homePatient() {
    this.router.navigate(['home-patient']);
  }
  payment = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };

  paymentSuccess: boolean = false;
  paymentError: boolean = false;

  // Fonction pour soumettre le paiement
  onSubmit() {
    // Simuler un paiement réussi ou une erreur
    if (this.payment.cardNumber && this.payment.expiryDate && this.payment.cvv) {
      this.paymentSuccess = true;
      this.paymentError = false;
      console.log('Paiement effectué avec succès', this.payment);
    } else {
      this.paymentError = true;
      this.paymentSuccess = false;
      console.log('Erreur lors du paiement');
    }

    // Envoie des données vers une API backend pour le traitement réel du paiement ici
  }
}
