import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface User {
  id?: number;
  prenom: string;
  nom: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  filtre = '';
  userForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['PATIENT', Validators.required]
    }, { validators: this.passwordMatchValidator });

    this.getUsers();
  }

  getUsers(): void {
    const token = localStorage.getItem('token'); // token JWT récupéré après login
    if (!token) {
      alert('Vous devez être connecté pour accéder aux utilisateurs.');
      return;
    }

    this.http.get<User[]>('http://localhost:8080/api/user/all', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
      },
      error: (err) => {
        console.error('Erreur de chargement des utilisateurs :', err);
        alert('Erreur lors du chargement des utilisateurs.');
      }
    });
  }

  filtrer(): void {
    const term = this.filtre.toLowerCase();
    this.filteredUsers = this.users.filter(u =>
      u.nom.toLowerCase().includes(term) ||
      u.prenom.toLowerCase().includes(term) ||
      u.email.toLowerCase().includes(term) ||
      u.role.toLowerCase().includes(term)
    );
  }

  passwordMatchValidator(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  ajouterUtilisateur(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      alert('Veuillez remplir tous les champs correctement. Vérifiez que les mots de passe correspondent.');
      return;
    }

    this.http.post('http://localhost:8080/api/auth/register', this.userForm.value).subscribe({
      next: () => {
        alert('Utilisateur ajouté avec succès !');
        this.userForm.reset({ role: 'PATIENT' });
        this.getUsers();
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout :', err);
        alert('Erreur lors de l’ajout de l’utilisateur.');
      }
    });
  }
}
