import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Player {
  id: number;
  name: string;
  team: string;
  goals: number;
  assists: number;
  nationality: string;
  totalPoints?: number; // computed property
}

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private apiUrl = 'http://localhost:5044/api/players';

  constructor(private http: HttpClient) {}

  getSortedPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl).pipe(
      map(players =>
        players.map(p => ({
          ...p,
          totalPoints: p.goals + p.assists
        })).sort((a, b) => (a.totalPoints ?? 0) - (b.totalPoints ?? 0))
      )
    );
  }
}
