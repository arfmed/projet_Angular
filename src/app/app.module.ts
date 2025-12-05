import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjouterEntrepriseComponent } from './ajouter-entreprise/ajouter-entreprise.component';
import { ListeEntrepriseComponent } from './liste-entreprise/liste-entreprise.component';
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { AjouterParticulierComponent } from './ajouter-particulier/ajouter-particulier.component';
import { ListeParticulierComponent } from './liste-particulier/liste-particulier.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    ListeAdminComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AjouterEntrepriseComponent,
    ListeEntrepriseComponent,
    AjouterEmployeComponent,
    ListeEmployeComponent,
    AjouterParticulierComponent,
    ListeParticulierComponent,
    ModifierAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
