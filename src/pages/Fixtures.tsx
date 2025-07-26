
import { useState } from "react";
import { Calendar, MapPin, Clock, Trophy, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface UpcomingMatch {
  date: string;
  time: string;
  opponent: string;
  venue: string;
  type: string;
  competition: string;
  status: "upcoming";
}

interface CompletedMatch {
  date: string;
  opponent: string;
  venue: string;
  type: string;
  score: string;
  competition: string;
  status: "completed";
}

type Match = UpcomingMatch | CompletedMatch;

const Fixtures = () => {
  const [filter, setFilter] = useState("all");

  const fixtures: UpcomingMatch[] = [
    {
      date: "2024-12-15",
      time: "15:00",
      opponent: "Enyimba FC",
      venue: "Sani Abacha Stadium, Kano",
      type: "home",
      competition: "NPFL",
      status: "upcoming"
    },
    {
      date: "2024-12-22",
      time: "16:00",
      opponent: "Rangers International",
      venue: "Cathedral Stadium, Enugu",
      type: "away",
      competition: "NPFL",
      status: "upcoming"
    },
    {
      date: "2024-12-29",
      time: "15:30",
      opponent: "Plateau United",
      venue: "Sani Abacha Stadium, Kano",
      type: "home",
      competition: "NPFL",
      status: "upcoming"
    },
    {
      date: "2025-01-05",
      time: "17:00",
      opponent: "Rivers United",
      venue: "Adokiye Amiesimaka Stadium, Port Harcourt",
      type: "away",
      competition: "NPFL",
      status: "upcoming"
    },
    {
      date: "2025-01-12",
      time: "15:00",
      opponent: "Shooting Stars",
      venue: "Sani Abacha Stadium, Kano",
      type: "home",
      competition: "NPFL",
      status: "upcoming"
    }
  ];

  const results: CompletedMatch[] = [
    {
      date: "2024-12-08",
      opponent: "Sunshine Stars",
      venue: "Sani Abacha Stadium, Kano",
      type: "home",
      score: "2-1",
      competition: "NPFL",
      status: "completed"
    },
    {
      date: "2024-12-01",
      opponent: "Kwara United",
      venue: "Kwara Stadium, Ilorin",
      type: "away",
      score: "1-1",
      competition: "NPFL",
      status: "completed"
    },
    {
      date: "2024-11-24",
      opponent: "Heartland FC",
      venue: "Sani Abacha Stadium, Kano",
      type: "home",
      score: "3-0",
      competition: "NPFL",
      status: "completed"
    },
    {
      date: "2024-11-17",
      opponent: "Akwa United",
      venue: "Godswill Akpabio Stadium, Uyo",
      type: "away",
      score: "0-2",
      competition: "NPFL",
      status: "completed"
    },
    {
      date: "2024-11-10",
      opponent: "Bendel Insurance",
      venue: "Sani Abacha Stadium, Kano",
      type: "home",
      score: "1-0",
      competition: "NPFL",
      status: "completed"
    }
  ];

  const allMatches: Match[] = [...fixtures, ...results].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredMatches = allMatches.filter(match => {
    if (filter === "all") return true;
    if (filter === "upcoming") return match.status === "upcoming";
    if (filter === "completed") return match.status === "completed";
    if (filter === "home") return match.type === "home";
    if (filter === "away") return match.type === "away";
    return true;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getMatchTypeColor = (type: string) => {
    return type === "home" ? "bg-green-500" : "bg-yellow-500";
  };

  const getStatusColor = (status: string) => {
    return status === "upcoming" ? "bg-blue-500" : "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fixtures & Results
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Stay updated with our match schedule and recent results
          </p>
        </div>
      </section>

      {/* Next Match Highlight */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Next Match</h2>
          </div>
          
          {fixtures.length > 0 && (
            <Card className="max-w-2xl mx-auto border-2 border-yellow-400 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-green-500 text-white">
                <CardTitle className="text-center text-2xl">
                  vs {fixtures[0].opponent}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center justify-center">
                    <Calendar className="h-5 w-5 mr-2 text-gray-600" />
                    <span>{formatDate(fixtures[0].date)}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="h-5 w-5 mr-2 text-gray-600" />
                    <span>{fixtures[0].time}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="h-5 w-5 mr-2 text-gray-600" />
                    <span>{fixtures[0].type === "home" ? "Home" : "Away"}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{fixtures[0].venue}</p>
                <Badge className={`${getMatchTypeColor(fixtures[0].type)} text-white`}>
                  {fixtures[0].competition}
                </Badge>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "All Matches" },
              { id: "upcoming", label: "Upcoming" },
              { id: "completed", label: "Results" },
              { id: "home", label: "Home" },
              { id: "away", label: "Away" }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={filter === tab.id ? "default" : "outline"}
                onClick={() => setFilter(tab.id)}
                className={`${filter === tab.id ? "bg-yellow-500 hover:bg-yellow-600 text-black" : ""}`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Matches List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredMatches.map((match, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <Badge className={`${getStatusColor(match.status)} text-white`}>
                          {match.status}
                        </Badge>
                        <Badge className={`${getMatchTypeColor(match.type)} text-white`}>
                          {match.type}
                        </Badge>
                        <Badge variant="outline">{match.competition}</Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">
                        Kano Pillars vs {match.opponent}
                        {match.status === "completed" && (
                          <span className="ml-4 text-lg text-gray-600">
                            {(match as CompletedMatch).score}
                          </span>
                        )}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(match.date)}
                        </div>
                        {match.status === "upcoming" && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {(match as UpcomingMatch).time}
                          </div>
                        )}
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {match.venue}
                        </div>
                      </div>
                    </div>
                    
                    {match.status === "upcoming" && (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Buy Tickets
                        </Button>
                        <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                          Set Reminder
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Season Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Season Statistics
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Matches Played</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">8</div>
              <div className="text-gray-600">Wins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Draws</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">3</div>
              <div className="text-gray-600">Losses</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fixtures;
