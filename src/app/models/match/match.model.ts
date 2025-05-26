export interface MatchTeam {
  name: string;
  logo: string;
}

export interface Match {
  id: number;
  date: string;
  homeScore: number;
  awayScore: number;
  stadium: string;
  homeTeamId: number;
  awayTeamId: number;
  homeTeam: MatchTeam;
  awayTeam: MatchTeam;
}
