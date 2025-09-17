"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Sun, Droplets, Heart, Phone, Mail, MapPin, Award, Users, Sprout, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Organic Farming",
      description: "100% organic produce grown with sustainable farming practices and natural fertilizers"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Fresh Vegetables",
      description: "Daily harvest of seasonal vegetables, delivered fresh from our fields to your table"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Sustainable Irrigation",
      description: "Advanced water management systems ensuring optimal crop growth while conserving resources"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Farm-to-Table",
      description: "Direct supply chain ensuring the freshest produce reaches you within hours of harvest"
    }
  ];

  const products = [
    {
      name: "Organic Tomatoes",
      description: "Vine-ripened, pesticide-free tomatoes",
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Fresh Leafy Greens",
      description: "Spinach, lettuce, and seasonal greens",
      image: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Root Vegetables",
      description: "Carrots, radishes, and beetroot",
      image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Herbs & Spices",
      description: "Fresh basil, cilantro, and mint",
      image: "https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];



  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      content: "The quality of vegetables from Eyal Vanam is exceptional. You can taste the difference! Fresh, organic, and delivered on time every single time.",
      rating: 5,
      source: "Google Reviews",
      date: "2 weeks ago",
      verified: true
    },
    {
      name: "Rajesh Kumar",
      role: "Restaurant Owner",
      content: "We've been sourcing from Eyal Vanam for 2 years. Their consistency and quality is unmatched. Perfect for our restaurant's organic menu.",
      rating: 5,
      source: "Google Reviews",
      date: "1 month ago",
      verified: true
    },
    {
      name: "Meera Patel",
      role: "Health Enthusiast",
      content: "Knowing my vegetables are truly organic gives me peace of mind for my family's health. The taste is incredible and my kids love eating vegetables now!",
      rating: 5,
      source: "Google Reviews",
      date: "3 weeks ago",
      verified: true
    },
    {
      name: "Anand Krishnan",
      role: "Local Resident",
      content: "Best organic farm in the area! The tomatoes are so fresh and flavorful. Highly recommend visiting the farm.",
      rating: 5,
      source: "Google Reviews",
      date: "1 week ago",
      verified: true
    },
    {
      name: "Lakshmi Devi",
      role: "Home Chef",
      content: "Amazing quality vegetables! The leafy greens stay fresh for days. Great customer service and timely delivery.",
      rating: 5,
      source: "Google Reviews",
      date: "2 months ago",
      verified: true
    },
    {
      name: "Suresh Babu",
      role: "Organic Food Lover",
      content: "Finally found a reliable source for truly organic vegetables. The difference in taste is remarkable!",
      rating: 5,
      source: "Google Reviews",
      date: "1 month ago",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              <span className="text-lg md:text-xl font-bold text-gray-900">Eyal Vanam</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-green-600 transition-colors">Gallery</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-green-600 transition-colors">
                <ChevronDown className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t fixed top-16 left-0 right-0 z-40">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="block text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#gallery" className="block text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#about" className="block text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="block text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fresh from
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                  Eyal Vanam
                </span>
                to Your Table
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Experience the pure taste of nature with our organically grown vegetables. 
                Cultivated with love, harvested with care, delivered with pride.
              </p>

              <div className="flex justify-center lg:justify-start items-center space-x-8 text-sm text-gray-600 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center">
                  <Leaf className="h-4 w-4 text-green-500 mr-2" />
                  100% Organic
                </div>
                <div className="flex items-center">
                  <Sun className="h-4 w-4 text-yellow-500 mr-2" />
                  Daily Fresh Harvest
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 text-red-500 mr-2" />
                  Grown with Love
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-3xl shadow-2xl ring-4 ring-green-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-shadow duration-500 ease-in-out transform hover:scale-105 hover:ring-green-500 relative animate-float">
                <img src="/logo (2).png" alt="Eyal Vanam Logo" className="w-80 h-auto object-contain rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Eyal Vanam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A legacy of sustainable farming, nurturing the earth while feeding communities with the finest organic produce
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Farmer working in field" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Growing with Purpose Since 1995</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Eyal Vanam has been at the forefront of organic farming for over 25 years. Our commitment to sustainable 
                agriculture and chemical-free farming practices has made us a trusted name in the community.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Organic Certification</h4>
                    <p className="text-gray-600">Certified organic by national standards with regular quality audits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Droplets className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Water Conservation</h4>
                    <p className="text-gray-600">Advanced drip irrigation systems reducing water usage by 40%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Impact</h4>
                    <p className="text-gray-600">Supporting local economy and providing healthy food options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive farming solutions focused on quality and sustainability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-4">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Farm Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our organic farm and see the beauty of sustainable agriculture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Organic farm fields"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Organic Farm Fields</h3>
                  <p className="text-sm">Our lush green fields where nature thrives</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh vegetables harvest"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Fresh Harvest</h3>
                  <p className="text-sm">Daily harvest of the finest organic produce</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/226587/pexels-photo-226587.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sustainable farming practices"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Sustainable Practices</h3>
                  <p className="text-sm">Eco-friendly farming methods for a better future</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farm workers"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Dedicated Team</h3>
                  <p className="text-sm">Our passionate farmers committed to quality</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh herbs and spices"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Herb Garden</h3>
                  <p className="text-sm">Aromatic herbs grown with traditional methods</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Root vegetables"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Root Vegetables</h3>
                  <p className="text-sm">Nutrient-rich roots from healthy soil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Vegetable Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Organic Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Real reviews from our satisfied customers
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Sun key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-600">out of 5</span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-gray-600">Based on 150+ Google Reviews</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Sun key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                      <div className="text-xs text-gray-400 flex items-center space-x-2">
                        <span>{testimonial.source}</span>
                        <span>•</span>
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Google Reviews CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See All Our Reviews</h3>
              <p className="text-gray-600 mb-6">Read more reviews and share your experience with Eyal Vanam</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://www.google.com/search?q=Eyal+Vanam+Organic+Farm+reviews', '_blank')}
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  View Google Reviews
                </Button>
                <Button 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => window.open('https://www.google.com/search?q=Eyal+Vanam+Organic+Farm+review', '_blank')}
                >
                  Write a Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to experience the freshest organic produce? Contact us today!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Eyal Vanam</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Farm Location</h4>
                    <p className="text-gray-600">Molasur Village<br />(Backside to Tindivanam ITI Government College)<br />Tindivanam Taluka, Villupuram</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9585903615</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@eyalvanam.com<br />orders@eyalvanam.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 bg-green-600 text-white">
                <h3 className="text-2xl font-bold mb-2">Find Us on Map</h3>
                <p className="text-green-100">Visit our organic farm and see our sustainable practices in action</p>
              </div>
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.8234567890!2d79.68606!3d12.18706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDExJzEzLjQiTiA3OcKwNDEnMDkuOCJF!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eyal Vanam Farm Location"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Farm Visits Welcome</h4>
                    <p className="text-sm text-gray-600">Call ahead to schedule your visit</p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Eyal Vanam</span>
                  <p className="text-sm text-gray-400">Organic Farm</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Cultivating organic excellence for over 25 years. From our farm to your family, 
                we deliver the freshest, healthiest produce with love and care.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulk Orders</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Farm Visits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Eyal Vanam Organic Farm. All rights reserved. | Certified Organic | Farm Fresh Quality</p>
          </div>
        </div>
      </footer>
    </div>
  );
}