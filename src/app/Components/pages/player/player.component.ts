import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'app/services/teams/team-service';
import { Player } from 'app/models/player/model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player: Player | null = null;
  teamName: string = '';

  constructor(private route: ActivatedRoute, private teamService: TeamService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getAllPlayers().subscribe(players => {
      const found = players.find(p => p.id === id);
      if (found) {
        this.player = found;
        this.teamService.getTeamById(found.teamId).subscribe(team => {
          this.teamName = team?.name ?? 'Neuvedeno';
        });
      }
    });
  }
}
