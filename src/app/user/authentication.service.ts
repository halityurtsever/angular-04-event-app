import { Injectable } from '@angular/core';
import { IUserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser: IUserModel;

  login(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'Halit',
      lastName: 'Yurtsever'
    };
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
