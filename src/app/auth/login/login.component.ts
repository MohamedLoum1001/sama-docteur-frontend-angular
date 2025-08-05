import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
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

    // Simulation simple : redirection directe vers la page d’accueil
    alert('Connexion réussie (simulation) !');
    this.router.navigate(['/home-patient']);
    // this.router.navigate(['/home-medecin']);

  }

  registerData(): void {
    this.router.navigate(['/register']);
  }
}
