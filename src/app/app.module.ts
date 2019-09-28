import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { FilterComponent } from './filter/filter.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { RegAndLogComponent } from './reg-and-log/reg-and-log.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FilterComponent,
    AddLinkComponent,
    RegAndLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
