
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {SidebarComponent} from '../team-list/team-list.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {showModal = false;
  modalType: 'prihlaseni' | 'registrace' = 'prihlaseni';

  openModal(type: 'prihlaseni' | 'registrace') {
    this.modalType = type;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }}



