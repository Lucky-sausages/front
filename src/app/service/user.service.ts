import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../model/user';

@Injectable()
export class UserService {
   private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/users';
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  public login(login: string, password: string) {
    return this.http.get<User>(this.usersUrl + '/auth', {
      params: new HttpParams().set('login', login).set('password', password)
    });
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }
}
