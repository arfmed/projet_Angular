import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CrudService } from '../service/crud.service';
import { Entreprise } from '../Entity/Entreprise.Entity';

@Component({
  selector: 'app-ajouter-entreprise',
  templateUrl: './ajouter-entreprise.component.html',
  styleUrls: ['./ajouter-entreprise.component.css']
})
export class AjouterEntrepriseComponent {
  entrepriseForm: FormGroup;
    
  
    constructor(
      private services: CrudService,
      private router: Router,
      private fb: FormBuilder
    ) {
      this.entrepriseForm = this.fb.group({
        nom: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("^[a-zA-ZÀ-ÿ\\s'-]+$") // Only alphabetic characters
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$'), // Must end with @gmail.com
          Validators.email,
        ]),
        mdp: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z0-9]+$') // Alphanumeric
        ]),
        logoEntreprise: new FormControl('', [
         // Only alphabetic characters
        ]),
        photoCouverture: new FormControl('', [
          // Only alphabetic characters
        ]),

        urlEntreprise: new FormControl('', [
          // Only alphabetic characters
        ]),

        adresse: new FormControl('', [
          // Only alphabetic characters
        ]),
       
      });
    }
  
    ngOnInit(): void {
      // Initialization code if needed
    }
  
    // Getters for form controls
    get nom() { return this.entrepriseForm.get('nom'); }
    get email() { return this.entrepriseForm.get('email'); }
    get mdp() { return this.entrepriseForm.get('mdp'); }
    get logoEntreprise() { return this.entrepriseForm.get('logoEntreprise'); }
    get photoCouverture() { return this.entrepriseForm.get('photoCouverture'); }
    get urlEntreprise() { return this.entrepriseForm.get('urlEntreprise'); }
    get adresse() { return this.entrepriseForm.get('adresse'); }
  
    // Helper method to show error messages
    getErrorMessage(control: any, fieldName: string) {
      if (control.hasError('required')) {
        return `Le champ ${fieldName} est obligatoire`;
      }
      if (control.hasError('minlength')) {
        return `Le champ ${fieldName} doit contenir au moins ${control.errors.minlength.requiredLength} caractères`;
      }
      if (control.hasError('pattern')) {
        switch(fieldName) {
          case 'nom':
            return 'Seuls les caractères alphabétiques sont autorisés';
          case 'email':
            return 'L\'email Ydoit se terminer par @gmail.com';
          case 'mdp':
            return 'Le mot de passe doit contenir uniquement des caractères alphanumériques';
          default:
            return 'Format invalide';
        }
      }
      return '';
    }
  
    addNewEntreprise() {
      if (this.entrepriseForm.invalid) {
        // Show specific error messages for each invalid field
        Object.keys(this.entrepriseForm.controls).forEach(key => {
          const control = this.entrepriseForm.get(key);
          if (control?.invalid) {
            const errorMessage = this.getErrorMessage(control, key);
            Swal.fire({
              icon: 'error',
              title: 'Champ invalide',
              text: errorMessage
            });
          }
        });
        return;
      }
  
      const data = this.entrepriseForm.value;
      const entreprise = new Entreprise (undefined, data.nom, data.email, data.mdp, data.logoEntreprise, 
        data.photoCouverture, data.urlEntreprise ,data.adresse);
  
      this.services.addentreprise(entreprise).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Entreprise ajouté avec succès !',
            timer: 2000,
            showConfirmButton: false
          }).then(() => {
            this.router.navigate(['/listeEntreprise']).then(() => {
              window.location.reload();
            });
          });
        },
        error: (err) => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur s\'est produite lors de l\'ajout de l\'entrepriseEN'
          });
        }
      });
    }

}
