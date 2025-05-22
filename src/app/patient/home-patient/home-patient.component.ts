import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { Router, RouterLink } from '@angular/router';
import { NotificationService } from '../notifications-patient/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-patient',
  imports: [NavbarComponent, RouterLink, CommonModule],
  templateUrl: './home-patient.component.html',
  styleUrl: './home-patient.component.css'
})
export class HomePatientComponent implements OnInit {
  upcomingAppointments = [
    { id: 1, doctor: 'Dr. Smith', date: new Date('2025-05-10T10:00:00'), speciality: 'Cardiologist' },
    { id: 2, doctor: 'Dr. Brown', date: new Date('2025-05-15T14:00:00'), speciality: 'Dermatologist' }
  ];

  cards = [
    {
      emoji: '👤',
      title: 'Gérer mon profil',
      description: 'Mettez à jour vos informations personnelles et consultez votre historique médical.',
      button: 'Accéder',
      link: '/profil',
      color: '#00a5a8'
    },
    {
      emoji: '📅',
      title: 'Prendre un rendez-vous',
      description: 'Choisissez une spécialité, un médecin et une date disponible.',
      button: 'Prendre rendez-vous',
      action: () => this.RendezVous(),
      color: '#00a5a8'
    },
    {
      emoji: '🎟️',
      title: 'Acheter un ticket',
      description: 'Payez votre ticket de consultation en ligne en toute sécurité.',
      button: 'Acheter maintenant',
      link: '/paiement',
      color: '#00a5a8'
    },
    {
      emoji: '📹',
      title: 'Consultation en ligne',
      description: 'Lancez une séance vidéo avec votre médecin.',
      button: 'Rejoindre la consultation',
      link: '/consultation',
      color: '#00a5a8'
    },
    {
      emoji: '🔔',
      title: 'Notifications & rappels',
      description: 'Recevez des rappels pour vos rendez-vous médicaux.',
      button: 'Voir les rappels',
      link: '/notifications-patient',
      color: '#00a5a8'
    },
    {
      emoji: '💊',
      title: 'Mes ordonnances',
      description: 'Consultez vos ordonnances électroniques et téléchargez-les.',
      button: 'Accéder aux ordonnances',
      link: '/ordonnances',
      color: '#00a5a8'
    },
    {
      emoji: '📁',
      title: 'Mon dossier médical',
      description: 'Accédez à vos consultations, examens, et prescriptions.',
      button: 'Voir le dossier',
      link: '/dossier-medical',
      color: '#00a5a8'
    },
    {
      emoji: '⭐',
      title: 'Laisser un avis',
      description: 'Évaluez votre médecin et laissez un commentaire.',
      button: 'Donner mon avis',
      link: '/avis',
      color: '#00a5a8'
    }
  ];

  // RendezVous() {
  //   // logique de prise de rendez-vous
  // }
  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {}

  RendezVous() {
    this.router.navigate(['rendez-vous']);  // <- bonne route
  }

  ngOnInit() {
    this.notificationService.requestPermission();
    this.checkUpcomingAppointments();
  }

  checkUpcomingAppointments() {
    const now = new Date();
    this.upcomingAppointments.forEach(appointment => {
      const timeUntilAppointment = appointment.date.getTime() - now.getTime();
      if (timeUntilAppointment > 0 && timeUntilAppointment <= 30 * 60 * 1000) {
        this.notificationService.sendNotification(
          `Rappel : Vous avez un rendez-vous avec ${appointment.doctor}`,
          `Spécialité: ${appointment.speciality} - À ${appointment.date.toLocaleTimeString()}`
        );
      }
    });
  }
}