import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from 'app/models/player/model';
import { Coach } from 'app/models/coach/model';
import { Team } from 'app/models/teams/models';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private playersUrl = 'http://localhost:5044/api/Players';
  private coachesUrl = 'http://localhost:5044/api/Coaches';
  private teamsUrl = 'http://localhost:5044/api/Teams';

  constructor(private http: HttpClient) {}

  getPlayersByTeamId(teamId: number): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl).pipe(
      map(players => players.filter(p => p.teamId === teamId))
    );
  }

  getCoachByTeamId(teamId: number): Observable<Coach | undefined> {
    return this.http.get<Coach[]>(this.coachesUrl).pipe(
      map(coaches => coaches.find(c => c.teamId === teamId))
    );
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl);
  }
  getTeamById(teamId: number): Observable<Team | undefined> {
    return this.http.get<Team[]>(this.teamsUrl).pipe(
      map(teams => teams.find(t => t.id === teamId))
    );
  }
}
