import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordonnances',
  imports: [
    CommonModule,
    FormsModule,  // Ajoute FormsModule dans les imports
  ],
  templateUrl: './ordonnances.component.html',
  styleUrls: ['./ordonnances.component.css']
})
export class OrdonnancesComponent implements OnInit {
  constructor(private router: Router) { }
  homePatient() {
    this.router.navigate(['home-patient']);
  }
  ordonnances = [
    { id: 1, nom: 'Ordonnance pour consultation', fichier: 'ordonnance1.pdf' },
    { id: 2, nom: 'Ordonnance pour examens', fichier: 'ordonnance2.pdf' },
  ];

  ngOnInit(): void {}

  // Méthode pour télécharger le fichier
  downloadOrdonnance(fichier: string) {
    const link = document.createElement('a');
    link.href = `assets/ordonnances/${fichier}`; // Assurez-vous que les fichiers sont bien dans le dossier 'assets/ordonnances/'
    link.download = fichier;
    link.click();
  }
}
