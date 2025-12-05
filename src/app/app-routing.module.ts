import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { LoginComponent } from './login/login.component';
import { ListeEntrepriseComponent } from './liste-entreprise/liste-entreprise.component';
import { AjouterEntrepriseComponent } from './ajouter-entreprise/ajouter-entreprise.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import { AjouterParticulierComponent } from './ajouter-particulier/ajouter-particulier.component';


const routes: Routes = [
  {path:'add',component:AjouterAdminComponent},
  {path:'listeAdmin',component:ListeAdminComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'listeEntreprise',component:ListeEntrepriseComponent},
  {path:'addEntreprise',component:AjouterEntrepriseComponent},
  {path:'addEmploye',component:AjouterEmployeComponent},
  {path:'listeEmlpoye',component:ListeEmployeComponent},
  {path: 'addParticulier',component:AjouterParticulierComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
