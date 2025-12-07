import { Component } from '@angular/core';
import { Particulier } from '../Entity/Particulier.Entity';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../service/crud.service';

declare var $: any;

@Component({
  selector: 'app-liste-particulier',
  templateUrl: './liste-particulier.component.html',
  styleUrls: ['./liste-particulier.component.css']
})
export class ListeParticulierComponent {
  listeParticulier: Particulier[] = [];
  role: string;

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role") as string;
    this.chargerParticuliers();
  }

  chargerParticuliers() {
    this.service.getParticulier().subscribe({
      next: (Particuliers) => {
        this.listeParticulier = Particuliers;
        setTimeout(() => {
          if ($.fn.DataTable.isDataTable('#datatable')) {
            $('#datatable').DataTable().destroy();
          }
          $('#datatable').DataTable({
            scrollX: true,
            scrollCollapse: true,
            responsive: false,
            autoWidth: false,
            info: false,
            lengthChange: false
          });
          $(".dataTables_length select").addClass("form-select form-select-sm");
        }, 100);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des particuliers:', err);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible de charger la liste des particuliers'
        });
      }
    });
  }

  DeletePariculier(particulier: Particulier) {
    if (particulier.id === null) {
      Swal.fire({
        icon: 'error',
        title: 'Action non autorisée',
        text: 'Impossible de supprimer un super administrateur'
      });
      return;
    }

    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: `Voulez-vous vraiment supprimer l'administrateur "${particulier.nom} ${particulier.email}" `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.onDeleteParticulier(particulier.id).subscribe({
          next: () => {
            this.listeParticulier = this.listeParticulier.filter(a => a.id !== particulier.id);
            Swal.fire({
              icon: 'success',
              title: 'Supprimé !',
              text: 'L\'administrateur a été supprimé avec succès.',
              timer: 2000,
              showConfirmButton: false
            });
          },
          error: (err) => {
            console.error('Erreur lors de la suppression:', err);
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: 'Une erreur est survenue lors de la suppression de l\'administrateur.'
            });
          }
        });
      }
    });
  }

}
