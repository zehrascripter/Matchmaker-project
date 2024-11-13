import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-5 py-10 text-center text-white h-screen">
      
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.37478481387!2d67.15064687393593!3d24.88519459427011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3399a0c5f7541%3A0x58b70092643a1ed2!2sAl%20Falah%20Society%20Shah%20Faisal%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731527535507!5m2!1sen!2s"
          style={{
            filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
          }}
        ></iframe>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-semibold mb-5">Contact Us</h2>
        <p className="text-lg mb-10">For booking, please reach out on the contact number below:</p>
        
        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          
          {/* Call Button */}
          <Link href="tel:03333306175">
            <p className="bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105 px-8 py-4 rounded-md flex items-center space-x-3 shadow-lg">
              <FaPhoneAlt className="text-xl" />
              <span className="text-lg font-medium">Call: 03333306175</span>
            </p>
          </Link>
          
          {/* WhatsApp Button */}
          <Link href="https://wa.me/03333306175">
            <p className="bg-green-500 hover:bg-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105 px-8 py-4 rounded-md flex items-center space-x-3 shadow-lg">
              <FaWhatsapp className="text-xl" />
              <span className="text-lg font-medium">WhatsApp: 03333306175</span>
            </p>
          </Link>
          
        </div>
        
        {/* Subtext */}
        <p className="text-sm mt-6 text-gray-300">We are here to help with your matchmaking needs.</p>
      </div>
    </section>
  );
};

export default Contact;
