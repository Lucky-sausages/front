import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../model/post';
import {UserService} from './user.service';

@Injectable()
export class PostService {
  private postsUrl: string;

  constructor(private http: HttpClient, private userService: UserService) {
    this.postsUrl = 'http://localhost:8080/api/posts'; /*Здесь будет ссылка на запрос*/
  }

  public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userService.getToken()
      }
    });
  }
}
