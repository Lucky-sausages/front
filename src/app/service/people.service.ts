import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {People} from '../model/people';
import {UserService} from './user.service';

@Injectable()
export class PeopleService {

  private peopleUrl: string;

  constructor(private http: HttpClient, private userService: UserService) {
    this.peopleUrl = 'http://localhost:8080/api/people';
  }
  public save(people: People) {
    return this.http.post<People>(this.peopleUrl, people, {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userService.getToken()
      }});
  }
}
