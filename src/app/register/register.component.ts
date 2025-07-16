import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, User } from '../../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent implements OnInit {
  user: Customer = { userName: '', password: '', email: '', phoneNumber: '', yearsOfSeniority: 0,IsActive:true, role:0 };
  errorMsg = '';

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['userName']) {
        this.user.userName = params['userName'];
      }
    });
  }

  onRegister() {
    this.userService.register(this.user).subscribe({
      next: res => {
        this.router.navigate(['/recipes']); // מעבר לעמוד מתכונים
      },
      error: err => {
        if (err.status === 409) {
          this.errorMsg = 'המשתמש כבר קיים';
        } else {
          this.errorMsg = 'שגיאה בהרשמה';
        }
      }
    });
  }
}
