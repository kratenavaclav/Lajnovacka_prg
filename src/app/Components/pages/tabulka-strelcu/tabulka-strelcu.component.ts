/*import { Component, OnInit } from '@angular/core';
import { PlayersService, Player } from 'app/services/topscorer/topscorer.service'; // Importujeme službu a typ Player
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-tabulka-strelcu',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './tabulka-strelcu.component.html',
  styleUrls: ['./tabulka-strelcu.component.scss']
})
export class TabulkaStrelcuComponent implements OnInit {
  players: Player[] = []; // Měníme na players podle Player modelu

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getSortedPlayers().subscribe((data) => {
      this.players = data; // Seřazené hráče už dostáváme přímo z API
    });
  }
}
*/
