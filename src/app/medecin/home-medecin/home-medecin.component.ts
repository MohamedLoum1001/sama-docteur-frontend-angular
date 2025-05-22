import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../patient/notifications-patient/notification.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NotificationService } from '../notifications/notification.service';

@Component({
  selector: 'app-home-medecin',
  templateUrl: './home-medecin.component.html',
  styleUrls: ['./home-medecin.component.css'],
  imports: [NavbarComponent, CommonModule, FormsModule]
})
export class HomeMedecinComponent implements OnInit {
  constructor(private router: Router, private notificationService: NotificationService) {}
  cards = [
    {
      emoji: '👤',
      title: 'Gérer mon profil',
      description: 'Modifier vos informations personnelles et définir vos disponibilités.',
      button: 'Accéder',
      link: '/profil-medecin',
      color: '#00a5a8'
    },
    {
      emoji: '📅',
      title: 'Rendez-vous programmés',
      description: 'Consulter la liste complète de vos rendez-vous à venir.',
      button: 'Voir mes rendez-vous',
      link: '/mes-rendez-vous',
      color: '#00a5a8'
    },
    {
      emoji: '📹',
      title: 'Consultation en ligne',
      description: 'Effectuer une consultation via un appel vidéo sécurisé.',
      button: 'Démarrer',
      link: '/consultation-video',
      color: '#00a5a8'
    },
    {
      emoji: '📝',
      title: 'Prescrire une ordonnance',
      description: 'Créer une ordonnance électronique et l’envoyer au patient.',
      button: 'Prescrire',
      link: '/ordonance-medecin',
      color: '#00a5a8'
    },
    {
      emoji: '📚',
      title: 'Historique médical',
      description: 'Accéder à l’historique des consultations et aux dossiers médicaux.',
      button: 'Consulter',
      link: '/dossiers-medicaux',
      color: '#00a5a8'
    },
    {
      emoji: '🔔',
      title: 'Notifications & rappels',
      description: 'Envoyer des rappels aux patients pour leurs rendez-vous.',
      button: 'Envoyer',
      action: () => this.sendReminders(),
      color: '#00a5a8'
    },
    {
      emoji: '💡',
      title: 'Recommandations médicales',
      description: 'Fournir des conseils ou recommandations après la consultation.',
      button: 'Fournir',
      link: '/recommandations',
      color: '#00a5a8'
    }
  ];
  
  goTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.notificationService.requestPermission();
  }

  sendReminders() {
    this.notificationService.sendNotification(
      '📅 Rappel envoyé',
      'Les rappels ont été envoyés aux patients pour leurs rendez-vous.'
    );
  }
}
