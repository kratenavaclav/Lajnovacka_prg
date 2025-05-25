import { Component, OnInit } from '@angular/core';
import { Comment } from 'app/models/comment/model'; // necháváme alias
import { CommentService } from 'app/services/comment/comment.service';
import { Team } from 'app/models/teams/models';
import { TeamService } from 'app/services/teams/team-service'; // jak jsi měl

@Component({
  selector: 'app-diskuze',
  templateUrl: './diskuze.component.html',
  styleUrls: ['./diskuze.component.scss']
})
export class DiskuzeComponent implements OnInit {
  teams: Team[] = [];
  selectedTeamId: number | null = null;
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
        this.loadComments();
      }
    });
  }

  selectTeam(teamId: number) {
    this.selectedTeamId = teamId;
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
