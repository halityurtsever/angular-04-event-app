import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {

  eventData1 = {
    id: 1,
    name: 'Angular Connect',
    date: '12 Dec, 2020',
    time: '12:12 AM',
    price: 599.99,
    imageUrl: '/assets/images/angular.svg',
    location: {
      address: '90419',
      city: 'Nürnberg',
      country: 'Germany'
    }
  };

}
