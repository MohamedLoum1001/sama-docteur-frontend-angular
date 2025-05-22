import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification-medecin',
  imports : [CommonModule, FormsModule],
  templateUrl: './notification-medecin.component.html',
  styleUrls: ['./notification-medecin.component.css']
})
export class NotificationMedecinComponent {
  patients = [
    { id: 1, name: 'Alice Dupont', email: 'alice@example.com' },
    { id: 2, name: 'Jean Martin', email: 'jean@example.com' },
    { id: 3, name: 'Claire Bernard', email: 'claire@example.com' },
  ];

  selectedPatientId: number | null = null;
  message: string = '';

  sendNotification() {
    const selectedPatient = this.patients.find(p => p.id === this.selectedPatientId);

    if (selectedPatient && this.message.trim()) {
      // Appel à un service réel ou simulation
      console.log(`Notification envoyée à ${selectedPatient.name}: ${this.message}`);
      alert(`Notification envoyée à ${selectedPatient.name}`);
      this.message = '';
      this.selectedPatientId = null;
    } else {
      alert('Veuillez sélectionner un patient et écrire un message.');
    }
  }
}
