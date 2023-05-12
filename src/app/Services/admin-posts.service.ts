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
export class AdminPostsService {
  constructor(private posts: HttpClient) {}

  // NOVEL

  // novelDetails(f: any) {
  //   // this.updateNovelFile(f);
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   return this.posts
  //     .post<any>(environment.apiUrl + '/api/novelapi', f, { headers: headers })
  //     .pipe(retry(2), catchError(this.handleNlError));
  // }
  novelDetails(f: any) {
    // this.updateNovelFile(f);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.posts
      .post<any>(environment.apiUrl + '/api/mynovel', f, { headers: headers })
      .pipe(retry(1), catchError(this.handleNlError));
  }

  aestheticsDetails(f: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.posts
      .post<any>(environment.apiUrl + '/api/myaesthetic', f, {
        headers: headers,
      })
      .pipe(retry(1), catchError(this.handleNlError));
  }
  movieDetails(f: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.posts
      .post<any>(environment.apiUrl + '/api/mymovie', f, {
        headers: headers,
      })
      .pipe(retry(1), catchError(this.handleNlError));
  }
  mystoryDetails(f: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.posts
      .post<any>(environment.apiUrl + '/api/mystory', f, {
        headers: headers,
      })
      .pipe(retry(1), catchError(this.handleNlError));
  }
  musicDetails(f: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.posts
      .post<any>(environment.apiUrl + '/api/mymusic', f, {
        headers: headers,
      })
      .pipe(retry(1), catchError(this.handleNlError));
  }

  handleNlError(error: HttpErrorResponse): any {
    alert('Unable to send details');
    console.log(error.message);
  }
}
