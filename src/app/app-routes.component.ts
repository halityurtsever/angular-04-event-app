import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { PageNotFoundComponent } from './error-pages/page-not-found-404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: PageNotFoundComponent },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: '**', redirectTo: 'events', pathMatch: 'full' }
];