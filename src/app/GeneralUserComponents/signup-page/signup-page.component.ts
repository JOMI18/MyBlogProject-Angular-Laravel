import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogDbService } from 'src/app/Services/blog-db.service';
// import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  submitted = false;
  files: any;
  registerUsers: any;

  constructor(
    private formDetails: FormBuilder,
    private service: BlogDbService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerUsers = this.formDetails.group(
      {
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        username: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        files: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,

            Validators.pattern(
              "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@'$.!%*?&]{8,})$"
            ),
          ],
        ],
        confirmpassword: [
          '',
          [
            Validators.required,

            Validators.pattern(
              "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@'$.!%*?&]{8,})$"
            ),
          ],
        ],
        phonenumber: [
          '',
          [
            Validators.required,

            Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
          ],
        ],
      },
      {
        validators: this.MustMatch('password', 'confirmpassword'),
      }
    );
  }

  get users() {
    return this.registerUsers.controls;
  }

  MustMatch(password: any, confirmpassword: any) {
    return (registerUsers: FormGroup) => {
      const pswrd = registerUsers.controls[password];
      const conpswrd = registerUsers.controls[confirmpassword];

      if (conpswrd.errors && !conpswrd.errors['MustMatch']) {
        return;
      }
      if (pswrd.value !== conpswrd.value) {
        conpswrd.setErrors({ MustMatch: true });
      } else {
        conpswrd.setErrors(null);
      }
    };
  }

  uploadFile(e: any) {
    this.files = e.target.files[0];
    console.log(this.files);
  }

  async submit() {
    this.submitted = true;
    console.log(this.registerUsers.value);

    let forms = new FormData();
    forms.append('image', this.files, this.files.name);
    forms.append('firstname', this.registerUsers.get('firstname').value);
    forms.append('lastname', this.registerUsers.get('lastname').value);
    forms.append('username', this.registerUsers.get('username').value);
    forms.append('email', this.registerUsers.get('email').value);
    forms.append('dob', this.registerUsers.get('dob').value);
    forms.append('phonenumber', this.registerUsers.get('phonenumber').value);
    forms.append('password', this.registerUsers.get('password').value);

    return this.service.signup(forms).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['signin']);

        this.submitted = false;
      },
      (error) => {
        alert('failed to register, check credentials');

        console.log(error.message);
        this.router.navigate(['signup']);

        this.submitted = false;
      }
    );
  }
}
