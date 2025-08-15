import { Car, MapPin, Phone, Clock } from "lucide-react"
import { HeroButton } from "./ui/hero-button"

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-wash-blue-light sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-wash-blue">AutoWash</h1>
              <p className="text-xs text-muted-foreground">Premium Car Care</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-wash-blue transition-colors">Services</a>
            <a href="#locations" className="text-foreground hover:text-wash-blue transition-colors">Locations</a>
            <a href="#pricing" className="text-foreground hover:text-wash-blue transition-colors">Pricing</a>
            <a href="#contact" className="text-foreground hover:text-wash-blue transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Open 24/7</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>(555) 123-WASH</span>
              </div>
            </div>
            <HeroButton variant="primary" size="sm">
              Book Now
            </HeroButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header