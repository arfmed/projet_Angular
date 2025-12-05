import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../service/crud.service';
import { Particulier } from '../Entity/Particulier.Entity';

@Component({
  selector: 'app-ajouter-particulier',
  templateUrl: './ajouter-particulier.component.html',
  styleUrls: ['./ajouter-particulier.component.css']
})
export class AjouterParticulierComponent {

  particulierForm: FormGroup;
      
    
      constructor(
        private services: CrudService,
        private router: Router,
        private fb: FormBuilder
      ) {
  
        this.particulierForm = this.fb.group({
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
      get photoDeProfil() { return this.particulierForm.get('photoDeProfil'); }
      get logoEntreprise() { return this.particulierForm.get('logoEntreprise'); }
      get photoCouverture() { return this.particulierForm.get('photoCouverture'); }
      get titreEmploi() { return this.particulierForm.get('titreEmploi'); }
      get departement() { return this.particulierForm.get('departement'); }
      get nomEntreprise() { return this.particulierForm.get('nomEntreprise'); }
      get numTelephone() { return this.particulierForm.get('numTelephone'); }
      get urlEntreprise() { return this.particulierForm.get('urlEntreprise'); }
      get adresse() { return this.particulierForm.get('adresse'); }
      get couleur() { return this.particulierForm.get('couleur'); }
      get police() { return this.particulierForm.get('police'); }
      get fbLink() { return this.particulierForm.get('fbLink'); }
      get xLink() { return this.particulierForm.get('xLink'); }
      get instagramLink() { return this.particulierForm.get('instagramLink'); }
      get linkedinLink() { return this.particulierForm.get('linkedinLink'); }
      get youtubeLink() { return this.particulierForm.get('youtubeLink'); }
      get snapchatLink() { return this.particulierForm.get('snapchatLink'); }
      get tiktokLink() { return this.particulierForm.get('tiktokLink'); }
      get twitchLink() { return this.particulierForm.get('twitchLink'); }
      get yelpLink() { return this.particulierForm.get('yelpLink'); }
      get whatsappLink() { return this.particulierForm.get('whatsappLink'); }
      get signalLink() { return this.particulierForm.get('signalLink'); }
      get discordLink() { return this.particulierForm.get('discordLink'); }
      get skypeLink() { return this.particulierForm.get('skypeLink'); }
      get telegramLink() { return this.particulierForm.get('telegramLink'); }
      get githubLink() { return this.particulierForm.get('githubLink'); }
      get gitlabLink() { return this.particulierForm.get('gitlabLink'); }
      get nom() { return this.particulierForm.get('nom'); }
      get email() { return this.particulierForm.get('email'); }
      get mdp() { return this.particulierForm.get('mdp'); }
      
    
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
    
      addNewParticulier() {
        if (this.particulierForm.invalid) {
          // Show specific error messages for each invalid field
          Object.keys(this.particulierForm.controls).forEach(key => {
            const control = this.particulierForm.get(key);
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
    
        const data = this.particulierForm.value;
        const particulier = new Particulier (undefined, data.photoDeProfil,  data.logoEntreprise, data.photoCouverture, data.titreEmploi, data.departement, 
          data.nomEntreprise, data.numTelephone, data.urlEntreprise, data.adresse, data.couleur, data.police, 
          data.fbLink, data.xLink, data.instagramLink, data.linkedinLink, data.youtubeLink, data.snapchatLink, 
          data.tiktokLink, data.twitchLink, data.yelpLink, data.whatsappLink, data.signalLink, data.discordLink, data.skypeLink, 
          data.telegramLink, data.githubLink, data.gitlabLink,data.nom,  data.email, data.mdp);
    
        this.services.addparticuler(particulier).subscribe({
          next: (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: 'Particulier ajouté avec succès !',
              timer: 2000,
              showConfirmButton: false
            }).then(() => {
              this.router.navigate(['/listeParticulier']).then(() => {
                window.location.reload();
              });
            });
          },
          error: (err) => {
            console.error(err);
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: 'Une erreur s\'est produite lors de l\'ajout de l\'Particulier'
            });
          }
        });
      }

}
