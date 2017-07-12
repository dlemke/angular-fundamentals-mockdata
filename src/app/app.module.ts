import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule, MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { SessionComponent } from './components/session/session.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { CollapsibleWellComponent } from './components/collapsible-well/collapsible-well.component';
import { ModalComponent } from './components/modal/modal.component';
import { UpvoteComponent } from './components/upvote/upvote.component';

import { AuthenticationService } from './providers/authentication.service';
import { EventService } from './providers/event.service';
import { RouteActivatorService } from './providers/route-activator.service';
import { ListResolverService } from './providers/list-resolver.service';
import { VoterService } from './providers/voter.service';
import { DurationPipe } from './pipes/duration.pipe';
import { routing } from './app.routing';
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