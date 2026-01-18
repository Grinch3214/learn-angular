import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Movies {
  private apiUrl: string = environment.omdbApiUrl;
  private apiKey: string = environment.omdbApiKey;
}
