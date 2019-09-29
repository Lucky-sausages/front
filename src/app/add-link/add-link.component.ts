import { Component, OnInit } from '@angular/core';
import {People} from '../model/people';
import {PeopleService} from '../service/people.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {

  people: People;
  message: String;
  error: String;
  constructor(private peopleService: PeopleService) {
    this.error = '';
    this.people = new People();
    this.message = '';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.peopleService.save(this.people).subscribe(result => { this.error = ''; this.message = 'Post added'; },
      error => this.error = error.error.message);
  }
}
