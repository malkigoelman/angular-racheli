import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TurnService } from '../../services/turn.service';

@Component({
  selector: 'app-add-turn',
  imports: [ReactiveFormsModule],
  templateUrl: './add-turn.component.html',
  styleUrl: './add-turn.component.css'
})
export class AddTurnComponent {
  turnForm: FormGroup;

  constructor(private fb: FormBuilder, private turnService: TurnService) {
    this.turnForm = this.fb.group({
      day: ['', Validators.required],
      hour: ['', Validators.required],
      // sellerId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.turnForm.valid) {
      this.turnService.addTurn(this.turnForm.value).subscribe({
        next: () => {
          alert('התור נוסף בהצלחה');
          this.turnForm.reset();
        },
        error: (err) => console.error(err)
      });
    }
  }
}
