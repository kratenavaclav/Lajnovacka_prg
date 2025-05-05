import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../team-list/team-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SidebarComponent, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showTeamList = false;

  constructor(private eRef: ElementRef) {}

  toggleTeamList() {
    this.showTeamList = !this.showTeamList;
  }

  // Kliknutí mimo komponentu = zavřít týmovou lištu
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInsideNavbar = this.eRef.nativeElement.contains(target);
    const clickedOnTeamIcon = target.closest('.team-bar');

    if (!clickedInsideNavbar && !clickedOnTeamIcon) {
      this.showTeamList = false;
    }
  }

  showModal = false;
  modalType: 'prihlaseni' | 'registrace' = 'prihlaseni';

  openModal(type: 'prihlaseni' | 'registrace') {
    this.modalType = type;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
