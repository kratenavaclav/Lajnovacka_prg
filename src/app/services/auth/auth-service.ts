import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  name?: string;
  surname?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authUrl = 'http://localhost:5044/api/Authentication';
  private usersUrl = 'http://localhost:5044/api/Users';

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.authUrl, data);
  }

  register(data: RegisterRequest): Observable<any> {
    return this.http.post(this.usersUrl, data);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserInfo(): { username: string; id: number; role: string } | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return {
        username: payload.user,
        id: payload.id,
        role: payload.role
      };
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
