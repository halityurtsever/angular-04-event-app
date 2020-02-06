import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-routes.component';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})

export class UserModule { }
