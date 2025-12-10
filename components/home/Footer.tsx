import React from "react";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#7C4E35] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Left Section - Main Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logo-2.png"
              alt="86 Banyan Tree"
              className="h-40 md:h-54 w-auto"
            />
          </div>

          {/* Middle Section - Project By with Logos */}
          <div className="flex items-end">
            <div className="ml-0 lg:ml-96">
              <img
                src="/images/logo-3.png"
                alt="Panchshil"
                className="h-14 md:h-16 w-auto"
              />
            </div>
          </div>

          {/* Right Section - Social Media Icons */}
          {/* <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/banyantreerealty"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-[#8B6446]" fill="currentColor" />
            </a>
            <a
              href="https://www.linkedin.com/company/banyan-tree-realty/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-[#8B6446]" fill="currentColor" />
            </a>
            <a
              href="https://www.youtube.com/@46banyantree46"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <Youtube className="w-5 h-5 text-[#8B6446]"  />
            </a>
            <a
              href="https://www.instagram.com/banyantreerealty/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-[#8B6446]" />
            </a>
          </div> */}
        </div>

        {/* Bottom Section - Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-14 pt-">
          <div className="flex items-center gap-6 md:gap-8 text-white order-2 md:order-1">
            <a
              href="/privacy-policy"
              className="hover:text-gray-200 transition-colors text-sm md:text-base"
            >
              Privacy Policy
            </a>
            <a
              href="/disclaimer"
              className="hover:text-gray-200 transition-colors text-sm md:text-base"
            >
              Disclaimer
            </a>
          </div>
          <div className="text-white order-1 md:order-2 text-sm md:text-base">
            <p>Copyright © 2025. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
