"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Your three hero images
  const slides = [
    { image: "/images/hero-1.png", alt: "86 Banyan Tree Villa Plot 1" },
    { image: "/images/hero-2.png", alt: "86 Banyan Tree Villa Plot 2" },
    { image: "/images/hero-3.png", alt: "86 Banyan Tree Villa Plot 3" },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/images/86-bit.pdf";
    link.download = "86-Banyan-Tree-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Navigation Bar */}
      <nav
        className="absolute top-0 left-0 right-0 z-20"
        style={{ backgroundColor: "#234215" }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Empty spacer for logo positioning on desktop */}
          <div className="hidden lg:block w-32 md:w-40"></div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto">
            <Link
              href="#home"
              className="text-white hover:text-gray-200 transition-colors font-medium text-base xl:text-lg"
            >
              Home
            </Link>
            <Link
              href="#amenities"
              className="text-white hover:text-gray-200 transition-colors font-medium text-base xl:text-lg"
            >
              Amenities
            </Link>
            <Link
              href="#location"
              className="text-white hover:text-gray-200 transition-colors font-medium text-base xl:text-lg"
            >
              Location
            </Link>
            <Link
              href="#testimonial"
              className="text-white hover:text-gray-200 transition-colors font-medium text-base xl:text-lg"
            >
              Testimonial
            </Link>
            <a
              href="#enquiry"
              className="bg-[#7C4E35] hover:bg-[#6A4230] text-white px-6 xl:px-8 py-2.5 xl:py-3.5 rounded-full transition-all duration-300 font-medium text-base xl:text-lg shadow-lg hover:shadow-xl scroll-smooth"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#234215] border-t border-white/10">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <Link
                href="#home"
                className="text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#amenities"
                className="text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Amenities
              </Link>
              <Link
                href="#location"
                className="text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Location
              </Link>
              <Link
                href="#testimonial"
                className="text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonial
              </Link>
              <button
                className="bg-[#7C4E35] hover:bg-[#6A4230] text-white px-6 py-3 rounded-full transition-all duration-300 font-medium text-base shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Logo - Responsive positioning */}
      <Link href="/" className="absolute top-0 left-4 sm:left-6 z-30">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-36 bg-[#7C4E35] rounded-b-2xl sm:rounded-b-3xl shadow-xl">
          <Image
            src="/images/logo-1.png"
            alt="86 Banyan Tree Logo"
            fill
            className="object-contain "
            priority
          />
        </div>
      </Link>

      {/* Sliding Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={90}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Hero Content - Responsive */}

      <div
        className="
    absolute inset-0 z-10 
    flex flex-col items-center text-center 
    px-4 sm:px-6 md:px-8 
    justify-start pt-28 md:pt-40 lg:pt-48
  "
      >
        {/* ✅ pt values adjusted for larger screens */}
        <h1
          className={`${playfairDisplay.className} italic text-center capitalcase transition-colors duration-1000 px-2`}
          style={{
            color: currentSlide === 2 ? "#FFFFFF" : "#234215",
            fontWeight: 400,
            fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
            lineHeight: "1.2",
          }}
        >
          A Retreat Of Rare Privilege,
          <br />
          Rooted In Nature
        </h1>

        <p
          className={`${lato.className} font-medium text-center mt-4 sm:mt-6 md:mt-8 transition-colors duration-1000 px-2`}
          style={{
            color: currentSlide === 2 ? "#FFFFFF" : "#08110C",
            fontWeight: 500,
            fontSize: "clamp(1rem, 2.5vw, 1.625rem)",
            lineHeight: "1.3",
          }}
        >
          Exclusive NA Villa Plots at Chandkhed
        </p>
      </div>

      {/* Floating Action Buttons - Responsive */}
      <div className="fixed sm:right-4 md:right-6 bottom-0 sm:bottom-20 md:bottom-6 z-30 gap-2 sm:gap-3 w-full flex flex-row-reverse justify-between p-4 md:p-0">
        {/* Call Button */}
        <a
          href="#enquiry"
          className="bg-green-600 hover:bg-green-700 text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Call us"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"
            fill="none"
            stroke="currentColor"
          >
            {/* outer envelope */}
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              ry="2"
              strokeWidth={2}
            />
            {/* flap */}
            <polyline points="4 7 12 12 20 7" strokeWidth={2} fill="none" />
          </svg>
        </a>

        {/* Download Brochure Button */}
        <button
          onClick={handleDownloadBrochure}
          className="bg-[#8B6F47] hover:bg-[#7A5F3A] text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ml-0 md:ml-10"
          aria-label="Download brochure"
        >
          Download Brochure
        </button>
      </div>

      {/* Slide Indicators - Responsive */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-6 sm:w-8"
                : "bg-white/50 w-1.5 sm:w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
