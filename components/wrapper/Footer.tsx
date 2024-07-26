import React from 'react';
import { Apple, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const FooterSection = ({ title, items }:{
  title:string,
  items:any
}) => (
  <div className="mb-6 md:mb-0">
    <h3 className="text-white font-semibold mb-3">{title}</h3>
    <ul>
      {items.map((item:string, index:number) => (
        <li key={index} className="mb-2">
          <a href="#" className="text-gray-400 hover:text-white text-sm">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#1f1f2e] text-white py-10 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <FooterSection 
            title="Company Info" 
            items={['About Us', 'Contact Us', 'Careers', 'FAQs', 'Terms of Service', 'Privacy Policy']} 
          />
          <FooterSection 
            title="Help" 
            items={['Account Support', 'Listing Events', 'Event Ticketing', 'Ticket Purchase Terms & Conditions']} 
          />
          <FooterSection 
            title="Categories" 
            items={['Concerts & Gigs', 'Festivals & Lifestyle', 'Business & Networking', 'Food & Drinks', 'Performing Arts', 'Sports & Outdoors', 'Exhibitions', 'Workshops, Conferences & Classes']} 
          />
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Youtube className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-3">Download The App</h3>
            <div className="flex flex-col space-y-2">
              <button className="bg-[#0f0f1a] text-white py-2 px-4 rounded flex items-center justify-center space-x-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/></svg>
                <span>Get it on Google Play</span>
              </button>
              <button className="bg-[#0f0f1a] text-white py-2 px-4 rounded flex items-center justify-center space-x-2">
                <Apple className="w-5 h-5" />
                <span>Download on the App Store</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          © 2023 Eventify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;