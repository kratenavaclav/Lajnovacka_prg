import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from 'app/models/player/model';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private apiUrl: string = 'http://localhost:5044/api/Players';

  constructor(private http: HttpClient) {}

  /** Získání všech hráčů */
  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  /** Získání hráčů konkrétního týmu */
  getPlayersByTeamId(teamId: number): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl).pipe(
      map((players: Player[]) => players.filter(p => p.teamId === teamId))
    );
  }
}
