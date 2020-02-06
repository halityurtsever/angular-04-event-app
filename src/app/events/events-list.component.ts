import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.eventService.getEvents()
      .subscribe(e => this.events = e);
  }

  onThumbnailClick(eventName) {
    this.toastr.info(eventName);
  }
}
