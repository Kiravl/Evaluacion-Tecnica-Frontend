import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pagina } from '../models/pagina';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(page: number) {
    return this.http.get<Pagina>(`${environment.api}/users?page=${page}`);
  }

  getUser(id: number) {
    return this.http.get<Pagina>(`${environment.api}/users/${id}`);
  }

  createUser(args: any) {
    return this.http.post<any>(`${environment.api}/users`, args);
  }

  updateUser(args: any) {
    return this.http.put<any>(`${environment.api}/users/${args.id}`, args);
  }

}