import { Component, OnInit } from '@angular/core';
import { APIsService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-umovies',
  templateUrl: './umovies.component.html',
  styleUrls: ['./umovies.component.css'],
})
export class UmoviesComponent implements OnInit {
  movies: any;
  imagepath: any = 'http://jomi.com/Movie/Image/';
  Trimagepath: any = 'http://jomi.com/Movie/Trimg/';
  Trailerpath: any = 'http://jomi.com/Movie/Trailer/';
  loading = true;
  page: number = 1;
  called = false;
  clicked = false;
  content: any;
  trailerr: any;
  display = true;

  constructor(private movie: APIsService) {
    this.movie.fetchmovies().subscribe(
      (data: any) => {
        this.loading = false;
        console.log(data);
        this.movies = data.movies;
      },
      (error: any) => {
        this.loading = false;
        console.log(error);
        alert('failed to reach endpoint');
      }
    );
  }
  displaymore(event: any) {
    this.display = false;

    this.called = true;
    this.content = event;
    console.log(event);
  }

  close() {
    this.display = true;
    this.called = false;
  }

  ngOnInit(): void {}
}
