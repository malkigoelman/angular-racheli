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
  currentDateTime: string = '';
  constructor(public user:UserService) {
    
  }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

  
  }

  updateTime() {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false
    };
    this.currentDateTime = now.toLocaleString('he-IL', options);
  }
  logout() {
    sessionStorage.removeItem('currentUser');
    // window.location.reload(); // רענון הדף כדי לעדכן תצוגה
  }
}