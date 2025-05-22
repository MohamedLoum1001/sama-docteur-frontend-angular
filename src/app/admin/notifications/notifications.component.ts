import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Notification {
  id: number;
  message: string;
  date: Date;
  lu: boolean;
}

@Component({
  selector: 'app-notifications',
  imports : [CommonModule, RouterLink],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = [];

  ngOnInit(): void {
    // Exemple de données statiques
    this.notifications = [
      { id: 1, message: 'Nouvelle inscription d’un médecin.', date: new Date(), lu: false },
      { id: 2, message: 'Paiement reçu de la part de M. Martin.', date: new Date(), lu: true },
      { id: 3, message: 'Nouvel avis publié.', date: new Date(), lu: false }
    ];
  }

  marquerCommeLu(id: number): void {
    const notif = this.notifications.find(n => n.id === id);
    if (notif) notif.lu = true;
  }

  supprimerNotification(id: number): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }
}
