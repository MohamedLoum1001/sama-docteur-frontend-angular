import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-avis',
  imports: [
    CommonModule,
    FormsModule,  // Ajoute FormsModule dans les imports
    ReactiveFormsModule,
  ],
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  avisForm: FormGroup; // Déclaration de la propriété

  avisSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.avisForm = this.formBuilder.group({
      note: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      commentaire: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    // Aucun besoin de réinitialiser la propriété ici, elle est déjà initialisée dans le constructeur
  }

  // Accès facile aux contrôles du formulaire
  get f() {
    return this.avisForm.controls;
  }

  // Fonction de soumission du formulaire
  onSubmit() {
    if (this.avisForm.invalid) {
      return;
    }

    const avisData = this.avisForm.value;
    console.log('Avis soumis:', avisData);

    // Traitement de l'avis, par exemple en envoyant les données au serveur
  }
}
