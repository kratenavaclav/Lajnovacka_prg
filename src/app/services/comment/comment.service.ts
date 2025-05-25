import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'app/models/comment/model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:5044/api/comments'; // uprav podle potřeby

  constructor(private http: HttpClient) {}

  /**
   * Načti všechny komentáře k danému týmu
   */
  getCommentsByTeam(teamId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/team/${teamId}`);
  }

  /**
   * Přidej nový komentář
   */
  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, comment);
  }

  /**
   * Smaž komentář podle ID
   */
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
