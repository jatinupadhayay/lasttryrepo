import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white h-[30vh]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-wrap justify-between h-full">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-3">E-Shop</h2>
            <p className="text-gray-400">Your one-stop shop for the best deals and offers.</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white"><a href="#">Home</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shop</a></li>
              <li className="mb-2 hover:text-white"><a href="#">About Us</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white"><a href="#">Help Center</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Returns</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shipping</a></li>
              <li className="mb-2 hover:text-white"><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul className="flex space-x-4 text-gray-400">
              <li className="hover:text-white">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li className="hover:text-white">
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="hover:text-white">
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li className="hover:text-white">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} E-Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
