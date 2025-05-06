import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-diskuze',
  standalone: true,
  templateUrl: './diskuze.component.html',
  styleUrls: ['./diskuze.component.scss'],
  imports: [CommonModule, FormsModule, NavbarComponent]
})
export class DiskuzeComponent  implements OnInit {
  teams = [
    'SK Slavia Praha',
    'AC Sparta Praha',
    'FC Viktoria Plzeň',
    'FC Baník Ostrava',
    'SK Sigma Olomouc',
    'FC Slovácko',
    'Bohemians Praha 1905',
    'FK Jablonec',
    'FK Mladá Boleslav',
    'FC Hradec Králové',
    'FC Zlín',
    'FK Teplice',
    'Dynamo České Budějovice',
    'Karviná',
    'Pardubice',
    'FK Jihlava'
  ];
  selectedTeam: string | null = null;
  teamMessages: Record<string, string[]> = {};
  newMessage = '';

  ngOnInit(): void {
    const savedMessages = localStorage.getItem('teamMessages');
    if (savedMessages) {
      this.teamMessages = JSON.parse(savedMessages);
    }
  }

  get messages(): string[] {
    if (this.selectedTeam) {
      return this.teamMessages[this.selectedTeam] || [];
    }
    return [];
  }

  selectTeam(team: string) {
    this.selectedTeam = team;
    if (!this.teamMessages[team]) {
      this.teamMessages[team] = [];
    }
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedTeam) {
      this.teamMessages[this.selectedTeam].push(this.newMessage.trim());
      this.newMessage = '';
      localStorage.setItem('teamMessages', JSON.stringify(this.teamMessages));
    }
  }
}
