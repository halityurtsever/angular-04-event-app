import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
  em { float: right; color: #FF0400;}
  `]
})

export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(private authService: AuthenticationService, private router: Router) { }

  login(formValue) {
    this.authService.login(formValue.userName, formValue.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

  ngOnInit() {
  }

}
