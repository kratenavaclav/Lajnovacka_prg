import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth-service'

@Component({
  selector: 'app-prihlaseni',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.scss']
})
export class PrihlaseniComponent {
  username = '';
  password = '';
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    this.auth.login({ username: this.username, password: this.password }).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/']);
      },
      error: () => {
        this.error = 'Neplatné přihlašovací údaje';
      }
    });
  }
}
