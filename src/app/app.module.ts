import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule, MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { ThumbnailComponent } from './pages/thumbnail/thumbnail.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreateComponent } from './pages/create/create.component';
import { ErrorComponent } from './pages/error/error.component';
import { SessionComponent } from './pages/session/session.component';
import { SessionListComponent } from './pages/session-list/session-list.component';
import { CollapsibleWellComponent } from './pages/collapsible-well/collapsible-well.component';
import { ModalComponent } from './pages/modal/modal.component';

import { AuthenticationService } from './providers/authentication.service';
import { EventService } from './providers/event.service';
import { RouteActivatorService } from './providers/route-activator.service';
import { ListResolverService } from './providers/list-resolver.service';
import { VoterService } from './providers/voter.service';
import { DurationPipe } from './formatting/duration.pipe';
import { routing } from './app.routing';
import { IToastrModel } from './models/IToastrModel';
import { UpvoteComponent } from './pages/upvote/upvote.component';
import { ValidateLocationDirective } from './directives/validate-location.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ThumbnailComponent,
    NavbarComponent,
    DetailsComponent,
    CreateComponent,
    ErrorComponent,
    SessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    ModalComponent,
    UpvoteComponent,
    ValidateLocationDirective
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdDialogModule,
    routing
  ],
  providers: [
    EventService,
    RouteActivatorService,
    ListResolverService,
    AuthenticationService,
    VoterService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}