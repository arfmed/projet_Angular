import { Component, OnInit } from '@angular/core';
import { Employe } from '../Entity/Employe.Entity';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../service/crud.service';

@Component({
    selector: 'app-liste-employe',
    templateUrl: './liste-employe.component.html',
    styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent implements OnInit {
    listeEmploye: Employe[] = [];
    role: string;

    constructor(private service: CrudService, private router: Router) { }

    ngOnInit(): void {
        this.role = localStorage.getItem("role") as string;
        this.chargerEmployes();
    }

    chargerEmployes() {
        this.service.getEmploye().subscribe({
            next: (employes) => {
                this.listeEmploye = employes;
            },
            error: (err) => {
                console.error('Erreur lors du chargement des employés:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Impossible de charger la liste des employés'
                });
            }
        });
    }

    DeleteEmploye(employe: Employe) {
        if (employe.id === null) {
            Swal.fire({
                icon: 'error',
                title: 'Action non autorisée',
                text: 'Impossible de supprimer cet employé'
            });
            return;
        }

        Swal.fire({
            title: 'Êtes-vous sûr ?',
            text: `Voulez-vous vraiment supprimer l'employé "${employe.nom}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Oui, supprimer',
            cancelButtonText: 'Annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                this.service.onDeleteEmploye(employe.id).subscribe({
                    next: () => {
                        this.listeEmploye = this.listeEmploye.filter(e => e.id !== employe.id);
                        Swal.fire({
                            icon: 'success',
                            title: 'Supprimé !',
                            text: 'L\'employé a été supprimé avec succès.',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    },
                    error: (err) => {
                        console.error('Erreur lors de la suppression:', err);
                        Swal.fire({
                            icon: 'error',
                            title: 'Erreur',
                            text: 'Une erreur est survenue lors de la suppression de l\'employé.'
                        });
                    }
                });
            }
        });
    }
}
