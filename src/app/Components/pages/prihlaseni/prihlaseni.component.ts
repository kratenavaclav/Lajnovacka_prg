import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.scss']
})
export class PrihlaseniComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  /*getNotesFromApi(groupId: number): Observable<any[]> {
    return this.http.get<any[]>(${environment.apiUrl}/api/groups/${groupId}/notes);
  }
  loadData() {
    this.route.parent?.paramMap.subscribe(params => {
      this.groupId = Number(params.get('groupId'));
    });

    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotesFromApi(this.groupId).subscribe({
      next: (response) => {
        console.log(response);
        this.notes = response.map(n => new Note(n.id, n.name, n.value, n.color));
      },
      error: (error) => {
        console.error('Chyba při načítání dat z API:', error);
      }
    });
  }
}
*/
}
