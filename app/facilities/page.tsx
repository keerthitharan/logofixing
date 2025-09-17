import { Sprout, Droplets, Sun, Leaf, Award, Users, Heart, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Facilities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Facilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure and modern farming equipment to ensure the highest quality organic produce
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sprout className="h-8 w-8" />,
                title: "Modern Greenhouse Complex",
                description: "Climate-controlled greenhouses spanning 5 acres with automated temperature and humidity systems for year-round cultivation"
              },
              {
                icon: <Droplets className="h-8 w-8" />,
                title: "Drip Irrigation System",
                description: "Advanced water-efficient irrigation covering 50+ acres, reducing water usage by 40% while ensuring optimal plant hydration"
              },
              {
                icon: <Sun className="h-8 w-8" />,
                title: "Solar Power Plant",
                description: "100kW solar installation providing clean energy for all farm operations, making us completely carbon neutral"
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Organic Composting Unit",
                description: "On-site composting facility processing 10 tons of organic waste monthly to create nutrient-rich natural fertilizers"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Quality Testing Lab",
                description: "In-house laboratory for soil testing, nutrient analysis, and quality assurance to maintain organic certification standards"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Processing & Packaging Center",
                description: "Hygienic processing facility with cold storage, washing, sorting, and packaging equipment for fresh produce"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Seed Bank & Nursery",
                description: "Dedicated nursery with 20,000+ seedling capacity and heritage seed preservation program for biodiversity"
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Farm Management System",
                description: "Digital monitoring system tracking crop cycles, weather data, and harvest schedules for optimal productivity"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Visitor Center & Farm Tours",
                description: "Educational facility offering guided tours, workshops, and farm-to-table experiences for visitors and students"
              }
            ].map((facility, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mb-6">
                  {facility.icon}
                </div>
                <CardTitle className="text-xl mb-4 text-gray-900">{facility.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  {facility.description}
                </CardDescription>
              </Card>
            ))}
          </div>

          {/* Additional Facility Highlights */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Infrastructure Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">75 Acres</div>
                <div className="text-gray-600">Total Farm Area</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5 Acres</div>
                <div className="text-gray-600">Greenhouse Complex</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100kW</div>
                <div className="text-gray-600">Solar Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">20,000+</div>
                <div className="text-gray-600">Seedling Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
