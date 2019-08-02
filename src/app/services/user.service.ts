import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pagina } from '../models/pagina';
import { Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _pagina: Subject<Pagina> = new BehaviorSubject(new Pagina);

  constructor(private http: HttpClient) { }

  get pagina() {
    return this._pagina.asObservable();
  }

  getUsers(page: number) {
    this.http.get<Pagina[]>(`${environment.api}/users?page=${page}`)
      .pipe(map(data => new Pagina().deserialize(data)))
      .subscribe(data => this._pagina.next(data));
  }

  getUser(id: number) {
    return this.http.get<any>(`${environment.api}/users/${id}`)
      .pipe(map(data => data ? (<User> data.data) : null))
      .toPromise();
  }

  createUser(args: any) {
    return this.http.post<any>(`${environment.api}/users`, args);
  }

  updateUser(args: any) {
    return this.http.put<any>(`${environment.api}/users/${args.id}`, args);
  }

}