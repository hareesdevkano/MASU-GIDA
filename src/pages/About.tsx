
import { Trophy, Users, Target, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const achievements = [
    { year: "1990", title: "Club Founded", description: "Kano Pillars FC was established" },
    { year: "2008", title: "First NPFL Title", description: "Won our first Nigerian Premier League title" },
    { year: "2012", title: "Federation Cup", description: "Claimed the Federation Cup victory" },
    { year: "2014", title: "Second NPFL Title", description: "Successfully defended our league position" },
  ];

  const leadership = [
    { name: "Alhaji Haruna Ciroma", position: "Club Chairman", bio: "Visionary leader with over 20 years in football administration" },
    { name: "Ibrahim Musa", position: "Head Coach", bio: "Former Nigerian international with extensive coaching experience" },
    { name: "Abdullahi Mohammed", position: "Technical Director", bio: "Expert in youth development and player recruitment" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Kano Pillars FC
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover the rich history, achievements, and values that make us the Pride of Kano
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Rich History
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 1990, Kano Pillars Football Club has grown from humble beginnings to become one of Nigeria's most respected football institutions. Our journey began with a simple dream: to represent the proud city of Kano on the national stage.
                </p>
                <p>
                  Over three decades, we have built a legacy of excellence, developing talented players, winning prestigious titles, and creating unforgettable memories for our passionate fanbase known as "Sai Masu Gida" - which means "only we are at home" in Hausa.
                </p>
                <p>
                  Our home ground, the iconic Sani Abacha Stadium, has witnessed countless historic moments and continues to be the fortress where dreams come alive and legends are born.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-200 to-green-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Trophy className="h-24 w-24 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">34 Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A timeline of our greatest victories and milestones that define our legacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-yellow-400 to-green-500 text-white">
                  <CardTitle className="text-2xl font-bold">{achievement.year}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mission & Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To develop world-class football talent while representing the pride and passion of Kano State on national and international stages.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Excellence, integrity, teamwork, and community. We believe in nurturing talent, building character, and giving back to our supporters.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-4">Our Community</h3>
                <p className="text-gray-600">
                  Building bridges through football, uniting fans across cultures, and inspiring the next generation of Nigerian football stars.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving Kano Pillars FC towards continued success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
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

export default About;
