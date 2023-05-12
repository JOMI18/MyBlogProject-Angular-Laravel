import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminPostsService } from 'src/app/Services/admin-posts.service';

@Component({
  selector: 'app-admin-music',
  templateUrl: './admin-music.component.html',
  styleUrls: ['./admin-music.component.css'],
})
export class AdminMusicComponent implements OnInit {
  music: any;
  Cfiles: any;
  Tfiles: any;
  Vfiles: any;
  Trifiles: any;
  submitted = false;
  constructor(
    private musicA: FormBuilder,
    private services: AdminPostsService
  ) {}

  createMusics() {
    this.music = this.musicA.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: ['', [Validators.required]],
      ratings: ['', [Validators.required]],
      date: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      track: ['', [Validators.required]],
      vfile: ['', [Validators.required]],
      trifile: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.createMusics();
  }
  get f() {
    // console.log(this.movie.controls);
    return this.music.controls;
  }

  uploadIFile(e: any) {
    this.Cfiles = e.target.files[0];
    console.log(this.Cfiles);
  }
  uploadVFile(e: any) {
    this.Vfiles = e.target.files[0];
    console.log(this.Vfiles);
  }
  uploadTFile(e: any) {
    this.Tfiles = e.target.files[0];
    console.log(this.Tfiles);
  }
  uploadTriFile(e: any) {
    this.Trifiles = e.target.files[0];
    console.log(this.Trifiles);
  }
  submitM() {
    this.submitted = true;
    if (this.music.invalid) {
      return;
    }
    // console.log(this.music.value);

    let forms = new FormData();
    forms.append('covers', this.Cfiles, this.Cfiles.name);
    forms.append('tracks', this.Tfiles, this.Tfiles.name);
    forms.append('vfile', this.Vfiles, this.Vfiles.name);
    forms.append('trifile', this.Trifiles, this.Trifiles.name);
    forms.append('title', this.music.get('title').value);
    forms.append('description', this.music.get('description').value);
    forms.append('ratings', this.music.get('ratings').value);
    forms.append('date', this.music.get('date').value);
    forms.append('genre', this.music.get('genre').value);
    // console.log(forms.get('ImageUrl'));
    // return;

    return this.services.musicDetails(forms).subscribe(
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
