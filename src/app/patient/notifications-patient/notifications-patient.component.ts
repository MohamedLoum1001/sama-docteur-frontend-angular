import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications-patient',
  imports: [CommonModule, FormsModule],
  templateUrl: './notifications-patient.component.html',
  styleUrl: './notifications-patient.component.css'
})
export class NotificationsPatientComponent {
  constructor(private router: Router) { }
  homePatient() {
    this.router.navigate(['home-patient']);
  }
  notifications = [
    {
      titre: 'Votre rendez-vous est confirmé pour demain à 10h',
      date: new Date(),
      type: 'success'
    },
    {
      titre: 'Nouvelle mise à jour de l’application disponible',
      date: new Date(),
      type: 'info'
    },
    {
      titre: 'Paiement en attente pour votre ticket de consultation',
      date: new Date(),
      type: 'warning'
    },
    {
      titre: 'Erreur de paiement détectée',
      date: new Date(),
      type: 'error'
    }
  ];  

}
