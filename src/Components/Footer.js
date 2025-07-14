import { Heart, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
                alt="FoodieHub Logo"
                className="w-10 h-10 rounded-full bg-white/10 p-2"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                FoodieHub
              </h3>
            </div>
            <p className="text-orange-100 text-sm leading-relaxed">
              Delivering delicious food from your favorite restaurants right to your doorstep. 
              Fast, fresh, and always satisfying.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gradient-to-r from-orange-700 to-red-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-500 transition-all duration-300 transform hover:scale-110">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-to-r from-orange-700 to-red-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-500 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-to-r from-orange-700 to-red-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-500 transition-all duration-300 transform hover:scale-110">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-200">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Contact', 'Grocery', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-orange-100 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-200">Our Services</h4>
            <ul className="space-y-2">
              {['Food Delivery', 'Grocery Delivery', 'Restaurant Partners', 'Corporate Catering', 'Gift Cards', 'FoodieHub Pro'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-orange-100 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-200">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-orange-100">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-700 to-red-600 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </div>

              <div className="flex items-center space-x-3 text-orange-100">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-700 to-red-600 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">support@foodiehub.com</span>
              </div>

              <div className="flex items-center space-x-3 text-orange-100">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-700 to-red-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            <div className="flex items-center space-x-2 text-orange-100 text-sm">
              <span>© {currentYear} FoodieHub. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by</span>
              <span className="font-semibold text-white">AYUSH 🚀</span>
            </div>

            <div className="flex items-center space-x-6 text-xs text-orange-200">
              <span>All rights reserved</span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400"></div>
    </footer>
  );
};

export default Footer;
