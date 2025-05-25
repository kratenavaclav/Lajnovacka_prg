import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'app/models/comment/model'; // správná cesta k modelu

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:5044/api/comments'; // uprav dle svého backendu

  constructor(private http: HttpClient) {}

  /**
   * Načte komentáře podle ID týmu
   */
  getCommentsByTeam(teamId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/team/${teamId}`);
  }

  /**
   * Přidá nový komentář
   */
  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, comment);
  }
}
