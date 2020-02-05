import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    // !! operator converts object to boolean. if null "false" else "true"
    const isEventValid = !!this.eventService.getEvent(+route.paramMap.get('id'));

    if (!isEventValid) {
      this.router.navigate(['/404']);
    }

    return isEventValid;
  }
}
