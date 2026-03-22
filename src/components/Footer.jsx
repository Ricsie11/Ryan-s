import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="text-3xl font-bold logo-font text-white mb-6 block"
            >
              StylesByRyan
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Redefining the salon experience with talent, growth, and passion.
              100% talent, 0% pretentious.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/_styledbyryan" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center space-x-3">
                <FiMapPin className="text-accent" />
                <span>K-City plaza, Wuse 2, Abuja</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-accent" />
                <span>+234 911 707 3351</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-accent" />
                <span>styledbyryaan@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Hours
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>1:00 PM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-xs">
          <p>
            © {new Date().getFullYear()} StylesByRyan. All rights reserved.
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
