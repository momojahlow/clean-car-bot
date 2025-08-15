import { Car, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-wash-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Car className="w-7 h-7 text-wash-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AutoWash</h3>
                <p className="text-wash-blue-light text-sm">Premium Car Care</p>
              </div>
            </div>
            <p className="text-wash-blue-light">
              The most trusted name in professional car wash services. 
              Keeping your vehicle spotless since 2015.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-wash-blue-light hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-wash-blue-light hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-wash-blue-light hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-wash-blue-light">
              <li><a href="#" className="hover:text-white transition-colors">Basic Wash</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Wash</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ultimate Wash</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Express Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hand Wax</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interior Cleaning</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-wash-blue-light">
              <li><a href="#" className="hover:text-white transition-colors">Find Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-wash-blue-light">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-WASH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@autowash.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>15+ Locations Citywide</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Most locations open 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-wash-blue-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-wash-blue-light text-sm">
              © 2024 AutoWash. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-wash-blue-light">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer