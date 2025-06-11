
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MatchCard from "@/components/MatchCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

// Mock data - this will be replaced with MongoDB data
const allMatches = [
  {
    id: "1",
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    league: "Premier League",
    date: "2024-01-15",
    time: "15:00",
    status: "live" as const,
    homeScore: 2,
    awayScore: 1,
  },
  {
    id: "2",
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    league: "La Liga",
    date: "2024-01-15",
    time: "20:00",
    status: "upcoming" as const,
  },
  {
    id: "3",
    homeTeam: "Bayern Munich",
    awayTeam: "Dortmund",
    league: "Bundesliga",
    date: "2024-01-14",
    time: "18:30",
    status: "finished" as const,
    homeScore: 3,
    awayScore: 2,
  },
  {
    id: "4",
    homeTeam: "PSG",
    awayTeam: "Marseille",
    league: "Ligue 1",
    date: "2024-01-16",
    time: "19:00",
    status: "upcoming" as const,
  },
  {
    id: "5",
    homeTeam: "Juventus",
    awayTeam: "AC Milan",
    league: "Serie A",
    date: "2024-01-16",
    time: "17:30",
    status: "upcoming" as const,
  },
  {
    id: "6",
    homeTeam: "Chelsea",
    awayTeam: "Arsenal",
    league: "Premier League",
    date: "2024-01-13",
    time: "16:00",
    status: "finished" as const,
    homeScore: 1,
    awayScore: 2,
  },
];

const Matches = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("all");

  const leagues = ["all", "Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1"];

  const filteredMatches = allMatches.filter((match) => {
    const matchesSearch = 
      match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.league.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLeague = selectedLeague === "all" || match.league === selectedLeague;
    
    return matchesSearch && matchesLeague;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">All Matches</h1>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search teams or leagues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {leagues.map((league) => (
              <Button
                key={league}
                variant={selectedLeague === league ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLeague(league)}
                className="capitalize"
              >
                {league === "all" ? "All Leagues" : league}
              </Button>
            ))}
          </div>
        </div>

        {/* Match Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            {filteredMatches.length} match{filteredMatches.length !== 1 ? "es" : ""} found
          </p>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No matches found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
