import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';
import { TeamService } from 'app/services/teams/team-service';
import { Team } from 'app/models/teams/models';

@Component({
  selector: 'app-team-list',
  standalone: true,
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  imports: [RouterLink, NgIf, NgForOf]
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((data) => {
      this.teams = data;
    });
  }
}
