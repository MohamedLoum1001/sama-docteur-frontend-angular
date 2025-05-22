import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ordonance-medecin',
  imports : [ReactiveFormsModule, RouterLink],
  templateUrl: './ordonance-medecin.component.html',
  styleUrls: ['./ordonance-medecin.component.css']
})
export class OrdonanceMedecinComponent {
  ordonnanceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ordonnanceForm = this.fb.group({
      patientName: ['', Validators.required],
      medicaments: ['', Validators.required],
      instructions: ['', Validators.required]
    });
  }

  envoyerOrdonnance() {
    if (this.ordonnanceForm.valid) {
      const ordonnance = this.ordonnanceForm.value;
      console.log('Ordonnance envoyée au patient :', ordonnance);
      alert(`Ordonnance envoyée à ${ordonnance.patientName}`);
      this.ordonnanceForm.reset();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
