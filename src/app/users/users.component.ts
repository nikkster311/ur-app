import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User }  from '../user';
import { USERS } from '../sample-user-data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;

  constructor() { }

  // assigns clicked user from template to component's selectedUSer
  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit(): void {
  }

}
