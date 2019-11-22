import { map } from 'rxjs/operators';
import { User } from '../user/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  baseurl = 'http://localhost:8080/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseurl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.baseurl + '/' + id)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseurl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseurl + '/' + user.id, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.baseurl + '/' + id);
  }
}
