import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TurnService } from '../../services/turn.service';
import { Turn } from '../../model/turn.model';
import { UserService } from '../../services/user.service';
import { AddTurnComponent } from '../add-turn/add-turn.component';


@Component({
  selector: 'app-my-turn',
  imports: [RouterLink, CommonModule, AddTurnComponent],
  templateUrl: './my-turn.component.html',
  styleUrl: './my-turn.component.css'
})

export class MyTurnComponent implements OnInit {
  turnService: TurnService = inject(TurnService)
  turns: Turn[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log("my-turn login")
    const user = JSON.parse(sessionStorage.getItem('user')!);

    this.turnService.getTurnsByUser().subscribe({
      next: data => this.turns = data,
      error: err => console.error(err)
    });
  }
}
