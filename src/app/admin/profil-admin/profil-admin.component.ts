import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profil-admin',
  imports : [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit {
  adminForm!: FormGroup;
  isEditing = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      prenom: [{ value: 'Jean', disabled: true }, Validators.required],
      nom: [{ value: 'Dupont', disabled: true }, Validators.required],
      email: [{ value: 'admin@example.com', disabled: true }, [Validators.required, Validators.email]],
      telephone: [{ value: '0123456789', disabled: true }],
      adresse: [{ value: '123 Rue de Paris', disabled: true }]
    });
  }

  enableEdit(): void {
    this.isEditing = true;
    this.adminForm.enable();
  }

  saveChanges(): void {
    if (this.adminForm.valid) {
      console.log('Admin mis à jour:', this.adminForm.value);
      this.adminForm.disable();
      this.isEditing = false;
    }
  }

  cancelEdit(): void {
    this.ngOnInit(); // reset
    this.isEditing = false;
  }
}
