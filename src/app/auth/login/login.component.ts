import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  loginData(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      alert('Veuillez remplir tous les champs requis.');
      return;
    }

    const credentials = this.loginForm.value;

    this.http.post<any>('http://localhost:8080/api/auth/login', credentials).subscribe({
      next: (response) => {
        console.log('Réponse login:', response);

        const token = response?.token;
        const role = response?.role;

        if (!token) {
          alert('Connexion échouée : token non reçu.');
          return;
        }

        if (!role) {
          alert('Connexion échouée : rôle non reçu.');
          return;
        }

        // Stocker le token JWT dans localStorage avec un nom clair
        localStorage.setItem('auth_token', token);

        alert('Connexion réussie !');

        // Redirection selon rôle (gestion des différents formats)
        switch (role.toUpperCase()) {
          case 'ROLE_ADMIN':
          case 'ADMIN':
            this.router.navigate(['/admin']);
            break;
          case 'ROLE_MEDECIN':
          case 'MEDECIN':
            this.router.navigate(['/home-medecin']);
            break;
          case 'ROLE_PATIENT':
          case 'PATIENT':
            this.router.navigate(['/home-patient']);
            break;
          default:
            alert("Rôle inconnu, redirection vers l'accueil.");
            this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.error('Erreur de connexion :', err);
        alert(err.error?.message || 'Erreur lors de la connexion. Veuillez réessayer.');
      }
    });
  }

  registerData(): void {
    this.router.navigate(['/register']);
  }
}
