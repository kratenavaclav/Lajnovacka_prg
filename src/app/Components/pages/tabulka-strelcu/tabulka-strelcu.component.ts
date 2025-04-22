import { Component, OnInit } from '@angular/core';
import { TopscorerService, TopScorer } from 'app/services/topscorer/topscorer.service';
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
  scorers: TopScorer[] = [];

  constructor(private topscorerService: TopscorerService) {}

  ngOnInit(): void {
    this.topscorerService.getTopScorers().subscribe((data) => {
      this.scorers = data;
    });
  }
}
