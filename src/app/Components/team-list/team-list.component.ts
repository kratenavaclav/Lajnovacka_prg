import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf]
})
export class SidebarComponent {
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  teams = [
    { id: 1, name: 'Slovan Liberec', icon: 'icons/liberec.png' },
    { id: 2, name: 'Mladá Boleslav', icon: 'icons/boleslav.png' },
    { id: 3, name: 'Sparta Praha', icon: 'icons/sparta.png' },
    { id: 4, name: 'Viktoria Plzeň', icon: 'icons/plzen.png' },
    { id: 5, name: 'Jablonec', icon: 'icons/Jablonec.png' },
    { id: 6, name: 'Slavia Praha', icon: 'icons/slavie.png' },
    { id: 7, name: 'Sigma Olomouc', icon: 'icons/olomouc.webp' },
    { id: 8, name: 'Karviná', icon: 'icons/karvina.png' },
    { id: 9, name: 'Teplice', icon: 'icons/teplice.png' },
    { id: 10, name: 'Bohemians 1905', icon: 'icons/bohemka.png' },
    { id: 11, name: 'Dukla Praha', icon: 'icons/dukla.png' },
    { id: 12, name: 'Baník Ostrava', icon: 'icons/Banicek.png' },
    { id: 13, name: 'Slovácko', icon: 'icons/slovacko.png' },
    { id: 14, name: 'Dynamo České Budějovice', icon: 'icons/budejky.jpg' },
    { id: 15, name: 'Pardubice', icon: 'icons/pardubice.png' },
    { id: 16, name: 'Hradec Králové', icon: 'icons/hradec.png' }
  ];
}
