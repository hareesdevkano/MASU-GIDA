
import { useState } from "react";
import { Play, Image, Calendar, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "Victory Celebration vs Sunshine Stars",
      category: "matches",
      date: "2024-12-08",
      season: "2024/25",
      thumbnail: "photo-1500673922987-e212871fec22"
    },
    {
      id: 2,
      type: "video",
      title: "Match Highlights: Kano Pillars 3-0 Heartland",
      category: "highlights",
      date: "2024-11-24",
      season: "2024/25",
      thumbnail: "photo-1605810230434-7631ac76ec81"
    },
    {
      id: 3,
      type: "image",
      title: "Training Session at Sani Abacha Stadium",
      category: "training",
      date: "2024-12-10",
      season: "2024/25",
      thumbnail: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 4,
      type: "image",
      title: "Fan Zone Atmosphere",
      category: "fans",
      date: "2024-12-01",
      season: "2024/25",
      thumbnail: "photo-1472396961693-142e6e269027"
    },
    {
      id: 5,
      type: "video",
      title: "Pre-Match Team Talk",
      category: "behind-scenes",
      date: "2024-11-30",
      season: "2024/25",
      thumbnail: "photo-1466721591366-2d5fba72006d"
    },
    {
      id: 6,
      type: "image",
      title: "New Jersey Launch Event",
      category: "events",
      date: "2024-11-15",
      season: "2024/25",
      thumbnail: "photo-1500673922987-e212871fec22"
    },
    {
      id: 7,
      type: "image",
      title: "Youth Academy Training",
      category: "training",
      date: "2024-11-20",
      season: "2024/25",
      thumbnail: "photo-1605810230434-7631ac76ec81"
    },
    {
      id: 8,
      type: "video",
      title: "Player Interview: Rabiu Ali",
      category: "interviews",
      date: "2024-11-18",
      season: "2024/25",
      thumbnail: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 9,
      type: "image",
      title: "Community Outreach Program",
      category: "events",
      date: "2024-11-12",
      season: "2024/25",
      thumbnail: "photo-1472396961693-142e6e269027"
    },
    {
      id: 10,
      type: "image",
      title: "Stadium Renovation Progress",
      category: "stadium",
      date: "2024-11-05",
      season: "2024/25",
      thumbnail: "photo-1466721591366-2d5fba72006d"
    },
    {
      id: 11,
      type: "video",
      title: "Season Review Documentary",
      category: "highlights",
      date: "2024-10-30",
      season: "2023/24",
      thumbnail: "photo-1500673922987-e212871fec22"
    },
    {
      id: 12,
      type: "image",
      title: "Championship Celebration",
      category: "events",
      date: "2024-05-20",
      season: "2023/24",
      thumbnail: "photo-1605810230434-7631ac76ec81"
    }
  ];

  const categories = [
    { id: "all", label: "All Media", count: mediaItems.length },
    { id: "matches", label: "Matches", count: mediaItems.filter(item => item.category === "matches").length },
    { id: "training", label: "Training", count: mediaItems.filter(item => item.category === "training").length },
    { id: "fans", label: "Fans", count: mediaItems.filter(item => item.category === "fans").length },
    { id: "events", label: "Events", count: mediaItems.filter(item => item.category === "events").length },
    { id: "highlights", label: "Highlights", count: mediaItems.filter(item => item.category === "highlights").length },
    { id: "interviews", label: "Interviews", count: mediaItems.filter(item => item.category === "interviews").length }
  ];

  const filteredItems = mediaItems.filter(item => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      matches: "bg-red-500",
      training: "bg-blue-500",
      fans: "bg-yellow-500",
      events: "bg-green-500",
      highlights: "bg-purple-500",
      interviews: "bg-orange-500",
      stadium: "bg-gray-500",
      "behind-scenes": "bg-pink-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Relive the memorable moments, exciting matches, and behind-the-scenes action
          </p>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {mediaItems.filter(item => item.type === "image").length}
              </div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {mediaItems.filter(item => item.type === "video").length}
              </div>
              <div className="text-gray-600">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Seasons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">7</div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`${filter === category.id ? "bg-yellow-500 hover:bg-yellow-600 text-black" : ""}`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="relative group">
                  <div className="h-48 bg-gradient-to-r from-yellow-200 to-green-200 flex items-center justify-center">
                    {item.type === "image" ? (
                      <Image className="h-12 w-12 text-gray-600" />
                    ) : (
                      <Play className="h-12 w-12 text-gray-600" />
                    )}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === "video" ? (
                      <Play className="h-16 w-16 text-white" />
                    ) : (
                      <Image className="h-16 w-16 text-white" />
                    )}
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge className={`${item.type === "video" ? "bg-red-500" : "bg-blue-500"} text-white`}>
                      {item.type}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge className={`${getCategoryColor(item.category)} text-white`}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(item.date)}
                    </div>
                    <span>{item.season}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Video
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our latest highlights and exclusive content
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-gradient-to-r from-yellow-200 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-24 w-24 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Season Highlights 2024/25</h3>
                  <p className="text-gray-600">Best moments from our current season</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
