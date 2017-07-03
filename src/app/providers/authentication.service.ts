import { Injectable } from '@angular/core';
import { IUserModel } from '../models/IUserModel';

@Injectable()
export class AuthenticationService {
  currentUser: IUserModel;

  constructor() { }

  authenticateUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Doe'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
