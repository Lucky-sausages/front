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

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User();
  }


  onSubmit(buttonType: any) {
    if (buttonType === 'Log') {
      this.router.navigate(['/posts']);
    }
    if (buttonType === 'Reg') {
      this.userService.save(this.user).subscribe(result => this.router.navigate(['/posts']));
    }
  }
}
