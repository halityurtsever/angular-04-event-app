import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routes.component';
import { CreateEventComponent } from './events/create-event.component';
import { PageNotFoundComponent } from './error-pages/page-not-found-404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have unsaved changes. Do you really want to leave this page?');
  }
  return true;
}
