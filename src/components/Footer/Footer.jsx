import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 mt-10">
      <footer className="text-white py-10 container mx-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-bold mb-4">About WinterSoul</h2>
            <p className="text-gray-400">
              WinterSoul connects donors with communities in need across Bangladesh, providing warm clothing during the harsh winter months. Together, we can make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/donation-campaigns" className="text-gray-400 hover:text-white">
                  Donation Campaigns
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white">
                  How to Help
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">
              <span className="block mb-2">Email: support@wintersoul.org</span>
              <span className="block mb-2">Phone: +880-123-456-789</span>
              <span className="block">Address: Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} WinterSoul. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
