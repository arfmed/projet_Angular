import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entity/Admin.Entity';
import { Observable } from 'rxjs';
import { Employe } from '../Entity/Employe.Entity';
import { Particulier } from '../Entity/Particulier.Entity';
import { Entreprise } from '../Entity/Entreprise.Entity';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl = "http://localhost:8081/api"
  loginUrl = "http://localhost:8081/api/admin/Login"

  constructor(private http: HttpClient) { }

  loginAdmin(admin: Admin) { return this.http.post<any>(this.loginUrl, admin); }
  addadmin(admin: Admin) {
    return this.http.post<any>(this.apiUrl + "/admin", admin)

  }
  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl + "/admin");
  }
  onDeleteAdmin(id: number) {
    return this.http.delete(`${this.apiUrl + "/admin/"}${id}`)
  }
  findAdminById(id: number): Observable<Admin> {
    const url = `${this.apiUrl + "/admin"}/${id}`;
    return this.http.get<Admin>(url)
  }
  updateAdmin(id: number, admin: Admin) {
    const url = `${this.apiUrl + "/admin"}/${id}`
    return this.http.put<any>(url, admin);
  }

  addentreprise(entreprise: Entreprise) {
    return this.http.post<any>(this.apiUrl + "/entreprise", entreprise)
  }

  getEntreprise(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiUrl + "/entreprise");
  }

  findEntrepriseById(id: number): Observable<Entreprise> {
    const url = `${this.apiUrl}/entreprise/${id}`;
    return this.http.get<Entreprise>(url);
  }

  updateEntreprise(id: number, entreprise: Entreprise) {
    const url = `${this.apiUrl}/entreprise/${id}`;
    return this.http.put<any>(url, entreprise);
  }

  onDeleteEntreprise(id: number) {
    return this.http.delete(`${this.apiUrl}/entreprise/${id}`);
  }


  addemploye(employe: Employe) {
    return this.http.post<any>(this.apiUrl + "/employe", employe)
  }

  getEmploye(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl + "/employe");
  }

  onDeleteEmploye(id: number) {
    return this.http.delete(`${this.apiUrl}/employe/${id}`);
  }

  addparticuler(particulier: Particulier) {
    return this.http.post<any>(this.apiUrl + "/particulier", particulier)

  }

  getParticulier(): Observable<Particulier[]> {
    return this.http.get<Particulier[]>(this.apiUrl + "/particulier");
  }

  findParticulierById(id: number): Observable<Particulier> {
    const url = `${this.apiUrl}/particulier/${id}`;
    return this.http.get<Particulier>(url);
  }

  updateParticulier(id: number, particulier: Particulier) {
    const url = `${this.apiUrl}/particulier/${id}`;
    return this.http.put<any>(url, particulier);
  }

  onDeleteParticulier(id: number) {
    return this.http.delete(`${this.apiUrl}/particulier/${id}`);
  }
}
