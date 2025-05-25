export interface Comment {
  id?: number;
  userId: number;
  teamId: number;
  content: string;
  createdAt?: string;
}
