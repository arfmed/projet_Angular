import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employe } from '../Entity/Employe.Entity';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-ajouter-employe',
  templateUrl: './ajouter-employe.component.html',
  styleUrls: ['./ajouter-employe.component.css']
})
export class AjouterEmployeComponent {
  employeForm: FormGroup;
    
  
    constructor(
      private services: CrudService,
      private router: Router,
      private fb: FormBuilder
    ) {

      this.employeForm = this.fb.group({
         photoDeProfil: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("^[a-zA-ZÀ-ÿ\\s'-]+$") // Only alphabetic characters
        ]),
         logoEntreprise: new FormControl('', [
          Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
         photoCouverture: new FormControl('', [
          Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
         titreEmploi: new FormControl('', [
       Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
         departement: new FormControl('', [
          Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
         nomEntreprise: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
         numTelephone: new FormControl('', [
         Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
         urlEntreprise: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
         adresse: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
         
         couleur: new FormControl('', [
          Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
         police: new FormControl('', [
          Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
         fbLink: new FormControl('', [
         Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
         xLink: new FormControl('', [
         Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
         instagramLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),

        linkedinLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
        youtubeLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
        snapchatLink: new FormControl('', [
         Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
        tiktokLink: new FormControl('', [
         Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
        twitchLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
        yelpLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
        whatsappLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
        signalLink: new FormControl('', [
           Validators.required,
          Validators.minLength(3),// Only alphabetic characters
        ]),
        discordLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
        skypeLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
        telegramLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
        githubLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
        gitlabLink: new FormControl('', [
          Validators.required,
          Validators.minLength(3), // Only alphabetic characters
        ]),
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
      });
    }
  
    ngOnInit(): void {
      // Initialization code if needed
    }
  
    // Getters for form controls
    get photoDeProfil() { return this.employeForm.get('photoDeProfil'); }
    get logoEntreprise() { return this.employeForm.get('logoEntreprise'); }
    get photoCouverture() { return this.employeForm.get('photoCouverture'); }
    get titreEmploi() { return this.employeForm.get('titreEmploi'); }
    get departement() { return this.employeForm.get('departement'); }
    get nomEntreprise() { return this.employeForm.get('nomEntreprise'); }
    get numTelephone() { return this.employeForm.get('numTelephone'); }
    get urlEntreprise() { return this.employeForm.get('urlEntreprise'); }
    get adresse() { return this.employeForm.get('adresse'); }
    get couleur() { return this.employeForm.get('couleur'); }
    get police() { return this.employeForm.get('police'); }
    get fbLink() { return this.employeForm.get('fbLink'); }
    get xLink() { return this.employeForm.get('xLink'); }
    get instagramLink() { return this.employeForm.get('instagramLink'); }
    get linkedinLink() { return this.employeForm.get('linkedinLink'); }
    get youtubeLink() { return this.employeForm.get('youtubeLink'); }
    get snapchatLink() { return this.employeForm.get('snapchatLink'); }
    get tiktokLink() { return this.employeForm.get('tiktokLink'); }
    get twitchLink() { return this.employeForm.get('twitchLink'); }
    get yelpLink() { return this.employeForm.get('yelpLink'); }
    get whatsappLink() { return this.employeForm.get('whatsappLink'); }
    get signalLink() { return this.employeForm.get('signalLink'); }
    get discordLink() { return this.employeForm.get('discordLink'); }
    get skypeLink() { return this.employeForm.get('skypeLink'); }
    get telegramLink() { return this.employeForm.get('telegramLink'); }
    get githubLink() { return this.employeForm.get('githubLink'); }
    get gitlabLink() { return this.employeForm.get('gitlabLink'); }
    get nom() { return this.employeForm.get('nom'); }
    get email() { return this.employeForm.get('email'); }
    get mdp() { return this.employeForm.get('mdp'); }
    
  
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
  
    addNewEmploye() {
      if (this.employeForm.invalid) {
        // Show specific error messages for each invalid field
        Object.keys(this.employeForm.controls).forEach(key => {
          const control = this.employeForm.get(key);
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
  
      const data = this.employeForm.value;
      const employe = new Employe (undefined, data.photoDeProfil,  data.logoEntreprise, data.photoCouverture, data.titreEmploi, data.departement, 
        data.nomEntreprise, data.numTelephone, data.urlEntreprise, data.adresse, data.couleur, data.police, 
        data.fbLink, data.xLink, data.instagramLink, data.linkedinLink, data.youtubeLink, data.snapchatLink, 
        data.tiktokLink, data.twitchLink, data.yelpLink, data.whatsappLink, data.signalLink, data.discordLink, data.skypeLink, 
        data.telegramLink, data.githubLink, data.gitlabLink,data.nom,  data.email, data.mdp);
  
      this.services.addemploye(employe).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Employe ajouté avec succès !',
            timer: 2000,
            showConfirmButton: false
          }).then(() => {
            this.router.navigate(['/listeEmploye']).then(() => {
              window.location.reload();
            });
          });
        },
        error: (err) => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur s\'est produite lors de l\'ajout de l\'Employe'
          });
        }
      });
    }

}
