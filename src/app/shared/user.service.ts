import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    username: '',
    password: ''
};

private username: string;

noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) {}

  setData(username){
    this.username = username;
  }
  getData(){
    return this.username;
  }

  postUser(user: User){
    return this.http.post( environment.apiBaseUrl + '/register', user, this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }
  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
    console.log('This Works');
  }

  createNote(note){
    console.log(note);
    return this.http.post(environment.apiBaseUrl + '/postNote', note, this.noAuthHeader);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }



  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    const token = this.getToken();
    console.log(token);
    if (token) {
      const userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else {
      return null;
    }

  }


  isLoggedIn() {
    const userPayload = this.getUserPayload();
    console.log(userPayload);
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
      console.log('Im logged in');
    }

    else {
      return false;
      console.log ('Im not logged in');
    }

  }
}
