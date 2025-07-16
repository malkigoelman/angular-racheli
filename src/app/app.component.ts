// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'my-car-app';
// }
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[RouterOutlet,CommonModule,RouterLink],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public user:UserService) {
    
  }

  ngOnInit(): void {
    console.log(this.user.selectedUser())

    // const user = localStorage.getItem('currentUser');
    // if (user) {
    //   this.currentUser = JSON.parse(user);
    // }
  }


  logout() {
    sessionStorage.removeItem('currentUser');
    // window.location.reload(); // רענון הדף כדי לעדכן תצוגה
  }
}