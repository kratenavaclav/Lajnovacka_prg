import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'app/Components/navbar/navbar.component';
import { TeamService } from 'app/services/teams/team-service';
import { Player } from 'app/models/player/model';
import { Coach } from 'app/models/coach/model';
import { Team } from 'app/models/teams/models';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  goalkeepers: Player[] = [];
  defenders: Player[] = [];
  midfielders: Player[] = [];
  forwards: Player[] = [];

  coach: Coach = {
    id: 0,
    name: '',
    surname: '',
    teamId: 0,
    nationality: ''
  };

  team: Team = {
    id: 0,
    name: '',
    logo: '',
    stadium: '',
    stadiumCapacity: 0,
    foundationYear: 0,
    leagueTitles: 0,
    cupTitles: 0
  };

  constructor(private route: ActivatedRoute, private teamService: TeamService) {}

  ngOnInit(): void {
    const teamId = +this.route.snapshot.paramMap.get('teamId')!;
    this.teamService.getPlayersByTeamId(teamId).subscribe(players => {
      this.goalkeepers = players.filter(p => p.position?.toLowerCase() === 'goalkeeper');
      this.defenders = players.filter(p => p.position?.toLowerCase() === 'defender');
      this.midfielders = players.filter(p => p.position?.toLowerCase() === 'midfielder');
      this.forwards = players.filter(p => p.position?.toLowerCase() === 'forward');
    });

    this.teamService.getCoachByTeamId(teamId).subscribe(c => {
      if (c) this.coach = c;
    });

    this.teamService.getTeamById(teamId).subscribe(t => {
      if (t) this.team = t;
    });
  }
}
