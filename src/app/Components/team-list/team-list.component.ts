import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {of} from 'rxjs';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  imports: [
    NgIf,
    NgForOf,
    NgStyle,
    RouterLink
  ],
  standalone: true
})
export class SidebarComponent {
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}



