import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-hlavni-stranka',
  standalone: true,
  imports: [NavbarComponent], // Importuje navigační lištu
  templateUrl: './hlavni-stranka.component.html',
  styleUrls: ['./hlavni-stranka.component.scss']
})
export class HlavniStrankaComponent {}


