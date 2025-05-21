import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TabulkaLigyComponent } from '../tabulka-ligy/tabulka-ligy.component';
import { TabulkaStrelcuComponent } from '../tabulka-strelcu/tabulka-strelcu.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hlavni-stranka',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TabulkaLigyComponent,
    TabulkaStrelcuComponent
  ],
  templateUrl: './hlavni-stranka.component.html',
  styleUrls: ['./hlavni-stranka.component.scss']
})
export class HlavniStrankaComponent implements OnInit {

  matches: {
    date: string;
    homeScore: number;
    awayScore: number;
    stadium: string;
    homeTeam: string;
    awayTeam: string;
  }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{
      date: string;
      homeScore: number;
      awayScore: number;
      stadium: string;
      homeTeam: string;
      awayTeam: string;
    }[]>('http://localhost:5044/api/matches/recent-matches')
      .subscribe(data => this.matches = data);
  }
}
