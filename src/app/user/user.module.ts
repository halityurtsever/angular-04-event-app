import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserProfileComponent } from './user-profile.component';
import { userRoutes } from './user-routes.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ]
})

export class UserModule { }
