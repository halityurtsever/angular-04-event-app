import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/shared/event.service';

@Component({
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }

}
