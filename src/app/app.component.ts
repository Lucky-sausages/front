import { Component } from '@angular/core';
import {UserService} from './service/user.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
