import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Player } from 'app/models/player/model';
import { Team } from 'app/models/teams/models';
import { TeamService } from 'app/services/teams/team-service';


@Component({
  selector: 'app-tabulka-strelcu',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './tabulka-strelcu.component.html',
  styleUrls: ['./tabulka-strelcu.component.scss']
})
export class TabulkaStrelcuComponent implements OnInit {
  players: Player[] = [];
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(teams => {
      this.teams = teams;
    });

    this.teamService.getAllPlayers().subscribe(players => {
      this.players = players
        .filter(p => p.goals! > 0 || p.assists! > 0)
        .sort((a, b) => (b.goals! + b.assists!) - (a.goals! + a.assists!));
    });
  }

  getTeamName(teamId: number): string {
    return this.teams.find(t => t.id === teamId)?.name || '';
  }
}
