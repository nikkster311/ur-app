import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component'; //NgModule

import { HttpClientModule } from '@angular/common/http';
import { JsonUsersComponent } from './json-users/json-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    JsonUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
