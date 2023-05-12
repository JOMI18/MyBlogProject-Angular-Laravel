import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIsService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {
  usersName: any;
  user: any;
  savedUser: any = [];
  noshow: any = false;
  usersDetails: any = [];
  imagepath: any = 'http://jomi.com/UserImage/';
  today = new Date();

  constructor(private allusers: APIsService, private router: Router) {}

  ngOnInit(): void {
    // this.usersName = sessionStorage.getItem('loggedUser');
    this.user = sessionStorage.getItem('admin');
    this.usersDetails = JSON.parse(this.user);
  }

  displayusers() {
    this.noshow = true;
    this.allusers.fetchallusers().subscribe(
      (data: any) => {
        console.log(data);

        this.savedUser = data.allusers;
        console.log(this.savedUser);
      },
      (error: any) => {
        console.log(error);
        alert('failed to reach endpoint');
      }
    );
  }

  logout(event: any) {
    event.preventDefault();
    localStorage.removeItem('AdminloggedIn');
    this.router.navigate(['/']);
  }
  close() {
    this.noshow = false;
  }
}
