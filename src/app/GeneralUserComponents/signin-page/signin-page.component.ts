import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogDbService } from 'src/app/Services/blog-db.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css'],
})
export class SigninPageComponent implements OnInit {
  submitted = false;

  registerUsers: any;

  constructor(
    private formDetails: FormBuilder,
    private services: BlogDbService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerUsers = this.formDetails.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
          ),
        ],
      ],
    });
  }

  get users() {
    return this.registerUsers.controls;
  }

  async submit() {
    this.submitted = true;
    console.log(this.registerUsers.value);

    return this.services.login(this.registerUsers.value).subscribe(
      (data) => {
        console.log(data);
        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data.details));
          localStorage.setItem('AdminloggedIn', 'true');
          this.router.navigate(['admin']);
          this.submitted = false;

          return;
        }
        if (data.role === 'user') {
          sessionStorage.setItem('loggedUser', JSON.stringify(data.details));
          localStorage.setItem('loggedIn', 'true');
          // sessionStorage.setItem('loggedUser', data.details.username);
          this.router.navigate(['usersD']);
          this.submitted = false;

          return;
        } else {
          alert('Invalid credentials, Sign up First');
          this.router.navigate(['signup']);
        }

        this.submitted = false;
      },

      (error) => {
        alert('check your credentials');
        console.log(error.message);
        this.submitted = false;
      }
    );
  }
}
