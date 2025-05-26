import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatchService } from 'app/services/match/match-service';
import { Match } from 'app/models/match/match.model';
import { NavbarComponent } from 'app/Components/navbar/navbar.component';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  allMatches: Match[] = [];
  filteredMatches: Match[] = [];

  teams: string[] = [];
  rounds: number[] = [];

  selectedTeam: string = '';
  selectedRound: string = '';

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.matchService.getAllPlayedMatches().subscribe(matches => {
      console.log('ZÁPASY Z BACKENDU:', matches);
      this.allMatches = matches;
      this.filteredMatches = matches;

      this.teams = [...new Set(matches.flatMap(m => [m.homeTeam.name, m.awayTeam.name]))].sort();
      this.rounds = [...new Set(matches.map(m => m.round))].sort((a, b) => a - b);
    });
  }

  filterMatches(): void {
    this.filteredMatches = this.allMatches.filter(m => {
      const teamMatch = this.selectedTeam
        ? m.homeTeam.name === this.selectedTeam || m.awayTeam.name === this.selectedTeam
        : true;
      const roundMatch = this.selectedRound
        ? m.round === +this.selectedRound
        : true;
      return teamMatch && roundMatch;
    });
  }

  resetFilter(): void {
    this.selectedTeam = '';
    this.selectedRound = '';
    this.filteredMatches = this.allMatches;
  }

  hasMatchesInRound(round: number): boolean {
    return this.filteredMatches.some(m => m.round === round);
  }

  getMatchesByRound(round: number): Match[] {
    return this.filteredMatches.filter(m => m.round === round);
  }
}
