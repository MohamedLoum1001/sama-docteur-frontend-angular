import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      prenom: [''],
      nom: [''],
      email: [''],
      adresse: [''],
      telephone: [''],
      password: [''],
      confirmPassword: [''],
      role: ['PATIENT'],
      specialite: ['']
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  get isMedecin(): boolean {
    return this.registerForm.get('role')?.value === 'MEDECIN';
  }

  loginData(): void {
    this.router.navigate(['/login']);
  }
}
