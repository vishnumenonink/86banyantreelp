"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Lato, Playfair_Display } from "next/font/google";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const AmenitiesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const amenities = [
    {
      id: 1,
      title: "Swimming Pool with Sun Deck",
      image: "/images/Rectangle2.png",
      alt: "Swimming Pool with Sun Deck at 86 Banyan Tree",
    },
    {
      id: 2,
      title: "State-of-the-art Gym",
      image: "/images/Rectangle22.png",
      alt: "State-of-the-art Gym at 86 Banyan Tree",
    },
    {
      id: 3,
      title: "Private Tennis Court",
      image: "/images/Rectangle3.png",
      alt: "Private Tennis Court at 86 Banyan Tree",
    },
    {
      id: 4,
      title: "Table Tennis",
      image: "/images/Rectangle4.png",
      alt: "Table Tennis at 86 Banyan Tree",
    },
    {
      id: 5,
      title: "Landscaped Sit-outs",
      image: "/images/Reactangle5.png",
      alt: "Yoga & Meditation at 86 Banyan Tree",
    },
    {
      id: 6,
      title: "Private Decks",
      image: "/images/Rectangle6.png",
      alt: "Clubhouse at 86 Banyan Tree",
    },
    {
      id: 7,
      title: "Party Lawn",
      image: "/images/Reactangle7.png",
      alt: "Garden & Landscape at 86 Banyan Tree",
    },
    {
      id: 8,
      title: "Billiards",
      image: "/images/Reactangle8.png",
      alt: "Jogging Track at 86 Banyan Tree",
    },
    {
      id: 9,
      title: "Banquet Hall",
      image: "/images/Rectangle9.png",
      alt: "Indoor Games at 86 Banyan Tree",
    },
  ];

  const privileges = [
    { id: 1, line1: "24X7 ADVANCED", line2: "SECURITY SYSTEMS" },
    { id: 2, line1: "DEDICATED", line2: "POWER BACKUP" },
    { id: 3, line1: "WATER", line2: "CONNECTIONS" },
    { id: 4, line1: "PAVED", line2: "PATHWAYS" },
    { id: 5, line1: "CONCRETE", line2: "INTERNAL ROADS" },
    { id: 6, line1: "STONE", line2: "COMPOUND WALL" },
  ];

  // ✅ Manual scroll logic for both desktop and mobile
  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = isMobile ? container.clientWidth : 400; // scroll 1 full image on mobile
    const newScrollPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const handleActivateSlide = (index: number) => setActiveSlide(index);

  return (
    <>
      <section id="amenities" className="w-full bg-[#E8DCC8] py-16 md:py-16">
        {/* Top Section */}
        <div className="container mx-auto px-6 text-center mb-20 bg-[#E9DFC6]">
          <h2
            className={`${playfairDisplay.className} text-4xl md:text-5xl lg:text-6xl italic mb-6 text-[#A05035] capitalize`}
            style={{ fontWeight: 400 }}
          >
            Indulgence, Curated In Every Detail
          </h2>
          <p className="text-base md:text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Designed for those who expect more than the ordinary, the clubhouse
            at 86 Banyan Tree is a true statement of privilege.
          </p>
        </div>

        {/* Amenities Slider */}
        <div className="relative w-full mb-16 px-4 md:px-12">
          {/* Left Arrow (visible always now) */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#8B6F47] p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className={`flex items-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4 ${
              isMobile ? "snap-x snap-mandatory" : ""
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {amenities.map((amenity, index) => {
              const isActive = index === activeSlide;
              return (
                <div
                  key={amenity.id}
                  onClick={() => handleActivateSlide(index)}
                  onMouseEnter={() => !isMobile && handleActivateSlide(index)}
                  onMouseLeave={() => !isMobile && setActiveSlide(-1)}
                  className={`relative flex-shrink-0 transition-all duration-500 cursor-pointer rounded-lg overflow-hidden ${
                    isMobile
                      ? "w-full snap-center h-80"
                      : isActive
                      ? "w-[500px] h-96 scale-105"
                      : "w-[400px] h-80 opacity-80 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={amenity.image}
                    alt={amenity.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority={index === 1}
                  />

                  {/* ✅ Text: Always visible on mobile, hover-only on desktop */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 transition-opacity duration-500 ${
                      isMobile
                        ? "opacity-100"
                        : isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <h3 className="text-white text-base md:text-xl text-center">
                      {amenity.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow (visible always now) */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#8B6F47] p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Essential Privileges Section */}
      <section id="essentials" className="w-full bg-[#FFFFFF] py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h2
            className={`${playfairDisplay.className} text-4xl md:text-5xl italic text-center mb-16 text-[#8B4513]`}
            style={{ fontWeight: 400 }}
          >
            Essential Privileges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {privileges.map((privilege) => (
              <div
                key={privilege.id}
                className="relative"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%, 30px 50%)",
                }}
              >
                <div className="bg-[#7C4E35] text-white py-10 px-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full min-h-[120px]">
                  <div className="text-center">
                    <div
                      className={`${lato.className} text-xl md:text-2xl font-normal uppercase tracking-wide leading-tight`}
                    >
                      {privilege.line1}
                    </div>
                    <div
                      className={`${lato.className} text-xl md:text-2xl font-normal uppercase tracking-wide leading-tight mt-1`}
                    >
                      {privilege.line2}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AmenitiesSection;
