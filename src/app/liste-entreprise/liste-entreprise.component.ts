import { Component } from '@angular/core';
import { Entreprise } from '../Entity/Entreprise.Entity';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-entreprise',
  templateUrl: './liste-entreprise.component.html',
  styleUrls: ['./liste-entreprise.component.css']
})
export class ListeEntrepriseComponent {
  listeEntreprise: Entreprise[] = [];
  role: string;

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role") as string;
    this.chargerEntreprises();
  }

  chargerEntreprises() {
    this.service.getEntreprise().subscribe({
      next: (entreprises) => {
        this.listeEntreprise = entreprises;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des entreprises:', err);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible de charger la liste des entreprises'
        });
      }
    });
  }

  DeleteEntreprise(entreprise: Entreprise) {
    if (entreprise.id === null) {
      Swal.fire({
        icon: 'error',
        title: 'Action non autorisée',
        text: 'Impossible de supprimer cette entreprise'
      });
      return;
    }

    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: `Voulez-vous vraiment supprimer l'entreprise "${entreprise.nom}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.onDeleteEntreprise(entreprise.id).subscribe({
          next: () => {
            this.listeEntreprise = this.listeEntreprise.filter(e => e.id !== entreprise.id);
            Swal.fire({
              icon: 'success',
              title: 'Supprimé !',
              text: 'L\'entreprise a été supprimée avec succès.',
              timer: 2000,
              showConfirmButton: false
            });
          },
          error: (err) => {
            console.error('Erreur lors de la suppression:', err);
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: 'Une erreur est survenue lors de la suppression de l\'entreprise.'
            });
          }
        });
      }
    });
  }
}
