import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { HeroButton } from "./ui/hero-button"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"

const Locations = () => {
  const locations = [
    {
      name: "Downtown AutoWash",
      address: "123 Main Street, Downtown",
      hours: "24/7",
      phone: "(555) 123-4567",
      distance: "0.5 miles"
    },
    {
      name: "Mall Plaza AutoWash", 
      address: "456 Shopping Blvd, Mall Plaza",
      hours: "6:00 AM - 11:00 PM",
      phone: "(555) 234-5678",
      distance: "1.2 miles"
    },
    {
      name: "Highway AutoWash",
      address: "789 Highway 101, Eastside",
      hours: "24/7",
      phone: "(555) 345-6789",
      distance: "2.1 miles"
    },
    {
      name: "Sunset AutoWash",
      address: "321 Sunset Ave, Westside",
      hours: "5:00 AM - 12:00 AM",
      phone: "(555) 456-7890",
      distance: "2.8 miles"
    },
    {
      name: "Airport AutoWash",
      address: "654 Airport Rd, Terminal Area",
      hours: "24/7",
      phone: "(555) 567-8901",
      distance: "3.5 miles"
    },
    {
      name: "Northside AutoWash",
      address: "987 North Park Dr, Northside",
      hours: "6:00 AM - 10:00 PM",
      phone: "(555) 678-9012",
      distance: "4.1 miles"
    }
  ]

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wash-blue mb-4">
            Find a Location Near You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            With 15+ convenient locations across the city, there's always an AutoWash nearby
          </p>
          <HeroButton variant="outline" size="lg" className="inline-flex items-center gap-2">
            <Navigation className="w-5 h-5" />
            Use My Location
          </HeroButton>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="border-wash-blue-light hover:shadow-wash hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-wash-blue flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {location.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">{location.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{location.hours}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{location.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-wash-blue">{location.distance} away</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <HeroButton variant="primary" size="sm" className="flex-1">
                    Get Directions
                  </HeroButton>
                  <HeroButton variant="secondary" size="sm" className="flex-1">
                    Book Here
                  </HeroButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-wash-blue mb-4">Can't find a location near you?</h3>
            <p className="text-muted-foreground mb-6">
              We're expanding rapidly! Sign up to be notified when we open in your area.
            </p>
            <HeroButton variant="primary" size="lg">
              Get Notified
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations