import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turn } from '../model/turn.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

  constructor(private http: HttpClient, private userService: UserService) { }
  getEmptyTurn() {
    return this.http.get<Turn[]>(`https://localhost:7193/api/turns/empty`, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });
  }

  getTurnsByUser() {
    return this.http.get<Turn[]>(`https://localhost:7193/api/turns/user/${this.userService.selectedUser()?.id}`, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });
  }

  addTurn(turn: Turn) {
    console.log(turn);
    turn.sellerId=this.userService.selectedUser()?.id?.toString()||"";
    return this.http.post<Turn>(`https://localhost:7193/api/turns/`, turn, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });
  }

  selectTurn(id: string) {
    return this.http.put<Turn[]>(`https://localhost:7193/api/turns/selecct/${id}`, {
      customerId: this.userService.selectedUser()?.id
    }, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      },

    },
    );
  }
}