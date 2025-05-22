import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendez-vous',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,  // Ajoute FormsModule dans les imports
  ],
  templateUrl: './rendez-vous.component.html',
  styleUrl: './rendez-vous.component.css'
})
export class RendezVousComponent implements OnInit {
  constructor(private router: Router){}
  homePatient(){
    this.router.navigate(['home-patient']);
  }
  specialties: string[] = ['Cardiologie', 'Dermatologie', 'Pédiatrie', 'Généraliste'];
  
  doctors: any[] = [
    { name: 'Dr. Dupont', specialty: 'Cardiologie' },
    { name: 'Dr. Martin', specialty: 'Dermatologie' },
    { name: 'Dr. Lefevre', specialty: 'Pédiatrie' },
    { name: 'Dr. Durant', specialty: 'Généraliste' },
    { name: 'Dr. Bernard', specialty: 'Cardiologie' },
  ];

  filteredDoctors: any[] = [];

  appointment = {
    specialty: '',
    doctor: '',
    date: ''
  };

  ngOnInit() {
    // Initialiser les médecins selon la spécialité par défaut (si besoin)
    this.filteredDoctors = this.doctors;
  }

  // Filtrer les médecins en fonction de la spécialité sélectionnée
  onSpecialtyChange() {
    if (this.appointment.specialty) {
      this.filteredDoctors = this.doctors.filter(doctor => doctor.specialty === this.appointment.specialty);
    } else {
      this.filteredDoctors = this.doctors;
    }
  }

  // Soumettre la prise de rendez-vous
  submitAppointment() {
    console.log('Rendez-vous pris :', this.appointment);
    alert(`Votre rendez-vous a été pris avec ${this.appointment.doctor} le ${this.appointment.date}`);
    // Logiciel backend pour enregistrer le rendez-vous ici
  }
}
