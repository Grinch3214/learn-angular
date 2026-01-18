import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Movies {
  private apiUrl: string = environment.omdbApiUrl;
  private apiKey: string = environment.omdbApiKey;

  constructor(private https: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    return this.https.get<any>(`${this.apiUrl}?=${title}&apikey=${this.apiKey}`);
  }
}
