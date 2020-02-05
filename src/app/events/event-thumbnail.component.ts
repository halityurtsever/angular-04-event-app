import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .thumbnail { min-height:210px; }
  .green { color:#ABEF00; }
  .red { color:#FF0400; }
  .yellow { color:#F7F052; }
  `]
})

export class EventThumbnailComponent {

  @Input() eventInput: any;

  getTimeClass() {
    if (this.eventInput.time === '8:00 am') {
      return ['green'];
    } else if (this.eventInput.time === '10:00 am') {
      return ['red'];
    } else {
      return ['yellow'];
    }
  }
}
