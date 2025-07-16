import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TurnService } from '../../services/turn.service';
import { Turn } from '../../model/turn.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-select-turn',
  imports: [CommonModule],
  templateUrl: './select-turn.component.html',
  styleUrl: './select-turn.component.css'
})
export class SelectTurnComponent {
  turnService: TurnService = inject(TurnService)
  turns: Turn[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("my-turn login")

    this.turnService.getEmptyTurn().subscribe({
      next: data => this.turns = data,
      error: err => console.error(err)
    });
  }

  selectTurn(id: string) {
    this.turnService.selectTurn(id)
      .subscribe(x => console.log(x));
  }
}
