
import { useState } from "react";
import { Calendar, User, Search, Tag, Share2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const newsArticles = [
    {
      id: 1,
      title: "Kano Pillars Sign Promising Young Striker from Youth Academy",
      excerpt: "The club has promoted 18-year-old striker Alhassan Ibrahim from the youth academy to the senior team following impressive performances in recent tournaments.",
      content: "Full article content here...",
      author: "Sports Desk",
      date: "2024-12-10",
      tags: ["transfers", "youth", "squad"],
      image: "photo-1500673922987-e212871fec22",
      featured: true
    },
    {
      id: 2,
      title: "Victory Against Sunshine Stars Keeps Title Hopes Alive",
      excerpt: "A dominant 2-1 victory over Sunshine Stars at the Sani Abacha Stadium has kept Kano Pillars in contention for the NPFL title.",
      content: "Match report and analysis...",
      author: "Match Reporter",
      date: "2024-12-08",
      tags: ["match-report", "victory", "npfl"],
      image: "photo-1605810230434-7631ac76ec81",
      featured: false
    },
    {
      id: 3,
      title: "Youth Academy Graduation Ceremony Celebrates New Talent",
      excerpt: "Twenty young players graduated from the Kano Pillars Youth Academy in a ceremony attended by club officials and their families.",
      content: "Ceremony details and graduate profiles...",
      author: "Academy News",
      date: "2024-12-05",
      tags: ["youth", "academy", "community"],
      image: "photo-1488590528505-98d2b5aba04b",
      featured: false
    },
    {
      id: 4,
      title: "Captain Rabiu Ali Reaches 200 Appearances Milestone",
      excerpt: "Club captain and veteran midfielder Rabiu Ali celebrated his 200th appearance for Kano Pillars in the recent match against Kwara United.",
      content: "Player profile and career highlights...",
      author: "Player News",
      date: "2024-12-01",
      tags: ["milestone", "players", "achievement"],
      image: "photo-1472396961693-142e6e269027",
      featured: false
    },
    {
      id: 5,
      title: "Stadium Renovation Project Enters Final Phase",
      excerpt: "The ongoing renovation of the Sani Abacha Stadium is expected to be completed before the start of the new season, featuring improved facilities.",
      content: "Renovation details and timeline...",
      author: "Infrastructure News",
      date: "2024-11-28",
      tags: ["stadium", "infrastructure", "development"],
      image: "photo-1466721591366-2d5fba72006d",
      featured: false
    },
    {
      id: 6,
      title: "Community Outreach Program Launched in Kano Schools",
      excerpt: "Kano Pillars FC has launched a new community outreach program aimed at promoting football and education in local schools across Kano State.",
      content: "Program details and objectives...",
      author: "Community Relations",
      date: "2024-11-25",
      tags: ["community", "education", "outreach"],
      image: "photo-1500673922987-e212871fec22",
      featured: false
    },
    {
      id: 7,
      title: "New Technical Director Appointed to Strengthen Squad",
      excerpt: "Former Nigerian international Abdullahi Mohammed has been appointed as the new Technical Director, bringing wealth of experience to the club.",
      content: "Appointment details and background...",
      author: "Club News",
      date: "2024-11-20",
      tags: ["appointment", "management", "technical"],
      image: "photo-1605810230434-7631ac76ec81",
      featured: false
    },
    {
      id: 8,
      title: "Fan Club Membership Reaches New Record High",
      excerpt: "The official Kano Pillars Fan Club has welcomed its 50,000th member, marking a significant milestone in the club's growing popularity.",
      content: "Fan club statistics and activities...",
      author: "Fan Relations",
      date: "2024-11-15",
      tags: ["fans", "membership", "milestone"],
      image: "photo-1488590528505-98d2b5aba04b",
      featured: false
    }
  ];

  const tags = [
    { id: "all", label: "All News", count: newsArticles.length },
    { id: "match-report", label: "Match Reports", count: newsArticles.filter(article => article.tags.includes("match-report")).length },
    { id: "transfers", label: "Transfers", count: newsArticles.filter(article => article.tags.includes("transfers")).length },
    { id: "youth", label: "Youth Academy", count: newsArticles.filter(article => article.tags.includes("youth")).length },
    { id: "community", label: "Community", count: newsArticles.filter(article => article.tags.includes("community")).length },
    { id: "players", label: "Players", count: newsArticles.filter(article => article.tags.includes("players")).length }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "all" || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTagColor = (tag: string) => {
    const colors = {
      "match-report": "bg-green-500",
      "transfers": "bg-blue-500",
      "youth": "bg-yellow-500",
      "community": "bg-purple-500",
      "players": "bg-red-500",
      "milestone": "bg-orange-500",
      "stadium": "bg-gray-500",
      "infrastructure": "bg-indigo-500",
      "appointment": "bg-pink-500",
      "management": "bg-teal-500"
    };
    return colors[tag] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest News
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Stay updated with the latest happenings at Kano Pillars FC
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search news articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Button
                key={tag.id}
                variant={selectedTag === tag.id ? "default" : "outline"}
                onClick={() => setSelectedTag(tag.id)}
                className={`${selectedTag === tag.id ? "bg-yellow-500 hover:bg-yellow-600 text-black" : ""}`}
                size="sm"
              >
                <Tag className="h-4 w-4 mr-2" />
                {tag.label} ({tag.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedTag === "all" && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Story</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-to-r from-yellow-200 to-green-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Tag className="h-16 w-16 mx-auto mb-4" />
                    <p>Featured Image</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredArticle.tags.map((tag) => (
                      <Badge key={tag} className={`${getTagColor(tag)} text-white`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(featuredArticle.date)}
                      </div>
                    </div>
                    
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="h-48 bg-gradient-to-r from-yellow-200 to-green-200 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Tag className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">News Image</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {article.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} className={`${getTagColor(tag)} text-white text-xs`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="font-bold text-lg mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Never Miss an Update
          </h2>
          <p className="text-xl text-white mb-8">
            Subscribe to our newsletter for the latest news and match updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white border-white"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
