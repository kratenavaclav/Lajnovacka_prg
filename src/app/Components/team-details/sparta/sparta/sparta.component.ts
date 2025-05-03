import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { TeamService } from 'app/services/teams/team-service';
import { Player } from 'app/models/player/model';



@Component({
  selector: 'app-sparta',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './sparta.component.html',
  styleUrls: ['./sparta.component.scss']
})
export class SpartaComponent implements OnInit {
  goalkeepers: Player[] = [];
  defenders: Player[] = [];
  midfielders: Player[] = [];
  forwards: Player[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    const teamId = 3;

    this.teamService.getPlayersByTeamId(teamId).subscribe(players => {
      this.goalkeepers = players.filter(p => p.position === 'Goalkeeper');
      this.defenders = players.filter(p => p.position === 'Defender');
      this.midfielders = players.filter(p => p.position === 'Midfielder');
      this.forwards = players.filter(p => p.position === 'Forward');
    });
  }
}
