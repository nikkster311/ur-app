import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User }  from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  // assigns clicked user from template to component's selectedUSer
  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
}
