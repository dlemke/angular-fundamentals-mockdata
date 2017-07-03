import { Injectable, EventEmitter } from '@angular/core';
import { EVENTS } from '../../assets/mockdata/mock.events';
import { Observable, Subject } from 'rxjs/RX';
import { IEventModel } from '../models/IEventModel';
import { ISessionModel } from '../models/ISessionModel';
import { Http, Response } from '@angular/http';

@Injectable()
export class EventService {
  eventsUrl: string = 'http://localhost:3000/events/';

  constructor(private http: Http) { }

  getMockEventData(): Observable<IEventModel[]> {
    let subject = new Subject<IEventModel[]>();
    setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 100);
    return subject;
  }
  
  getEvent(id: number): IEventModel {
    return EVENTS.find(event => event.id === id);
  }

  saveEvent(event) {
    event.id = 999;
    event.session = [];
    EVENTS.push(event);
  }

  updateEvent(event) {
    let index = EVENTS.findIndex(x => x.id = event.id);
    EVENTS[index] = event;
  }

  searchSessions(searchTerm: string) {
    var term = searchTerm.toLocaleLowerCase();
    var results: ISessionModel[] = [];

    EVENTS.forEach(event => {
      var matchingSessions = event.sessions.filter(session => session.name.toLocaleLowerCase().indexOf(term) > -1);
      matchingSessions = matchingSessions.map((session: any) => {
      session.eventId = event.id;
        return session;
      })
      results = results.concat(matchingSessions);
    })

    var emitter = new EventEmitter(true);
    setTimeout(() => { emitter.emit(results); }, 100);
    return emitter;
  }
}
