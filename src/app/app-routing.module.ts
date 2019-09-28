import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { RegAndLogComponent } from './reg-and-log/reg-and-log.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'addlink', component: AddLinkComponent},
  { path: 'reg', component: RegAndLogComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
