import { Injectable } from '@angular/core';
import { ISessionModel } from '../models/ISessionModel';

@Injectable()
export class VoterService {

  constructor() { }

  deleteVote(session: ISessionModel, userName: string): void {
    session.voters = session.voters.filter(voter => voter !== userName);
  }

  addVote(session: ISessionModel, userName: string): void {
    session.voters.push(userName);
  }

  userHasVoted(session: ISessionModel, userName: string): boolean {
    // same as .contains
    // could also do "return session.voters.indexOf(userName) > -1;"
    return session.voters.some(voter => voter === userName);
  }
}
