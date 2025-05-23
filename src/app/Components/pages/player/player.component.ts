import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamService } from 'app/services/teams/team-service';
import { Player } from 'app/models/player/model';
import { NavbarComponent } from 'app/Components/navbar/navbar.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player: Player | null = null;
  teamName: string = '';
  teamLogo: string = '';

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (isNaN(id)) {
      console.error('Neplatné ID hráče');
      return;
    }

    this.teamService.getAllPlayers().subscribe(players => {
      const found = players.find(p => Number(p.id) === id);

      if (found) {
        this.player = found;

        this.teamService.getTeamById(found.teamId).subscribe(team => {
          this.teamName = team?.name ?? 'Neuvedeno';
          this.teamLogo = team?.logo ?? '';
        });
      } else {
        console.warn('Hráč s tímto ID nebyl nalezen');
      }
    });
  }
}

