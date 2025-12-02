import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:AjouterAdminComponent},
  {path:'listeAdmin',component:ListeAdminComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
