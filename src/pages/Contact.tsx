
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Get in touch with Kano Pillars FC - we'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                  Sani Abacha Stadium<br />
                  Kofar Mata, Kano State<br />
                  Nigeria
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">
                  Main Office: +234 803 123 4567<br />
                  Media: +234 805 987 6543<br />
                  Tickets: +234 807 555 0123
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  General: info@kanopillarsfc.com<br />
                  Media: media@kanopillarsfc.com<br />
                  Tickets: tickets@kanopillarsfc.com
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 3:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-yellow-400 to-green-500 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="mr-2 h-6 w-6" />
                    Send us a Message
                  </CardTitle>
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
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                          Category *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange(value, "category")}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="tickets">Ticket Sales</SelectItem>
                            <SelectItem value="media">Media Request</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="fanclub">Fan Club</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Enter message subject"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message here..."
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Stadium Location Map */}
            <div>
              <Card className="shadow-lg h-full">
                <CardHeader className="bg-gradient-to-r from-green-500 to-yellow-400 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="mr-2 h-6 w-6" />
                    Sani Abacha Stadium
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 h-full">
                  <div className="h-96 bg-gradient-to-r from-green-200 to-yellow-200 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-24 w-24 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Stadium Location</h3>
                      <p className="mb-4">Sani Abacha Stadium, Kofar Mata, Kano</p>
                      <Button variant="outline">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How can I buy match tickets?</h3>
                <p className="text-gray-600 text-sm">
                  Tickets can be purchased online through our website, at the stadium box office, or through authorized vendors. Season tickets are also available for dedicated fans.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How do I join the fan club?</h3>
                <p className="text-gray-600 text-sm">
                  Visit our Fan Zone page to register for the official Kano Pillars Fan Club. Membership includes exclusive benefits and access to special events.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Can I visit the stadium for tours?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! Stadium tours are available on non-match days. Contact us to schedule a tour and explore behind-the-scenes areas including the dressing rooms and pitch.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How can I become a sponsor?</h3>
                <p className="text-gray-600 text-sm">
                  We welcome partnership opportunities with businesses and organizations. Contact our commercial team to discuss sponsorship packages and partnership options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
