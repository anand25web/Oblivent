import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-electric-violet to-sky-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="font-poppins font-bold text-xl bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">
                Oblivent
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We create digital magic for brands through innovative design, strategic marketing, and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-electric-violet/20 rounded-lg flex items-center justify-center hover:bg-electric-violet transition-colors duration-300" data-testid="social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sky-blue/20 rounded-lg flex items-center justify-center hover:bg-sky-blue transition-colors duration-300" data-testid="social-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neon-lime/20 rounded-lg flex items-center justify-center hover:bg-neon-lime transition-colors duration-300" data-testid="social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-electric-violet/20 rounded-lg flex items-center justify-center hover:bg-electric-violet transition-colors duration-300" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-electric-violet transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-electric-violet transition-colors duration-300">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-electric-violet transition-colors duration-300">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-electric-violet transition-colors duration-300">Portfolio</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-electric-violet transition-colors duration-300">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-electric-violet transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">Website Design</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">Social Media Marketing</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">Video Production</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">Branding & Identity</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">SEO Optimization</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">Digital Strategy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-neon-lime" />
                <span className="text-gray-300">hello@oblivent.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-neon-lime" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-neon-lime" />
                <span className="text-gray-300">123 Innovation St, Tech City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-neon-lime" />
                <span className="text-gray-300">Mon-Fri 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2023 Oblivent. All rights reserved. Made with ❤️ for amazing brands.
          </p>
          <div className="flex space-x-6">
            <Link href="/legal" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="/legal" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
            <Link href="/legal" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
