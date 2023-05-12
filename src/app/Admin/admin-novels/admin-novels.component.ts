import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminPostsService } from 'src/app/Services/admin-posts.service';
// import { APIsService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-admin-novels',
  templateUrl: './admin-novels.component.html',
  styleUrls: ['./admin-novels.component.css'],
})
export class AdminNovelsComponent implements OnInit {
  novels: any;
  submitted = false;
  data: any;
  files: any;
  constructor(
    private NovelsA: FormBuilder,
    private services: AdminPostsService
  ) {}

  createNovels() {
    this.novels = this.NovelsA.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: ['', [Validators.required]],
      author: ['', [Validators.required]],
      ratings: ['', [Validators.required]],
      date: ['', [Validators.required]],
      genre: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.createNovels();
  }

  get f() {
    // console.log(this.novels.controls);
    return this.novels.controls;
  }

  uploadFile(e: any) {
    this.files = e.target.files[0];
    // console.log(this.files);
  }

  submitN() {
    // console.log(this.novels.get('title').value);
    // return;
    this.submitted = true;
    if (this.novels.invalid) {
      return;
    }
    // console.log(this.novels.value);

    let forms = new FormData();
    forms.append('ImageUrl', this.files, this.files.name);
    forms.append('title', this.novels.get('title').value);
    forms.append('author', this.novels.get('author').value);
    forms.append('description', this.novels.get('description').value);
    forms.append('ratings', this.novels.get('ratings').value);
    forms.append('date', this.novels.get('date').value);
    forms.append('genre', this.novels.get('genre').value);
    // console.log(forms.get('ImageUrl'));
    // return;

    return this.services.novelDetails(forms).subscribe(
      (data) => {
        console.log(data);
        this.submitted = false;
      },
      (error) => {
        // alert('check your credentials');
        console.log(error.message);

        this.submitted = false;
      }
    );
  }
}
