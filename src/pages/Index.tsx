import { ArrowRight, Calendar, Trophy, Users, Target, Star, MapPin, Clock, Play, ChevronRight, Zap, Award, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const upcomingMatches = [
    { date: "Dec 15", opponent: "Enyimba FC", venue: "Home", time: "3:00 PM" },
    { date: "Dec 22", opponent: "Rangers FC", venue: "Away", time: "4:00 PM" },
    { date: "Dec 29", opponent: "Plateau United", venue: "Home", time: "3:30 PM" },
  ];

  const latestNews = [
    { 
      title: "New Season Jersey Unveiled: A Fresh Look for 2025/26", 
      date: "Dec 12, 2024", 
      excerpt: "Kano Pillars FC proudly presents the official home jersey for the upcoming season, featuring premium design and our valued sponsors.",
      image: "/lovable-uploads/040a5637-47e5-402e-9f90-4e2dd0abb901.png",
      category: "Kit Launch"
    },
    { 
      title: "Team Training Excellence at Sani Abacha Stadium", 
      date: "Dec 10, 2024", 
      excerpt: "Coach delivers tactical instructions as the squad prepares intensively for the upcoming season challenges.",
      image: "/lovable-uploads/3ba0a5f0-4ad3-4001-befd-4f459f0ad66b.png",
      category: "Training"
    },
    { 
      title: "Pre-Season Conditioning Program in Full Swing", 
      date: "Dec 8, 2024", 
      excerpt: "Players maintain peak physical condition with dedicated running drills and fitness training sessions.",
      image: "/lovable-uploads/7088bbba-ac59-4c18-9851-b1af03739f96.png",
      category: "Fitness"
    },
  ];

  const highlights = [
    {
      title: "Best Goals of the Season",
      thumbnail: "/lovable-uploads/99d09ede-cb63-4e27-806b-7530133e22e0.png",
      duration: "3:45",
      views: "125K"
    },
    {
      title: "Victory Celebrations",
      thumbnail: "/lovable-uploads/9a4bbecd-eafb-40fb-ad36-4a8759b398ca.png",
      duration: "2:30",
      views: "89K"
    },
    {
      title: "Training Highlights",
      thumbnail: "/lovable-uploads/a244aada-2364-46a1-beb3-7c2ea6bfef71.png",
      duration: "4:15",
      views: "67K"
    },
    {
      title: "Fan Moments",
      thumbnail: "/lovable-uploads/7eb0809a-33e8-46dc-99c6-f776cef54ba4.png",
      duration: "1:50",
      views: "156K"
    }
  ];

  const achievements = [
    { icon: Trophy, title: "8 League Titles", description: "Nigerian Premier League Champions" },
    { icon: Award, title: "34 Years Legacy", description: "Established 1990" },
    { icon: Shield, title: "Premium Training", description: "State-of-the-art facilities" },
    { icon: Heart, title: "50K+ Fans", description: "Loyal supporter base" }
  ];

  const sponsors = [
    { name: "Kano State Government", logo: "text", description: "Official State Partner" },
    { name: "Rambo Mosquito", logo: "text", description: "Health & Safety Partner" },
    { name: "RFI Hausa", logo: "text", description: "Media Partner" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-green-600/20 to-yellow-500/20 animate-pulse"></div>
          <img 
            src="/lovable-uploads/3ba0a5f0-4ad3-4001-befd-4f459f0ad66b.png" 
            alt="Kano Pillars Team Training" 
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-yellow-400 animate-bounce-slow hidden lg:block">
          <Star className="h-12 w-12 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-32 right-20 text-green-400 animate-pulse hidden lg:block">
          <Trophy className="h-16 w-16 drop-shadow-lg" />
        </div>
        <div className="absolute top-1/3 right-10 text-yellow-300 animate-bounce-slow hidden lg:block" style={{animationDelay: '1s'}}>
          <Target className="h-10 w-10 drop-shadow-lg" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-7xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <img 
              src="/lovable-uploads/a8f16e82-757d-41bd-ab71-a9a735271f0d.png" 
              alt="Kano Pillars FC Logo" 
              className="w-44 h-44 mx-auto mb-8 drop-shadow-2xl animate-bounce-in"
            />
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tight font-poppins">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 animate-slide-up drop-shadow-lg">
              SAI MASU
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 animate-slide-up drop-shadow-lg" style={{animationDelay: '0.3s'}}>
              GIDA
            </span>
          </h1>
          
          <div className="mb-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Badge className="bg-yellow-500/90 text-black text-xl px-8 py-3 uppercase font-bold backdrop-blur-sm border border-yellow-400">
              Pride of Kano Since 1990
            </Badge>
          </div>
          
          <p className="text-xl md:text-2xl mb-16 text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.9s'}}>
            Nigeria's Premier Football Club • Champions on the Field, Legends in the Heart
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '1.2s'}}>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-12 py-6 text-xl uppercase rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/25">
              <Link to="/fixtures" className="flex items-center">
                <Calendar className="mr-4 h-7 w-7" />
                Upcoming Fixtures
              </Link>
            </Button>
            
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-12 py-6 text-xl uppercase rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-green-600/25">
              <Link to="/store" className="flex items-center">
                <Trophy className="mr-4 h-7 w-7" />
                Official Store
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-white border-3 border-white/50 hover:bg-white/10 hover:border-white backdrop-blur-sm font-bold px-12 py-6 text-xl uppercase rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Link to="/fanzone" className="flex items-center">
                <Users className="mr-4 h-7 w-7" />
                Join Fan Club
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ChevronRight className="h-6 w-6 rotate-90" />
          </div>
        </div>
      </section>

      {/* New Jersey Showcase */}
      <section className="py-32 bg-gradient-to-br from-yellow-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.yellow.100),transparent)] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,theme(colors.green.100),transparent)] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-yellow-500 text-black text-lg px-8 py-3 uppercase font-bold mb-6">
              🆕 New Release
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-poppins">
              2025/26 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-green-600">Official Jersey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Embrace the new season with our premium home jersey featuring cutting-edge design and our proud partnership sponsors
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-green-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                <CardContent className="p-12">
                  <img 
                    src="/lovable-uploads/040a5637-47e5-402e-9f90-4e2dd0abb901.png" 
                    alt="Kano Pillars FC 2025/2026 Home Jersey" 
                    className="w-full h-auto max-w-lg mx-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-6 font-poppins">
                  Premium Performance Jersey
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Advanced Fabric Technology</h4>
                      <p className="text-gray-600">Moisture-wicking performance fabric for optimal comfort and breathability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Authentic Design</h4>
                      <p className="text-gray-600">Official club jersey with premium AO sportswear and RFI Hausa branding</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-green-500 rounded-xl flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Show Your Pride</h4>
                      <p className="text-gray-600">Wear the colors that represent the heart and soul of Kano</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-10 py-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105">
                  Order Now - ₦25,000
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button variant="outline" className="text-lg px-10 py-6 rounded-2xl border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black font-bold transition-all duration-300 transform hover:scale-105">
                  <Link to="/store" className="flex items-center">
                    View in Store
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-100 to-green-100 rounded-2xl p-6 border border-yellow-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">🚚 Free Delivery in Kano</p>
                    <p className="text-gray-600">📞 WhatsApp: +234 803 123 4567</p>
                  </div>
                  <Badge className="bg-green-500 text-white text-sm px-4 py-2">
                    Limited Edition
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Fixture with Enhanced Design */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.yellow.500/20),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,theme(colors.green.600/20),transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-lg px-8 py-3 uppercase font-bold mb-6">
              ⚽ Next Match
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-8 font-poppins">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">Fixture</span>
            </h2>
          </div>
          
          <Card className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="text-center space-y-6">
                  <div className="w-36 h-36 mx-auto relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl transform group-hover:scale-110 transition-transform duration-300"></div>
                    <img 
                      src="/lovable-uploads/a8f16e82-757d-41bd-ab71-a9a735271f0d.png" 
                      alt="Kano Pillars FC" 
                      className="w-full h-full object-contain relative z-10 p-4"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-poppins text-yellow-400">Kano Pillars</h3>
                    <Badge className="bg-green-500 text-white mt-2 px-4 py-1 uppercase font-bold">
                      HOME
                    </Badge>
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <div className="text-8xl font-black text-white/20 font-poppins">VS</div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center text-xl bg-white/10 rounded-2xl py-4 px-6 backdrop-blur-sm">
                      <Calendar className="h-6 w-6 mr-3 text-yellow-400" />
                      <span className="font-bold">December 15, 2024</span>
                    </div>
                    <div className="flex items-center justify-center text-xl bg-white/10 rounded-2xl py-4 px-6 backdrop-blur-sm">
                      <Clock className="h-6 w-6 mr-3 text-yellow-400" />
                      <span className="font-bold">3:00 PM WAT</span>
                    </div>
                    <div className="flex items-center justify-center text-xl bg-white/10 rounded-2xl py-4 px-6 backdrop-blur-sm">
                      <MapPin className="h-6 w-6 mr-3 text-yellow-400" />
                      <span className="font-bold">Sani Abacha Stadium</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mx-auto flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-4xl font-poppins">ENY</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-poppins">Enyimba FC</h3>
                    <Badge className="bg-blue-500 text-white mt-2 px-4 py-1 uppercase font-bold">
                      AWAY
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-16 py-6 text-xl uppercase rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Get Tickets Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <p className="text-white/70 mt-4 text-lg">Starting from ₦1,500 • VIP packages available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Club Achievements */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-green-600 text-white text-lg px-8 py-3 uppercase font-bold mb-6">
              🏆 Our Legacy
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-poppins">
              Decades of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-green-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our founding in 1990 to today, we've built a legacy of success, passion, and unwavering commitment to Nigerian football
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden transform hover:scale-105">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-green-700 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Match Highlights */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-red-500 text-white text-lg px-8 py-3 uppercase font-bold mb-6">
              🎬 Video Hub
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-poppins">
              Match <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Relive the magic moments, spectacular goals, and unforgettable celebrations from our recent matches
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl transform hover:scale-105 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={highlight.thumbnail} 
                    alt={highlight.title}
                    className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-black/70 text-white text-sm px-3 py-1 mb-2">
                      {highlight.duration} • {highlight.views} views
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-red-600 transition-colors duration-300 font-poppins">
                    {highlight.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-12 py-6 text-xl uppercase rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105">
              Watch All Highlights
              <Play className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-blue-600 text-white text-lg px-8 py-3 uppercase font-bold mb-6">
              📰 Club News
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-poppins">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Updates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest news, transfer updates, and behind-the-scenes stories from Kano Pillars FC
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {latestNews.map((article, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 font-bold">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-8 bg-white">
                  <div className="flex items-center mb-4">
                    <Badge variant="outline" className="text-gray-500 border-gray-300 text-sm">
                      {article.date}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 font-poppins line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold uppercase rounded-xl shadow-lg transition-all duration-300 w-full">
                    Read Full Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-6 text-xl uppercase rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Link to="/news">
                View All News
                <ChevronRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Training Excellence Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.green.200/30),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.yellow.200/30),transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg px-8 py-3 uppercase font-bold mb-6">
              💪 Behind The Scenes
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-poppins">
              Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Witness the dedication, discipline and determination that drives our team to greatness at the Sani Abacha Stadium
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 via-blue-500 to-yellow-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-700">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/3ba0a5f0-4ad3-4001-befd-4f459f0ad66b.png" 
                    alt="Coach giving tactical instructions to Kano Pillars FC team" 
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold mb-2 font-poppins">Tactical Preparation</h3>
                    <p className="text-white/90">Coach delivers strategic insights during intensive team briefing</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-6 font-poppins">
                  World-Class Training Regime
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-green-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Team Coordination</h4>
                      <p className="text-gray-600">Expert coaching develops perfect synchronization and tactical awareness</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-blue-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Strategic Planning</h4>
                      <p className="text-gray-600">Detailed match preparation and tactical formations for maximum performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-yellow-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shrink-0">
                      <Zap className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Peak Performance</h4>
                      <p className="text-gray-600">Cutting-edge training methods to maintain elite fitness levels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-6 font-poppins">
                  Fitness & Conditioning
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-green-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shrink-0">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Cardiovascular Excellence</h4>
                      <p className="text-gray-600">Intensive running drills to build endurance and stamina for 90-minute dominance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-blue-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Injury Prevention</h4>
                      <p className="text-gray-600">Scientific conditioning programs to keep our players at peak health</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-yellow-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shrink-0">
                      <Trophy className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Championship Preparation</h4>
                      <p className="text-gray-600">Every training session designed to prepare for title-winning performances</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-700">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/7088bbba-ac59-4c18-9851-b1af03739f96.png" 
                    alt="Kano Pillars FC players during fitness training run" 
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold mb-2 font-poppins">Fitness Excellence</h3>
                    <p className="text-white/90">Players maintain peak physical condition through dedicated training</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.yellow.500/10),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,theme(colors.green.600/10),transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-yellow-500 to-green-600 text-black text-lg px-8 py-3 uppercase font-bold mb-6">
              🤝 Partnerships
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-8 font-poppins">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">Partners</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Proud to work alongside these distinguished organizations who share our vision for excellence in Nigerian football
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 rounded-3xl transform hover:scale-105">
                <CardContent className="p-12 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-green-600 rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <span className="text-4xl font-black text-white">{sponsor.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-poppins group-hover:text-yellow-400 transition-colors">
                    {sponsor.name}
                  </h3>
                  <p className="text-white/70 text-lg group-hover:text-white/90 transition-colors">
                    {sponsor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;