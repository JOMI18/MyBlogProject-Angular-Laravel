import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminPostsService } from 'src/app/Services/admin-posts.service';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css'],
})
export class AdminMoviesComponent implements OnInit {
  movies: any;
  submitted = false;
  Tfiles: any;
  Cfiles: any;
  Trifiles: any;

  constructor(
    private moviesA: FormBuilder,
    private services: AdminPostsService
  ) {}

  createMovies() {
    this.movies = this.moviesA.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: ['', [Validators.required]],
      trimg: ['', [Validators.required]],
      category: ['', [Validators.required]],
      ratings: ['', [Validators.required]],
      date: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      trailer: ['', [Validators.required]],
      cast: ['', [Validators.required]],
      director: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.createMovies();
  }

  get f() {
    return this.movies.controls;
  }

  uploadIFile(e: any) {
    this.Cfiles = e.target.files[0];
    console.log(this.Cfiles);
  }
  uploadTrImgFile(e: any) {
    this.Trifiles = e.target.files[0];
    console.log(this.Trifiles);
  }

  uploadTFile(e: any) {
    this.Tfiles = e.target.files[0];
    console.log(this.Tfiles);
  }
  submitM() {
    this.submitted = true;
    if (this.movies.invalid) {
      return;
    }

    let forms = new FormData();
    forms.append('covers', this.Cfiles, this.Cfiles.name);
    forms.append('trailers', this.Tfiles, this.Tfiles.name);
    forms.append('trimg', this.Trifiles, this.Trifiles.name);
    forms.append('title', this.movies.get('title').value);
    forms.append('category', this.movies.get('category').value);
    forms.append('director', this.movies.get('director').value);
    forms.append('description', this.movies.get('description').value);
    forms.append('ratings', this.movies.get('ratings').value);
    forms.append('date', this.movies.get('date').value);
    forms.append('genre', this.movies.get('genre').value);
    forms.append('cast', this.movies.get('cast').value);

    return this.services.movieDetails(forms).subscribe(
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
