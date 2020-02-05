import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-event.component.html',
  styles: []
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  constructor(private router: Router) { }

  goBack(){
    this.router.navigate(['/events']);
  }

  ngOnInit() {
  }

}
