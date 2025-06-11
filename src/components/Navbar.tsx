
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Home } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Play className="h-8 w-8" />
            <span className="text-xl font-bold">Streams.com</span>
          </Link>
          
          <div className="flex space-x-4">
            <Button
              variant={isActive("/") ? "secondary" : "ghost"}
              asChild
              className=" hover:text-primary-foreground/90"
            >
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
            
            <Button
              variant={isActive("/matches") ? "secondary" : "ghost"}
              asChild
              className=" hover:text-primary-foreground/90"
            >
              <Link to="/matches">
                <Calendar className="h-4 w-4 mr-2" />
                Matches
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
