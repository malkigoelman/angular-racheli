// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userName = '';
  password = '';
  errorMsg = '';

  constructor(private router: Router, private userService: UserService) { }



  onLogin() {
    this.userService.setLogin(this.userName, this.password).subscribe({
      next: (user) => {
        if (!user) {
          // משתמש לא קיים — נעבור ל-register ונעביר את השם
          this.router.navigate(['/register'], { queryParams: { userName: this.userName } });
        } else {
          this.errorMsg = '';
          localStorage.setItem("token", user.token);
          this.userService.selectedUser.set(user);
          this.router.navigate(["/my-turn"])
          alert('התחברת בהצלחה!');
        }
      },
      error: (err) => {
        this.router.navigate(['/register'], { queryParams: { userName: this.userName } });
        console.log("my err", err)
      }
    });
    // const user = this.users.find(u => u.userName === this.userName);


  }
}
