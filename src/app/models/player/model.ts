export interface Player {
  id: number;
  teamId: number;
  name: string;
  surname: string;
  position: string;
  nationality: string;
  goals?: number;
  assists?: number;
}
