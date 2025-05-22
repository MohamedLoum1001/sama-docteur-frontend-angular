import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-medecin',
  imports : [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profil-medecin.component.html',
  styleUrls: ['./profil-medecin.component.css']
})
export class ProfilMedecinComponent implements OnInit {
  medecin: any = {
    nom: 'Dr Loum',
    specialite: 'Cardiologue',
    email: 'dr.loum@example.com',
    telephone: '0600000000',
    horaires: [
      { jour: 'Lundi', heureDebut: '08:00', heureFin: '12:00' },
      { jour: 'Mercredi', heureDebut: '14:00', heureFin: '18:00' }
    ]
  };

  nouveauHoraire: any = {};
  joursDisponibles: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  profilForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.profilForm = this.fb.group({
      nom: [this.medecin.nom, Validators.required],
      specialite: [this.medecin.specialite, Validators.required],
      email: [this.medecin.email, [Validators.required, Validators.email]],
      telephone: [this.medecin.telephone, Validators.required]
    });
  }

  goBack() {
    this.router.navigate(['/home-medecin']);
  }

  onSubmit() {
    if (this.profilForm.valid) {
      this.medecin = { ...this.medecin, ...this.profilForm.value };
      alert('✅ Profil mis à jour avec succès !');
    }
  }

  ajouterHoraire() {
    if (
      this.nouveauHoraire.jour &&
      this.nouveauHoraire.heureDebut &&
      this.nouveauHoraire.heureFin
    ) {
      this.medecin.horaires.push({ ...this.nouveauHoraire });
      this.nouveauHoraire = {};
    }
  }

  supprimerHoraire(index: number) {
    this.medecin.horaires.splice(index, 1);
  }
}