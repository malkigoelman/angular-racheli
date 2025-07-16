import { Injectable, signal } from '@angular/core';
import { User, UserToken } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser = signal<User | null>(null)
  constructor(private http: HttpClient) { }


  setLogin(username: string, password: string): Observable<UserToken> {
    return this.http.post<UserToken>('https://localhost:7193/api/auth', {
      username,
      password
    });

  }

  register(user: User): Observable<User> {
    return this.http.post<User>('https://localhost:7193/api/customers', user);

  }
}
