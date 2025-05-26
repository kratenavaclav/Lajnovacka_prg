import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { NavbarComponent } from '../../navbar/navbar.component';
import { TabulkaLigyComponent } from '../tabulka-ligy/tabulka-ligy.component';
import { TabulkaStrelcuComponent } from '../tabulka-strelcu/tabulka-strelcu.component';

import { MatchService } from 'app/services/match/match-service';
import { Match } from 'app/models/match/match.model';

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
  matches: Match[] = [];

  constructor(
    private matchService: MatchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.matchService.getRecentMatches().subscribe(matches => {
      this.matches = matches;
    });
  }

  zobrazVsechnyZapasy(): void {
    this.router.navigate(['/zapasy']);
  }
}
