import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  onThumbnailClick(eventName) {
    this.toastr.info(eventName);
  }
}
