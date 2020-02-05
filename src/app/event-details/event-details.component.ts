import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding: 20px; }
  .event-image { height: 150px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
