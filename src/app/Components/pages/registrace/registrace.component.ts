import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth-service';

@Component({
  selector: 'app-registrace',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrace.component.html',
  styleUrls: ['./registrace.component.scss']
})
export class RegistraceComponent {
  username = '';
  password = '';
  confirmPassword = '';
  email = '';
  name = '';
  surname = '';
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  register(): void {
    if (this.password !== this.confirmPassword) {
      this.error = 'Hesla se neshodují';
      return;
    }

    this.auth.register({
      username: this.username,
      password: this.password,
      email: this.email,
      name: this.name,
      surname: this.surname
    }).subscribe({
      next: () => this.router.navigate(['/prihlaseni']),
      error: () => this.error = 'Registrace se nezdařila'
    });
  }
}
