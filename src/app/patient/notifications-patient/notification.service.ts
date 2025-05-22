// notification.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  // Demande la permission pour afficher des notifications
  requestPermission() {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          console.log('Permission de notification accordée');
        }
      });
    }
  }

  // Affiche une notification
  sendNotification(title: string, body: string) {
    if (Notification.permission === "granted") {
      new Notification(title, {
        body: body,
        icon: 'assets/icons/notification-icon.png' // Chemin vers l'icône
      });
    } else {
      console.log("La permission de notification n'a pas été accordée.");
    }
  }
}
