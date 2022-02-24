import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './sample-user-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }

  constructor() { }

}

