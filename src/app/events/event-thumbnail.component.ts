import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles:[`
  .thumbnail{min-height:210px;}
  `]
})

export class EventThumbnailComponent {

  @Input() eventInput: any;

}
