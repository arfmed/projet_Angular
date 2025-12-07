import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Particulier } from '../Entity/Particulier.Entity';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifier-particulier',
  templateUrl: './modifier-particulier.component.html',
  styleUrls: ['./modifier-particulier.component.css']
})
export class ModifierParticulierComponent {

  id: number;
  particulierForm: FormGroup;

  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private rout: ActivatedRoute
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      photoDeProfil: new FormControl(''),
      logoEntreprise: new FormControl(''),
      photoCouverture: new FormControl(''),
      titreEmploi: new FormControl(''),
      departement: new FormControl(''),
      nomEntreprise: new FormControl(''),
      numTelephone: new FormControl(''),
      urlEntreprise: new FormControl(''),
      adresse: new FormControl(''),
      couleur: new FormControl(''),
      police: new FormControl(''),
      fbLink: new FormControl(''),
      xLink: new FormControl(''),
      instagramLink: new FormControl(''),
      linkedinLink: new FormControl(''),
      youtubeLink: new FormControl(''),
      snapchatLink: new FormControl(''),
      tiktokLink: new FormControl(''),
      twitchLink: new FormControl(''),
      yelpLink: new FormControl(''),
      whatsappLink: new FormControl(''),
      signalLink: new FormControl(''),
      discordLink: new FormControl(''),
      skypeLink: new FormControl(''),
      telegramLink: new FormControl(''),
      githubLink: new FormControl(''),
      gitlabLink: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      mdp: new FormControl('', [Validators.required, Validators.minLength(3)])
    };
    this.particulierForm = this.fb.group(formControls);
  }

  // Getters pour les contrôles du formulaire
  get nom() { return this.particulierForm.get('nom'); }
  get email() { return this.particulierForm.get('email'); }
  get mdp() { return this.particulierForm.get('mdp'); }

  ngOnInit(): void {
    let idEvent = this.rout.snapshot.params['id'];
    this.id = idEvent;
    this.services.findParticulierById(idEvent).subscribe({
      next: (result) => {
        let particulier = result;
        console.log(particulier);
        this.particulierForm.patchValue({
          nom: particulier.nom,
          photoDeProfil: particulier.photoDeProfil,
          logoEntreprise: particulier.logoEntreprise,
          photoCouverture: particulier.photoCouverture,
          titreEmploi: particulier.titreEmploi,
          departement: particulier.departement,
          nomEntreprise: particulier.nomEntreprise,
          numTelephone: particulier.numTelephone,
          urlEntreprise: particulier.urlEntreprise,
          adresse: particulier.adresse,
          couleur: particulier.couleur,
          police: particulier.police,
          fbLink: particulier.fbLink,
          xLink: particulier.xLink,
          instagramLink: particulier.instagramLink,
          linkedinLink: particulier.linkedinLink,
          youtubeLink: particulier.youtubeLink,
          snapchatLink: particulier.snapchatLink,
          tiktokLink: particulier.tiktokLink,
          twitchLink: particulier.twitchLink,
          yelpLink: particulier.yelpLink,
          whatsappLink: particulier.whatsappLink,
          signalLink: particulier.signalLink,
          discordLink: particulier.discordLink,
          skypeLink: particulier.skypeLink,
          telegramLink: particulier.telegramLink,
          githubLink: particulier.githubLink,
          gitlabLink: particulier.gitlabLink,
          email: particulier.email,
          mdp: particulier.mdp
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement du particulier:', err);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible de charger les informations du particulier'
        });
      }
    });
  }

  updateParticulier() {
    if (this.particulierForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Champs invalides',
        text: 'Veuillez remplir tous les champs obligatoires correctement',
        showConfirmButton: true
      });
      return;
    }

    let data = this.particulierForm.value;
    let particulier = new Particulier(
      this.id,
      data.photoDeProfil,
      data.logoEntreprise,
      data.photoCouverture,
      data.titreEmploi,
      data.departement,
      data.nomEntreprise,
      data.numTelephone,
      data.urlEntreprise,
      data.adresse,
      data.couleur,
      data.police,
      data.fbLink,
      data.xLink,
      data.instagramLink,
      data.linkedinLink,
      data.youtubeLink,
      data.snapchatLink,
      data.tiktokLink,
      data.twitchLink,
      data.yelpLink,
      data.whatsappLink,
      data.signalLink,
      data.discordLink,
      data.skypeLink,
      data.telegramLink,
      data.githubLink,
      data.gitlabLink,
      data.nom,
      data.email,
      data.mdp
    );

    this.services.updateParticulier(this.id, particulier).subscribe({
      next: (res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Particulier modifié avec succès !',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/listeParticulier']).then(() => {
            window.location.reload();
          });
        });
      },
      error: (err) => {
        console.error('Erreur lors de la modification:', err);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de la modification du particulier'
        });
      }
    });
  }
}
