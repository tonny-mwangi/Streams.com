
export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  date: string;
  time: string;
  status: "live" | "upcoming" | "finished";
  homeScore?: number;
  awayScore?: number;
  streamUrl?: string;
  description?: string;
}

export interface League {
  id: string;
  name: string;
  country: string;
  logoUrl?: string;
}

export interface Team {
  id: string;
  name: string;
  logoUrl?: string;
  league: string;
}
