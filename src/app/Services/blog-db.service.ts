import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogDbService {
  constructor(private http: HttpClient) {}

  signup(data: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http
      .post<any>(environment.apiUrl + '/api/angularblogusers', data)
      .pipe(retry(2), catchError(this.handleError));
  }

  login(data: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http
      .post<any>(environment.apiUrl + '/api/userlogin', data)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): any {
    alert('Upload Failed');
    console.log(error.message);
  }
}
