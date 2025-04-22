import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hlavni-stranka',
  standalone: true,
  imports: [NavbarComponent, RouterLink], // Importuje navigační lištu
  templateUrl: './hlavni-stranka.component.html',
  styleUrls: ['./hlavni-stranka.component.scss']
})
export class HlavniStrankaComponent {}


