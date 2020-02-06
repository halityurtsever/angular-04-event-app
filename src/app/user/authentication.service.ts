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

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
