import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Profile } from './all-files/profile/profile';


const routes: Routes = [
  { path: 'profile', component: Profile }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
