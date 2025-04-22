import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TopScorer {
  id: number;
  name: string;
  team: string;
  goals: number;
  assists: number;
  nationality: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopscorerService {
  private apiUrl = 'https://tvuj-backend.cz/api/topscorers';

  constructor(private http: HttpClient) {}

  getTopScorers(): Observable<TopScorer[]> {
    return this.http.get<TopScorer[]>(this.apiUrl);
  }
}
