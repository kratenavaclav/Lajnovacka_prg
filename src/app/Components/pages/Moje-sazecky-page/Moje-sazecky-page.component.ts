import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-moje-sazecky',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './Moje-sazecky-page.component.html',
  styleUrls: ['./Moje-sazecky-page.component.scss']
})
export class MojeSazeckyPageComponent {}
