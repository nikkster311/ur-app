import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User }  from '../user';
import { UserService } from '../user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-json-users',
  templateUrl: './json-users.component.html',
  styleUrls: ['./json-users.component.css']
})
export class JsonUsersComponent implements OnInit {

  // main http endpoint we will be using
  readonly ROOT_URL = 'http://jsonplaceholder.typicode.com'

  jsonUsers: any;

  getIdForm = this.formBuilder.group({
    id: ''
  });

  users: User[] = [];

  constructor(private http:HttpClient,
    private formBuilder:FormBuilder) { }

  // assigns clicked user from template to component's selectedUSer
  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit(): void {
  }
  
  // search for user using ID from onSubmit (below)
  getJsonUser(id) { 
    let params = new HttpParams().set('id', id)
    this.jsonUsers = this.http.get<User[]>(this.ROOT_URL + '/users', { params })
  }

  // get ID from user input field
  searchId;  
  onSubmit(): void {
    this.searchId = this.getIdForm.value.id
    this.getJsonUser(this.searchId);
  }

  // display all users from the JSON RestAPI
  getAllJsonUsers() {
    this.jsonUsers = this.http.get<User[]>(this.ROOT_URL + '/users')
  }
}
