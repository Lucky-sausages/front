import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { RegAndLogComponent } from './reg-and-log/reg-and-log.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {PeopleService} from './service/people.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AddLinkComponent,
    RegAndLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
