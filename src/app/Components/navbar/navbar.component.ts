import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TeamListComponent } from '../team-list/team-list.component';
import { NgIf } from '@angular/common';
import { AuthService } from 'app/services/auth/auth-service'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, TeamListComponent, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showTeamList = false;
  username: string | null = null;

  constructor(private eRef: ElementRef, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const info = this.auth.getUserInfo();
    this.username = info?.username || null;
  }

  toggleTeamList() {
    this.showTeamList = !this.showTeamList;
  }

  logout() {
    this.auth.logout();
    this.username = null;
    this.router.navigate(['/']);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInsideNavbar = this.eRef.nativeElement.contains(target);
    const clickedOnTeamIcon = target.closest('.team-bar');

    if (!clickedInsideNavbar && !clickedOnTeamIcon) {
      this.showTeamList = false;
    }
  }
}
