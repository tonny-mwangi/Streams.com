
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Play, Users, MessageCircle } from "lucide-react";

// Mock data - this will be replaced with MongoDB data
const matchData = {
  "1": {
    id: "1",
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    league: "Premier League",
    date: "2024-01-15",
    time: "15:00",
    status: "live" as const,
    homeScore: 2,
    awayScore: 1,
    streamUrl: "https://example.com/stream", // This would be your actual stream URL
  },
};

const Watch = () => {
  const { matchId } = useParams();
  const match = matchData[matchId as keyof typeof matchData];

  if (!match) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Match not found</h1>
            <Button asChild>
              <Link to="/matches">Back to Matches</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/matches">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Matches
          </Link>
        </Button>

        {/* Match Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">
              {match.homeTeam} vs {match.awayTeam}
            </h1>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              LIVE
            </span>
          </div>
          <p className="text-muted-foreground">{match.league} • {match.date} • {match.time}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-0">
                {/* Video Player Placeholder */}
                <div className="relative bg-black rounded-t-lg aspect-video flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Live Stream Player</p>
                    <p className="text-sm opacity-75 mt-2">
                      Connect your streaming service here
                    </p>
                  </div>
                </div>
                
                {/* Match Score */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-center">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{match.homeTeam}</h3>
                      <div className="text-4xl font-bold mt-2">{match.homeScore}</div>
                    </div>
                    
                    <div className="px-6">
                      <div className="text-2xl font-bold text-muted-foreground">VS</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {match.homeScore} - {match.awayScore}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{match.awayTeam}</h3>
                      <div className="text-4xl font-bold mt-2">{match.awayScore}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Match Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Match Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">League:</span>
                    <span className="font-medium">{match.league}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{match.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{match.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-medium text-red-500">LIVE</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Chat Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/20 rounded flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Live chat feature<br />
                    Coming soon!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
