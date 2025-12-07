import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Entreprise } from '../Entity/Entreprise.Entity';
import { CrudService } from '../service/crud.service';

@Component({
    selector: 'app-modifier-entreprise',
    templateUrl: './modifier-entreprise.component.html',
    styleUrls: ['./modifier-entreprise.component.css']
})
export class ModifierEntrepriseComponent {

    id: number;
    entrepriseForm: FormGroup;

    constructor(
        private services: CrudService,
        private router: Router,
        private fb: FormBuilder,
        private rout: ActivatedRoute
    ) {
        let formControls = {
            nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            mdp: new FormControl('', [Validators.required, Validators.minLength(3)]),
            logoEntreprise: new FormControl(''),
            photoCouverture: new FormControl(''),
            urlEntreprise: new FormControl(''),
            adresse: new FormControl('')
        };
        this.entrepriseForm = this.fb.group(formControls);
    }

    // Getters pour les contrôles du formulaire
    get nom() { return this.entrepriseForm.get('nom'); }
    get email() { return this.entrepriseForm.get('email'); }
    get mdp() { return this.entrepriseForm.get('mdp'); }

    ngOnInit(): void {
        let idEvent = this.rout.snapshot.params['id'];
        this.id = idEvent;
        this.services.findEntrepriseById(idEvent).subscribe({
            next: (result) => {
                let entreprise = result;
                console.log(entreprise);
                this.entrepriseForm.patchValue({
                    nom: entreprise.nom,
                    email: entreprise.email,
                    mdp: entreprise.mdp,
                    logoEntreprise: entreprise.logoEntreprise,
                    photoCouverture: entreprise.photoCouverture,
                    urlEntreprise: entreprise.urlEntreprise,
                    adresse: entreprise.adresse
                });
            },
            error: (err) => {
                console.error('Erreur lors du chargement de l\'entreprise:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Impossible de charger les informations de l\'entreprise'
                });
            }
        });
    }

    updateEntreprise() {
        if (this.entrepriseForm.invalid) {
            Swal.fire({
                icon: 'error',
                title: 'Champs invalides',
                text: 'Veuillez remplir tous les champs obligatoires correctement',
                showConfirmButton: true
            });
            return;
        }

        let data = this.entrepriseForm.value;
        let entreprise = new Entreprise(
            this.id,
            data.nom,
            data.email,
            data.mdp,
            data.logoEntreprise,
            data.photoCouverture,
            data.urlEntreprise,
            data.adresse
        );

        this.services.updateEntreprise(this.id, entreprise).subscribe({
            next: (res) => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Succès',
                    text: 'Entreprise modifiée avec succès !',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    this.router.navigate(['/listeEntreprise']).then(() => {
                        window.location.reload();
                    });
                });
            },
            error: (err) => {
                console.error('Erreur lors de la modification:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Une erreur est survenue lors de la modification de l\'entreprise'
                });
            }
        });
    }
}
