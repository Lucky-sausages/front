import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-reg-and-log',
  templateUrl: './reg-and-log.component.html',
  styleUrls: ['./reg-and-log.component.css']
})
export class RegAndLogComponent {

  user: User;
  buttonType: String;
  message: String;
  error: String;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User();
    this.error = '';
    this.message = '';
  }


  onSubmit(buttonType: any) {
    if (buttonType === 'Log') {
      this.userService.login(this.user.login, this.user.password).subscribe(
        (res: any ) => {localStorage.setItem('token', res.token);
          localStorage.setItem('name', this.user.login);
          this.message = 'Login done'; },
        error => this.error = error.error.message);
    }
    if (buttonType === 'Reg') {
      this.userService.save(this.user).subscribe(result => { this.error = ''; this.message = 'User added'; },
        error => this.error = error.error.message);
    }
  }
}
