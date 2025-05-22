// src/app/auth/register/register.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['PATIENT', Validators.required],
      specialite: ['']  // Ajout du champ spécialité ici
    }, { validators: this.passwordsMatchValidator });

    // Validation dynamique de 'specialite' en fonction du rôle
    this.registerForm.get('role')?.valueChanges.subscribe(role => {
      const specialiteControl = this.registerForm.get('specialite');
      if (role === 'MEDECIN') {
        specialiteControl?.setValidators([Validators.required]);
      } else {
        specialiteControl?.clearValidators();
        specialiteControl?.setValue(''); // reset si ce n'est pas médecin
      }
      specialiteControl?.updateValueAndValidity();
    });
  }

  // Getter pratique pour savoir si on est médecin (utile dans le template)
  get isMedecin(): boolean {
    return this.registerForm.get('role')?.value === 'MEDECIN';
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  submit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      alert('Formulaire invalide. Vérifiez vos informations.');
      return;
    }

    const userData = this.registerForm.value;
    console.log('Données envoyées :', userData);

    this.http.post('http://localhost:8080/api/auth/register', userData).subscribe({
      next: () => {
        alert('Inscription réussie !');
        this.registerForm.reset({ role: 'PATIENT' });
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erreur :', err);
        alert(err.error?.message || 'Une erreur est survenue. Essayez encore.');
      }
    });
  }

  loginData(): void {
    this.router.navigate(['/login']);
  }
}
