import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class RouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/error']);
    }

    return eventExists;
  }
}
