import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TabulkaLigyComponent } from '../tabulka-ligy/tabulka-ligy.component';

@Component({
  selector: 'app-tabulka-ligy-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TabulkaLigyComponent
  ],
  templateUrl: './tabulka-ligy-page.component.html',
  styleUrls: ['./tabulka-ligy-page.component.scss']
})
export class TabulkaLigyPageComponent {}
