import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turn } from '../model/turn.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getTurnsByUser() {
    return this.http.get<Turn[]>(https://localhost:7193/api/turns/user/${this.userService.selectedUser()?.id}, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });
  }
}