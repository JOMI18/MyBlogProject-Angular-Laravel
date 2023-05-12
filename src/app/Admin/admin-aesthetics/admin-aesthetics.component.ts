import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminPostsService } from 'src/app/Services/admin-posts.service';

@Component({
  selector: 'app-admin-aesthetics',
  templateUrl: './admin-aesthetics.component.html',
  styleUrls: ['./admin-aesthetics.component.css'],
})
export class AdminAestheticsComponent implements OnInit {
  aesthetics: any;
  submitted = false;
  files: any;
  constructor(
    private Aesthetics: FormBuilder,
    private services: AdminPostsService
  ) {}

  createAesthetics() {
    this.aesthetics = this.Aesthetics.group({
      category: ['', [Validators.required]],
      file: ['', [Validators.required]],
      description: ['', [Validators.required]],

    });
  }
  ngOnInit(): void {
    this.createAesthetics();
  }

  get f() {
    return this.aesthetics.controls;
  }
  uploadFile(e: any) {
    this.files = e.target.files[0];
  }

  submitA() {
    this.submitted = true;
    if (this.aesthetics.invalid) {
      return;
    }
    let forms = new FormData();
    forms.append('file', this.files, this.files.name);
    forms.append('category', this.aesthetics.get('category').value);
    forms.append('description', this.aesthetics.get('description').value);


    return this.services.aestheticsDetails(forms).subscribe(
      (data) => {
        console.log(data);
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
