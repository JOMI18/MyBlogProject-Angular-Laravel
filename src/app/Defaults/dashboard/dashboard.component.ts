import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  usersName: any;
  user: any;
  usersDetails: any = [];
  imagepath: any = 'http://jomi.com/UserImage/';
  today = new Date();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.usersName = sessionStorage.getItem('loggedUser');
    this.user = sessionStorage.getItem('loggedUser');
    this.usersDetails = JSON.parse(this.user);
  }

  logout(event: any) {
    event.preventDefault();
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }
}
