import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entity/Admin.Entity';
import { Observable } from 'rxjs';
import { Employe } from '../Entity/Employe.Entity';
import { Particulier } from '../Entity/Particulier.Entity';


@Injectable({
  providedIn: 'root' 
})
export class CrudService {
  apiUrl = "http://localhost:8081/api"

  constructor(private http: HttpClient) { }
  addadmin(admin:Admin) {
    return this.http.post<any>(this.apiUrl +"/admin",admin)

  }
  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl +"/admin");
  }
  onDeleteAdmin(id:number){
    return this.http.delete(`${this.apiUrl+"/admin/"}${id}`)
  }
  findAdminById(id : number): Observable<Admin> {
    const url = `${this.apiUrl + "/admin"}/${id}`;
    return this.http.get<Admin>(url)
  }
updateAdmin(id:number,admin: Admin) {
    const url = `${this.apiUrl+"/admin"}/${id}`
    return this.http.put<any>(url,admin);
  }

  addentreprise(admin:Admin) {
    return this.http.post<any>(this.apiUrl +"/entreprise",admin)

  }
  getEntreprise(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl +"/entreprise");
  }
 
  addemploye(employe:Employe) {
    return this.http.post<any>(this.apiUrl +"/employe",employe)
  } 

  addparticuler(particulier:Particulier) {
    return this.http.post<any>(this.apiUrl +"/particulier",particulier)

  }

  getParticulier(): Observable<Particulier[]>{
    return this.http.get<Particulier[]>(this.apiUrl +"/particulier");
  }
   


    
    



  }

  


