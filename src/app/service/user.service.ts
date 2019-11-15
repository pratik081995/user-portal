import { User } from '../user/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  baseurl = 'http://localhost:8080/users';

  getUsers() {
    return this.http.get<User[]>(this.baseurl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseurl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseurl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseurl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseurl + '/' + id);
  }
}
