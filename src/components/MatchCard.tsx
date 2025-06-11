
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  date: string;
  time: string;
  status: "live" | "upcoming" | "finished";
  homeScore?: number;
  awayScore?: number;
}

interface MatchCardProps {
  match: Match;
}

const MatchCard = ({ match }: MatchCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live": return "text-red-500";
      case "upcoming": return "text-blue-500";
      case "finished": return "text-gray-500";
      default: return "text-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "live": return "LIVE";
      case "upcoming": return "Upcoming";
      case "finished": return "Finished";
      default: return status;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <span className="text-sm text-muted-foreground">{match.league}</span>
          <span className={`text-sm font-semibold ${getStatusColor(match.status)}`}>
            {getStatusText(match.status)}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="py-4">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="font-semibold">{match.homeTeam}</p>
            {match.homeScore !== undefined && (
              <p className="text-2xl font-bold mt-1">{match.homeScore}</p>
            )}
          </div>
          
          <div className="text-center px-4">
            <p className="text-sm text-muted-foreground">VS</p>
            {match.status === "finished" && match.homeScore !== undefined && match.awayScore !== undefined && (
              <p className="text-sm font-medium mt-1">
                {match.homeScore} - {match.awayScore}
              </p>
            )}
          </div>
          
          <div className="text-center flex-1">
            <p className="font-semibold">{match.awayTeam}</p>
            {match.awayScore !== undefined && (
              <p className="text-2xl font-bold mt-1">{match.awayScore}</p>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{match.date}</span>
          <Clock className="h-4 w-4" />
          <span>{match.time}</span>
        </div>
        
        {match.status === "live" && (
          <Button asChild size="sm">
            <Link to={`/watch/${match.id}`}>
              <Play className="h-4 w-4 mr-2" />
              Watch Live
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MatchCard;
