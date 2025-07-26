
import { useState } from "react";
import { Heart, Users, Star, Gift, MessageCircle, Trophy, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FanZone = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    reason: ""
  });

  const benefits = [
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Exclusive Merchandise",
      description: "Access to limited edition jerseys, scarves, and club memorabilia"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Priority Match Tickets",
      description: "Early access to tickets for home and away matches, including cup finals"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Player Meet & Greets",
      description: "Exclusive opportunities to meet your favorite players and coaching staff"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Behind-the-Scenes Access",
      description: "Special access to training sessions, stadium tours, and club events"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "VIP Match Experience",
      description: "Premium seating, hospitality packages, and matchday experiences"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Fan Community",
      description: "Connect with fellow supporters through exclusive events and activities"
    }
  ];

  const testimonials = [
    {
      name: "Amina Hassan",
      location: "Kano",
      quote: "Being part of the Sai Masu Gida family has been incredible. The atmosphere at the stadium is electric, and the fan club community is like a second family.",
      memberSince: "2018",
      avatar: "AH"
    },
    {
      name: "Musa Ibrahim",
      location: "Kaduna",
      quote: "I've been supporting Kano Pillars for over 10 years. The fan club membership gives me access to amazing experiences and connects me with fans from all over Nigeria.",
      memberSince: "2015",
      avatar: "MI"
    },
    {
      name: "Fatima Aliyu",
      location: "Abuja",
      quote: "The pride I feel wearing the Kano Pillars colors is indescribable. The fan club has made supporting the team even more special and memorable.",
      memberSince: "2020",
      avatar: "FA"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fan club registration:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for joining the Sai Masu Gida family! We'll contact you soon with your membership details.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      reason: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fan Zone
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Join the Sai Masu Gida family and be part of our passionate community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Heart className="mr-2 h-5 w-5" />
              Join Fan Club
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              <Users className="mr-2 h-5 w-5" />
              Community Events
            </Button>
          </div>
        </div>
      </section>

      {/* Fan Statistics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Registered Fans</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">34</div>
              <div className="text-gray-600">Years of Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">20</div>
              <div className="text-gray-600">States Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">100+</div>
              <div className="text-gray-600">Fan Events Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Membership Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy exclusive perks and experiences as an official member of the Sai Masu Gida fan club
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-yellow-500 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Join the Fan Club
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Become an official member and enjoy all the benefits of being part of the Sai Masu Gida family
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-yellow-400 to-green-500 text-white">
              <CardTitle className="text-center text-2xl">Fan Club Registration</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      City/State *
                    </label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your city and state"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join the fan club?
                  </label>
                  <Textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    value={formData.reason}
                    onChange={handleInputChange}
                    placeholder="Tell us what makes you passionate about Kano Pillars FC..."
                  />
                </div>
                
                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Heart className="mr-2 h-5 w-5" />
                    Join the Family
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fan Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Fans Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our passionate supporters about their experience as part of the Sai Masu Gida family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  
                  <div className="flex justify-between items-center">
                    <Badge className="bg-yellow-500 text-black">
                      Member since {testimonial.memberSince}
                    </Badge>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Connect With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow us on social media for the latest updates, behind-the-scenes content, and fan interactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Facebook</h3>
                <p className="text-gray-600 text-sm mb-4">Join our Facebook community with over 30,000 fans</p>
                <Button variant="outline">Follow Us</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Instagram</h3>
                <p className="text-gray-600 text-sm mb-4">See exclusive photos and stories from matches and training</p>
                <Button variant="outline">Follow Us</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Twitter</h3>
                <p className="text-gray-600 text-sm mb-4">Get real-time updates, match commentary, and news</p>
                <Button variant="outline">Follow Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FanZone;
