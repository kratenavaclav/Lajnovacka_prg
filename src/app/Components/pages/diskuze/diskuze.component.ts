import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Comment } from 'app/models/comment/model';
import { Team } from 'app/models/teams/models';
import { CommentService } from 'app/services/comment/comment.service';
import { TeamService } from 'app/services/teams/team-service';
import { AuthService } from 'app/services/auth/auth-service';
import { NavbarComponent } from 'app/Components/navbar/navbar.component';
import { UserService } from 'app/services/user/user-service';

@Component({
  selector: 'app-diskuze',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NavbarComponent
  ],
  templateUrl: './diskuze.component.html',
  styleUrls: ['./diskuze.component.scss']
})
export class DiskuzeComponent implements OnInit {
  teams: Team[] = [];
  selectedTeamId: number | null = null;
  selectedTeamName: string = '';
  comments: Comment[] = [];
  newComment: string = '';
  userId: number | null = null;
  username: string = '';
  isLoggedIn: boolean = false;

  userMap: Map<number, string> = new Map();

  constructor(
    private commentService: CommentService,
    private teamService: TeamService,
    private userService: UserService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const userInfo = this.auth.getUserInfo();
    if (userInfo) {
      this.userId = userInfo.id;
      this.username = userInfo.username;
      this.isLoggedIn = true;
    }

    this.loadTeams();
  }

  loadTeams() {
    this.teamService.getAllTeams().subscribe(data => {
      this.teams = data;
      if (this.teams.length > 0) {
        this.selectedTeamId = this.teams[0].id;
        this.selectedTeamName = this.teams[0].name;
        this.loadComments();
      }
    });
  }

  selectTeam(teamId: number) {
    this.selectedTeamId = teamId;
    const team = this.teams.find(t => t.id === teamId);
    this.selectedTeamName = team?.name ?? '';
    this.loadComments();
  }

  loadComments() {
    if (!this.selectedTeamId) return;

    this.commentService.getCommentsByTeam(this.selectedTeamId).subscribe(data => {
      this.comments = data;

      const uniqueUserIds = Array.from(new Set(data.map(c => c.userId)));

      for (const userId of uniqueUserIds) {
        if (!this.userMap.has(userId)) {
          this.userService.getUserById(userId).subscribe(user => {
            if (user) {
              this.userMap.set(userId, user.username);
            }
          });
        }
      }
    });
  }

  submitComment() {
    if (!this.isLoggedIn || !this.newComment.trim() || !this.selectedTeamId || !this.userId) return;

    const comment: Comment = {
      userId: this.userId,
      teamId: this.selectedTeamId,
      content: this.newComment.trim()
    };

    this.commentService.addComment(comment).subscribe(() => {
      this.newComment = '';
      this.loadComments();
    });
  }

  deleteComment(id: number) {
    if (!confirm('Opravdu chceš smazat tento komentář?')) return;

    this.commentService.deleteComment(id).subscribe(() => {
      this.loadComments();
    });
  }

  getUsername(userId: number): string {
    return this.userMap.get(userId) ?? `Uživatel ${userId}`;
  }
}
