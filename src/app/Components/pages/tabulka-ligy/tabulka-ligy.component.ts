import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Team } from 'app/models/teams/models';
import { TeamService } from 'app/services/teams/team-service';

interface TeamStats {
  teamId: number;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

@Component({
  selector: 'app-tabulka-ligy',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './tabulka-ligy.component.html',
  styleUrls: ['./tabulka-ligy.component.scss']
})
export class TabulkaLigyComponent implements OnInit {
  table: TeamStats[] = [];
  teams: Team[] = [];

  constructor(
    private http: HttpClient,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(t => this.teams = t);

    this.http.get<TeamStats[]>('http://localhost:5044/api/matches/league-table')
      .subscribe(data => {
        this.table = data;
      });
  }

  getTeam(teamId: number): Team | undefined {
    return this.teams.find(t => t.id === teamId);
  }

  getTeamName(teamId: number): string {
    return this.getTeam(teamId)?.name || '';
  }

  getTeamLogo(teamId: number): string {
    return this.getTeam(teamId)?.logo || '';
  }
}
