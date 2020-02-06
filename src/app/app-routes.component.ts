import { Routes } from '@angular/router';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventsListResolverService
} from './events/index';

import { PageNotFoundComponent } from './error-pages/page-not-found-404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: PageNotFoundComponent },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: '**', redirectTo: 'events', pathMatch: 'full' }
];
