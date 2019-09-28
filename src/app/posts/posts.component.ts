import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {Post} from '../model/post';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-bubble',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private router: Router, private userService: UserService, private postService: PostService) {
    this.login = localStorage.getItem('name');
  }

  login: string;

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    /*
    this.postService.findAll().subscribe(data => {
      this.posts = data;
    });
     */
    this.posts = [
      {
        text: 'lalala',
        person: 'name',
        date: '1.1.1',
        media: ['https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1',
          'https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1',
          'https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1',
          'https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1',
          'https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1',
          'https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1',
          'https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1',
          'https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1',
          'https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1',
          'https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1']
      },
      {
        text: 'lalala',
        person: 'name',
        date: '1.1.1',
        media: ['https://sun9-57.userapi.com/c850216/v850216679/1ccb98/tPeofQX77BQ.jpg?ava=1']
      }
    ];
  }
}
