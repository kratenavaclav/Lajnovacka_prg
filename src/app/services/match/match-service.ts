import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from 'app/models/match/match.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private apiUrl = 'http://localhost:5044/api/matches';

  constructor(private http: HttpClient) {}

  getAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.apiUrl);
  }

  getRecentMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/recent-matches`);
  }

  getMatchById(id: number): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrl}/${id}`);
  }
}
