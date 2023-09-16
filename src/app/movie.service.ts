import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '4f5f43495afcc67e9553f6c684a82f84'; //clave API

  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<Movie[]> {
    const url = 'https://www.themoviedb.org/';
    const params = {
      api_key: this.apiKey,
      query: title
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Movie[]>(url, params, { headers }); 
  }
}