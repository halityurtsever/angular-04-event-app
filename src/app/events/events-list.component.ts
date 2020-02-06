import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEventModel } from './shared';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEventModel[];
  constructor(private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  onThumbnailClick(eventName) {
    this.toastr.info(eventName);
  }
}
