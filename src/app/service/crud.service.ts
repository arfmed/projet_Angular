import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entity/Admin.Entity';
import { Observable } from 'rxjs';


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

}
