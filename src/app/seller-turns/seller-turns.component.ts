import { Component, OnInit } from '@angular/core';
import { TurnService } from '../../services/turn.service';
import { Turn } from '../../model/turn.model';
import { UserService } from '../../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AddTurnComponent } from '../add-turn/add-turn.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-seller-turns',
  templateUrl: './seller-turns.component.html',
  styleUrls: ['./seller-turns.component.css'],
  imports:[
    MatIconModule, 
    MatTableModule,   // חייב להיות מיובא כדי להשתמש ב mat-table
    MatButtonModule,
    RouterModule ,
    AddTurnComponent ,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SellerTurnsComponent implements OnInit {
  turns: Turn[] = [];
  displayedColumns: string[] = ['day', 'hour', 'customer', 'actions'];
  showAddTurnForm = false;
  currentSellerId!: number;  // <-- הוספה כאן

  constructor(
    private turnService: TurnService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const userId = this.userService.selectedUser()?.id;
    if (!userId) return;

    this.turnService.getSellerByUserId(userId).subscribe(seller => {
      this.currentSellerId = +seller.id!;  // <-- שמירת ה-sellerId
      this.turnService.getTurnsBySellerId(this.currentSellerId).subscribe(turns => {
        this.turns = turns;
        console.log('Seller ID:', this.currentSellerId);
      });
    });
  }

  toggleAddTurnForm() {
    this.showAddTurnForm = !this.showAddTurnForm;
  }

  onTurnAdded() {
    this.ngOnInit();
    this.showAddTurnForm = false;
  }

  markTurnAsDone(turnId: number) {
    this.turnService.deleteTurn(turnId).subscribe(() => {
      this.turns = this.turns.filter(t => t.id !== turnId);
    });
  }
}
