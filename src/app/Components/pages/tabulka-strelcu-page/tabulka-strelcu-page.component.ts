import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TabulkaStrelcuComponent } from '../tabulka-strelcu/tabulka-strelcu.component';

@Component({
  selector: 'app-tabulka-strelcu-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TabulkaStrelcuComponent
  ],
  templateUrl: './tabulka-strelcu-page.component.html',
  styleUrls: ['./tabulka-strelcu-page.component.scss']
})
export class TabulkaStrelcuPageComponent {}
