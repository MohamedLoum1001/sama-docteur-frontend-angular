// src/app/admin/add-user/add-user.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-users',
  standalone: true,
  templateUrl: './ajouter-users.component.html',
  styleUrls: ['./ajouter-users.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink]
})
export class AjouterUsersComponent {
  userForm: FormGroup;
  generatedPassword: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      role: ['admin', Validators.required],
      specialite: ['']
    });

    this.generatePassword();
  }

  get isMedecin(): boolean {
    return this.userForm.get('role')?.value === 'medecin';
  }

  generatePassword(): void {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    this.generatedPassword = Array.from({ length: 10 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert("Token non trouvé, veuillez vous reconnecter.");
      return;
    }

    const userData = {
      ...this.userForm.value,
      password: this.generatedPassword
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.post("http://localhost:8080/api/auth/register", userData, { headers })
      .subscribe({
        next: () => {
          alert("Utilisateur ajouté avec succès !");
          this.userForm.reset();
          this.userForm.get('role')?.setValue('admin');
          this.generatePassword();
        },
        error: (err) => {
          console.error("Erreur :", err);
          alert("Erreur lors de la création de l'utilisateur. Vérifie les droits ou les données.");
        }
      });
  }
}
