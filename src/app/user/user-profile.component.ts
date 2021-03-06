import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user-profile.component.html',
  styles: []
})

export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
