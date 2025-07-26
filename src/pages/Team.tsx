import { useState } from "react";
import { Users, Shield, Zap, Target, Grid, List, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Team = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedSeason, setSelectedSeason] = useState("25/26");
  const [viewMode, setViewMode] = useState("gallery");

  const seasons = ["25/26", "24/25", "23/24", "22/23", "21/22", "20/21", "19/20", "18/19", "17/18", "16/17", "15/16", "14/15", "13/14", "12/13", "10/11", "09/10", "08/09", "07/08"];

  const players = [
    // Goalkeepers
    { name: "Ibrahim Iddrisu", number: 1, position: "Goalkeeper", dateOfBirth: "Apr 22, 1993", age: 32, nationality: "Ghana", marketValue: "-", category: "goalkeeper" },
    { name: "Tambe Charles Mchinda", number: 22, position: "Goalkeeper", dateOfBirth: "Apr 4, 1994", age: 31, nationality: "Nigeria", marketValue: "-", category: "goalkeeper" },
    { name: "Emeka Onyia", number: 23, position: "Goalkeeper", dateOfBirth: "Oct 29, 1998", age: 26, nationality: "Nigeria", marketValue: "-", category: "goalkeeper" },
    { name: "Muttaka Musa", number: 31, position: "Goalkeeper", dateOfBirth: "-", age: null, nationality: "Nigeria", marketValue: "-", category: "goalkeeper" },
    { name: "Abuchi Okeke", number: 35, position: "Goalkeeper", dateOfBirth: "-", age: null, nationality: "Nigeria", marketValue: "-", category: "goalkeeper" },
    
    // Defenders
    { name: "Imrana Ahmed", number: 12, position: "Defender", dateOfBirth: "-", age: null, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Abubakar Abdullahi", number: 35, position: "Defender", dateOfBirth: "-", age: null, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Abdullahi Musa", number: null, position: "Centre-Back", dateOfBirth: "Feb 1, 1996", age: 29, nationality: "Nigeria", marketValue: "-", category: "defender", club: "Katsina United FC" },
    { name: "Mohammed Mukhtar", number: null, position: "Centre-Back", dateOfBirth: "Apr 6, 2004", age: 21, nationality: "Nigeria", marketValue: "-", category: "defender", club: "El-Kanemi Warriors" },
    { name: "Habibu Yakubu", number: 5, position: "Centre-Back", dateOfBirth: "Aug 31, 2000", age: 24, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Ibrahim Inuwa", number: 6, position: "Centre-Back", dateOfBirth: "Apr 21, 2004", age: 21, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Kennedy Uzogara", number: 15, position: "Centre-Back", dateOfBirth: "-", age: null, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Zaharaddeen Bello", number: 19, position: "Centre-Back", dateOfBirth: "Dec 21, 1997", age: 27, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Gabriel Ugochukwu", number: 26, position: "Centre-Back", dateOfBirth: "-", age: null, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Dawud Ibrahim", number: 27, position: "Left-Back", dateOfBirth: "Nov 2, 2005", age: 19, nationality: "Ghana", marketValue: "-", category: "defender" },
    { name: "Fahad Usman", number: 30, position: "Left-Back", dateOfBirth: "Dec 17, 2000", age: 24, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Chinedu Ozor", number: null, position: "Right-Back", dateOfBirth: "Jun 29, 1993", age: 32, nationality: "Nigeria", marketValue: "-", category: "defender", club: "FC Heartland" },
    { name: "Mustapha Jibrin", number: null, position: "Right-Back", dateOfBirth: "-", age: null, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Ali Abdullahi", number: 2, position: "Right-Back", dateOfBirth: "Jan 23, 2004", age: 21, nationality: "Nigeria", marketValue: "-", category: "defender" },
    { name: "Mubarak Lawan", number: 29, position: "Right-Back", dateOfBirth: "Jan 17, 2004", age: 21, nationality: "Nigeria", marketValue: "-", category: "defender" },
    
    // Midfielders
    { name: "Suleiman Idris", number: null, position: "Defensive Midfield", dateOfBirth: "Oct 19, 2005", age: 19, nationality: "Nigeria", marketValue: "€50k", category: "midfielder", club: "GBS Academy" },
    { name: "Abdullahi Shehu", number: 4, position: "Defensive Midfield", dateOfBirth: "Mar 12, 1993", age: 32, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    { name: "Aminu Sani", number: 24, position: "Defensive Midfield", dateOfBirth: "Jul 16, 2004", age: 21, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    { name: "Zilkifilu Rabiu", number: 13, position: "Central Midfield", dateOfBirth: "Jan 1, 2002", age: 23, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    { name: "Charles Ezeh", number: 20, position: "Central Midfield", dateOfBirth: "Nov 18, 1997", age: 27, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    { name: "Aminu Mohammed", number: null, position: "Central Midfield", dateOfBirth: "Jul 11, 2004", age: 21, nationality: "Nigeria", marketValue: "-", category: "midfielder", club: "El-Kanemi Warriors" },
    { name: "Yusuf Maigoro", number: 8, position: "Central Midfield", dateOfBirth: "Nov 11, 2000", age: 24, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    { name: "Umar Sani", number: 25, position: "Central Midfield", dateOfBirth: "Dec 22, 2005", age: 19, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    { name: "Auwalu Naziru", number: 34, position: "Central Midfield", dateOfBirth: "May 15, 2003", age: 22, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    { name: "Rabiu Ali", number: 10, position: "Attacking Midfield", dateOfBirth: "Sep 27, 1980", age: 44, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    { name: "Ibrahim Sani", number: 21, position: "Attacking Midfield", dateOfBirth: "Jan 30, 2007", age: 18, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    { name: "Bright Ihionu", number: 32, position: "Attacking Midfield", dateOfBirth: "Aug 1, 1991", age: 33, nationality: "Nigeria", marketValue: "-", category: "midfielder" },
    
    // Forwards
    { name: "Ahmed Musa", number: 7, position: "Left Winger", dateOfBirth: "Oct 14, 1992", age: 32, nationality: "Nigeria", marketValue: "€450k", category: "forward" },
    { name: "Auwalu Ali Malam", number: 17, position: "Left Winger", dateOfBirth: "Jun 6, 2001", age: 24, nationality: "Nigeria", marketValue: "-", category: "forward" },
    { name: "Mustapha Umar", number: 11, position: "Right Winger", dateOfBirth: "Nov 28, 2005", age: 19, nationality: "Nigeria", marketValue: "-", category: "forward" },
    { name: "Mustapha Salisu", number: 16, position: "Right Winger", dateOfBirth: "Nov 17, 2000", age: 24, nationality: "Nigeria", marketValue: "-", category: "forward" },
    { name: "Sudais Ali Baba", number: 18, position: "Centre-Forward", dateOfBirth: "Aug 25, 2000", age: 24, nationality: "Nigeria", marketValue: "-", category: "forward" },
    { name: "Chiedozie Okorie", number: null, position: "Centre-Forward", dateOfBirth: "Nov 21, 1998", age: 26, nationality: "Nigeria", marketValue: "-", category: "forward", club: "Enugu Rangers IFC" },
    { name: "Mohammed Hadi", number: 9, position: "Centre-Forward", dateOfBirth: "Aug 8, 1996", age: 28, nationality: "Nigeria", marketValue: "-", category: "forward" },
    { name: "Abdulmajid Aminu", number: 9, position: "Centre-Forward", dateOfBirth: "-", age: null, nationality: "Nigeria", marketValue: "-", category: "forward" },
    { name: "Naibe Akpesiri", number: 14, position: "Centre-Forward", dateOfBirth: "Jun 26, 1997", age: 28, nationality: "Nigeria", marketValue: "-", category: "forward" },
    { name: "Jerry Alex", number: 28, position: "Centre-Forward", dateOfBirth: "Nov 19, 2002", age: 22, nationality: "Nigeria", marketValue: "-", category: "forward" },
    { name: "Eshimitu Gomino Eya", number: 38, position: "Striker", dateOfBirth: "-", age: null, nationality: "Nigeria", marketValue: "-", category: "forward" },
  ];

  const filterPlayers = (category: string) => {
    if (category === "all") return players;
    return players.filter(player => player.category === category);
  };

  const getPositionIcon = (category: string) => {
    switch (category) {
      case "goalkeeper":
        return <Shield className="h-5 w-5" />;
      case "defender":
        return <Shield className="h-5 w-5" />;
      case "midfielder":
        return <Zap className="h-5 w-5" />;
      case "forward":
        return <Target className="h-5 w-5" />;
      default:
        return <Users className="h-5 w-5" />;
    }
  };

  const getPositionColor = (category: string) => {
    switch (category) {
      case "goalkeeper":
        return "bg-blue-500";
      case "defender":
        return "bg-red-500";
      case "midfielder":
        return "bg-green-500";
      case "forward":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const tabs = [
    { id: "all", label: "All Players", count: players.length },
    { id: "goalkeeper", label: "Goalkeepers", count: players.filter(p => p.category === "goalkeeper").length },
    { id: "defender", label: "Defenders", count: players.filter(p => p.category === "defender").length },
    { id: "midfielder", label: "Midfielders", count: players.filter(p => p.category === "midfielder").length },
    { id: "forward", label: "Forwards", count: players.filter(p => p.category === "forward").length },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Team Squad
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Meet the talented players who wear the Kano Pillars colors with pride
          </p>
        </div>
      </section>

      {/* Squad Statistics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{players.filter(p => p.category === "goalkeeper").length}</div>
              <div className="text-gray-600">Goalkeepers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{players.filter(p => p.category === "defender").length}</div>
              <div className="text-gray-600">Defenders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{players.filter(p => p.category === "midfielder").length}</div>
              <div className="text-gray-600">Midfielders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">{players.filter(p => p.category === "forward").length}</div>
              <div className="text-gray-600">Forwards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Filter by season:</span>
              <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {seasons.map((season) => (
                    <SelectItem key={season} value={season}>
                      {season}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex gap-1">
                <Button
                  variant={viewMode === "compact" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("compact")}
                  className="px-3"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "detailed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("detailed")}
                  className="px-3"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "gallery" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("gallery")}
                  className="px-3"
                >
                  <Image className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`${activeTab === tab.id ? "bg-yellow-500 hover:bg-yellow-600 text-black" : ""}`}
              >
                {tab.label} ({tab.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Players Display */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "compact" && (
            <Card className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Player</TableHead>
                    <TableHead>Date of birth/Age</TableHead>
                    <TableHead>Nat.</TableHead>
                    <TableHead>Market value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filterPlayers(activeTab).map((player, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono">{player.number || "-"}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{player.name}</div>
                          <div className="text-sm text-gray-500">{player.position}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {player.dateOfBirth} {player.age && `(${player.age})`}
                        </div>
                      </TableCell>
                      <TableCell>{player.nationality}</TableCell>
                      <TableCell>{player.marketValue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          )}

          {viewMode === "detailed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filterPlayers(activeTab).map((player, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-full ${getPositionColor(player.category)} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-bold text-xl">{player.number || "?"}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{player.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{player.position}</p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                          <div>
                            <span className="font-medium">Age:</span> {player.age || "N/A"}
                          </div>
                          <div>
                            <span className="font-medium">Nationality:</span> {player.nationality}
                          </div>
                          <div>
                            <span className="font-medium">DOB:</span> {player.dateOfBirth}
                          </div>
                          <div>
                            <span className="font-medium">Value:</span> {player.marketValue}
                          </div>
                          {player.club && (
                            <div className="col-span-2">
                              <span className="font-medium">Club:</span> {player.club}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {viewMode === "gallery" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filterPlayers(activeTab).map((player, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-r from-yellow-200 to-green-200 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-16 h-16 rounded-full ${getPositionColor(player.category)} flex items-center justify-center mx-auto mb-2`}>
                            <span className="text-white font-bold text-xl">{player.number || "?"}</span>
                          </div>
                          {getPositionIcon(player.category)}
                        </div>
                      </div>
                      <div className={`absolute top-2 right-2 ${getPositionColor(player.category)} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                        {player.number || "?"}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-1">{player.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{player.position}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Age: {player.age || "N/A"}</span>
                        <span>{player.nationality}</span>
                      </div>
                      {player.marketValue !== "-" && (
                        <div className="mt-2 text-xs font-medium text-green-600">
                          {player.marketValue}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Technical Staff */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Technical Staff
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The experienced professionals guiding our team to success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IM</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Ibrahim Musa</h3>
                <p className="text-yellow-600 font-medium mb-3">Head Coach</p>
                <p className="text-gray-600 text-sm">Former Nigerian international with extensive coaching experience in the NPFL</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Abdullahi Mohammed</h3>
                <p className="text-yellow-600 font-medium mb-3">Assistant Coach</p>
                <p className="text-gray-600 text-sm">Tactical specialist focused on defensive organization and set pieces</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DA</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Dr. Ahmad Sule</h3>
                <p className="text-yellow-600 font-medium mb-3">Team Doctor</p>
                <p className="text-gray-600 text-sm">Ensuring player health and fitness with modern sports medicine approaches</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
