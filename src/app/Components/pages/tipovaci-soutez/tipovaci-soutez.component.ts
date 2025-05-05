import { Component } from '@angular/core';
import {NavbarComponent} from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tipovaci-soutez',
  imports: [
    CommonModule, NavbarComponent
  ],
  templateUrl: './tipovaci-soutez.component.html',
  styleUrls: ['./tipovaci-soutez.component.scss']
})
export class TipovaciSoutezComponent {
  matches = [
    {
      date: '15.03.2025',
      time: '19:00',
      homeTeam: { name: 'Sparta', logo: 'icons/sparta.png' },
      awayTeam: { name: 'Slavia', logo: 'icons/slavie.png' },
      selectedResult: null
    },
    {
      date: '20.03.2025',
      time: '18:45',
      homeTeam: { name: 'Sparta', logo: 'icons/sparta.png' },
      awayTeam: { name: 'Slavia', logo: 'icons/slavie.png' },
      selectedResult: null
    },
    {
      date: '1.04.2025',
      time: '16:30',
      homeTeam: { name: 'Sparta', logo: 'icons/sparta.png' },
      awayTeam: { name: 'Slavia', logo: 'icons/slavie.png' },
      selectedResult: null
    },
    {
      date: '2.04.2025',
      time: '17:30',
      homeTeam: { name: 'Sparta', logo: 'icons/sparta.png' },
      awayTeam: { name: 'Slavia', logo: 'icons/slavie.png' },
      selectedResult: null
    },
    {
      date: '3.04.2025',
      time: '19:30',
      homeTeam: { name: 'Sparta', logo: 'icons/sparta.png' },
      awayTeam: { name: 'Slavia', logo: 'icons/slavie.png' },
      selectedResult: null
    }
  ];

  selectedMatch: any = this.matches[0];


  selectMatch(match: any): void {
    this.selectedMatch = match;
  }
  selectResult(result: 'home' | 'draw' | 'away'): void {
    if (this.selectedMatch.selectedResult === result) {

      this.selectedMatch.selectedResult = null;
    } else {

      this.selectedMatch.selectedResult = result;
    }
  }
}
