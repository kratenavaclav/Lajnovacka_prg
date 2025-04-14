import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.component.html',
  styleUrls: ['./registrace.component.scss']
})
export class RegistraceComponent {
  constructor(private router: Router) {}

  // Můžete přidat metodu pro navigaci zpět na přihlášení
  goToLogin() {
    this.router.navigate(['/prihlaseni']);
  }
}
