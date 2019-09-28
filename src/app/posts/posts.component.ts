import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bubble',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
    this.login = localStorage.getItem('name');
  }
  login: string;
  ngOnInit() {
  }


}
