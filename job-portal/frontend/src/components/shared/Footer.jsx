// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="mb-4">
            We are committed to connecting job seekers with top employers. Explore job opportunities and take your career to the next level.
          </p>
          <p>Contact us: info@jobportal.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/jobs" className="hover:underline">Browse Jobs</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
