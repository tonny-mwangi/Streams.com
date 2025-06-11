
import Navbar from "@/components/Navbar";
import MatchCard from "@/components/MatchCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Zap } from "lucide-react";

// Mock data - this will be replaced with MongoDB data
const featuredMatches = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Stream Football Live
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Watch your favorite teams and matches in HD quality
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/matches">
                  <Play className="h-5 w-5 mr-2" />
                  Browse Matches
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Matches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Matches</h2>
          <Button variant="outline" asChild>
            <Link to="/matches">View All Matches</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Stream.com?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">HD Quality Streaming</h3>
              <p className="text-muted-foreground">
                Enjoy crystal clear HD streaming for all matches
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Updates</h3>
              <p className="text-muted-foreground">
                Real-time scores and match updates
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Leagues</h3>
              <p className="text-muted-foreground">
                Access to Premier League, La Liga, Serie A, and more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
