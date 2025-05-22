import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  imports : [CommonModule, FormsModule]
})
export class ProfilComponent implements OnInit {
  user = {
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    adresse: ''
  };

  historique: any[] = []; // tu peux remplir plus tard

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      // alert('Vous devez être connecté.');
      this.router.navigate(['/profil']);
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>('http://localhost:8080/api/user/me', { headers }).subscribe({
      next: (data) => {
        this.user.prenom = data.prenom || '';
        this.user.nom = data.nom || '';
        this.user.email = data.email || '';
        this.user.telephone = data.telephone || '';
        this.user.adresse = data.adresse || '';
      },
      error: (err) => {
        console.error('Erreur chargement profil:', err);
        if (err.status === 401 || err.status === 403) {
          alert('Session expirée ou non autorisée. Veuillez vous reconnecter.');
          this.router.navigate(['/profil']);
        } else {
          alert('Impossible de charger votre profil.');
        }
      }
    });
  }

  updateProfile(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Session expirée. Veuillez vous reconnecter.');
      this.router.navigate(['/login']);
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.put('http://localhost:8080/api/user/me', this.user, { headers }).subscribe({
      next: () => alert('Profil mis à jour !'),
      error: (err) => {
        console.error('Erreur mise à jour profil:', err);
        alert('Erreur lors de la mise à jour du profil.');
      }
    });
  }

  homePatient(): void {
    this.router.navigate(['/home-patient']);
  }
}
