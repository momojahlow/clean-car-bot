import { HeroButton } from "./ui/hero-button"
import { MapPin, Star, Clock } from "lucide-react"
import heroImage from "@/assets/hero-car-wash.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional car wash service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-wash-blue/20 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-32 w-16 h-16 bg-wash-blue-light/30 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-white/20 rounded-full animate-float delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-wash-blue/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">Rated #1 Car Wash Service</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium 
            <span className="bg-gradient-to-r from-wash-blue to-wash-ripple bg-clip-text text-transparent block">
              Car Wash
            </span>
            Experience
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Professional touchless car wash with eco-friendly products. 
            Get your car sparkling clean in minutes with our advanced technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <HeroButton variant="primary" size="xl" className="group">
              Book Your Wash
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </HeroButton>
            <HeroButton variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-wash-blue">
              View Services
            </HeroButton>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5-10 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>15+ Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 text-wash-blue-light fill-current">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero