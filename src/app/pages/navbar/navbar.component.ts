import { Component } from '@angular/core';
import { AuthenticationService } from '../../providers/authentication.service';
import { EventService } from '../../providers/event.service';
import { ISessionModel } from '../../models/ISessionModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = '';
  foundSessions: ISessionModel[];

  constructor(private authService: AuthenticationService, private eventService: EventService) { }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => { this.foundSessions = sessions; })
  }
}
