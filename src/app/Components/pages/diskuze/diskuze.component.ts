import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Comment } from 'app/models/comment/model';
import { Team } from 'app/models/teams/models';
import { CommentService } from 'app/services/comment/comment.service';
import { TeamService } from 'app/services/teams/team-service';
import { NavbarComponent } from 'app/Components/navbar/navbar.component';

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
  isLoggedIn: boolean = false;

  constructor(
    private commentService: CommentService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('userId'));
    this.isLoggedIn = !!this.userId;
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
    });
  }

  submitComment() {
    if (!this.newComment.trim() || !this.selectedTeamId || !this.userId) return;

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
}
