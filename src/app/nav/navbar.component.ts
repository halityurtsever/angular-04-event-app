import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  .nav.navbar-nav{font-size:15px;}
  @media (max-width:1200px) {#searchForm {display:none}}
  li > a.active { color: #D7983D; }
  `]
})
export class NavbarComponent {



}
