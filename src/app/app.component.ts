import { Component } from '@angular/core';
import {UserService} from './service/user.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app';
  login: string;
  constructor(private router: Router, private userService: UserService) {
    this.title = 'Portal demo';
    this.login = localStorage.getItem('name');
  }
  public get isLogIn(): boolean {
    this.login = localStorage.getItem('name');
    return this.userService.logIn;
  }
  public logout() {
    this.userService.logout();
      this.router.navigate(['/reg']);
  }
  public add() {
    this.router.navigate(['/addlink']);
  }
  public posts() {
    this.router.navigate(['/posts']);
  }
}
