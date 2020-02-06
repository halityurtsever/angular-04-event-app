import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventService,
  CreateEventComponent,
  EventThumbnailComponent,
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventsListResolverService
} from './events/index';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routes.component';
import { ToastrService } from './common/toastr.service';
import { NavbarComponent } from './nav/navbar.component';
import { PageNotFoundComponent } from './error-pages/page-not-found-404.component';
import { AuthenticationService } from './user/authentication.service';

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
    EventsListResolverService,
    AuthenticationService,
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
