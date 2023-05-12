import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIsService {
  headers = new HttpHeaders({
    'X-RapidAPI-Key': '2fc13c756fmshaa4744dba7586efp1b2cdbjsnb4dd74d67415',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
  });

  constructor(private api: HttpClient) {}

  // MOVIE
  // fetchmovies() {
  //   return this.api
  //     .get<any>('https://imdb-top-100-movies.p.rapidapi..com/', {
  //       headers: this.headers,
  //     })
  //     .pipe(retry(5), catchError(this.handleError));
  // }

  fetchaesthetics() {
    return this.api
      .get<any>(environment.apiUrl + '/api/fetchaesthetic', {
        headers: this.headers,
      })
      .pipe(retry(2), catchError(this.handleError));
  }
  fetchmovies() {
    return this.api
      .get<any>(environment.apiUrl + '/api/fetchmovie', {
        headers: this.headers,
      })
      .pipe(retry(2), catchError(this.handleError));
  }
  fetchnovels() {
    return this.api
      .get<any>(environment.apiUrl + '/api/fetchnovel', {
        headers: this.headers,
      })
      .pipe(retry(2), catchError(this.handleError));
  }
  fetchstories() {
    return this.api
      .get<any>(environment.apiUrl + '/api/fetchstory', {
        headers: this.headers,
      })
      .pipe(retry(2), catchError(this.handleError));
  }
  fetchmusic() {
    return this.api
      .get<any>(environment.apiUrl + '/api/fetchmusic', {
        headers: this.headers,
      })
      .pipe(retry(2), catchError(this.handleError));
  }
  fetchallusers() {
    return this.api
      .get<any>(environment.apiUrl + '/api/allusers', {
        headers: this.headers,
      })
      .pipe(retry(2), catchError(this.handleError));
  }
  // logout() {
  //   return this.api
  //     .get<any>(environment.apiUrl + '/api/logout', {
  //       headers: this.headers,
  //     })
  //     .pipe(retry(2), catchError(this.handleError));
  // }
  handleError(error: HttpErrorResponse): any {
    alert('Unable to Fetch');
    console.log(error.message);
  }
  //   AIOM DB - All In
  // d 2 months ago | Movies
}
