"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Playfair_Display, Lato } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

interface Feature {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  alt: string;
}

interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
}

const FeaturesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [enquiryForm, setEnquiryForm] = useState<EnquiryFormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features: Feature[] = [
    {
      id: 1,
      image: "/images/Layer_1.png",
      title: "72 BESPOKE",
      subtitle: "VILLA PLOTS",
      alt: "Villa Plots Icon",
    },
    {
      id: 2,
      image: "/images/Layer_2.png",
      title: "AN EXCLUSIVE",
      subtitle: "GATED ESTATE",
      alt: "Gated Estate Icon",
    },
    {
      id: 3,
      image: "/images/Layer_3.png",
      title: "86 ACRES OF",
      subtitle: "VERDANT GREENS",
      alt: "Verdant Greens Icon",
    },
    {
      id: 4,
      image: "/images/Layer_4.png",
      title: "Tranquil",
      subtitle: "Views",
      alt: "Tranquil Views Icon",
    },
    {
      id: 5,
      image: "/images/Layer_5.png",
      title: "Vacation",
      subtitle: "Lifestyle",
      alt: "Vacation Lifestyle Icon",
    },
    {
      id: 6,
      image: "/images/Layer_6.png",
      title: "Clubhouse with",
      subtitle: "Plush Amenities",
      alt: "Clubhouse with Plush Amenities Icon",
    },
  ];

  // Duplicate features for seamless loop
  const duplicatedFeatures: Feature[] = [...features, ...features];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.9; // Adjust speed (lower = slower)

    const scroll = () => {
      scrollPosition += scrollSpeed;

      const itemWidth = scrollContainer.scrollWidth / 2;

      if (scrollPosition >= itemWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Enquiry form handlers
  const handleEnquiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEnquiryForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Fire and forget – we don't care what comes back
      await fetch("/api/claim-plot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryForm),
      });

      // Always treat as success for the user
      alert("Thank you! We’ll get in touch soon.");
      setEnquiryForm({
        fullName: "",
        phoneNumber: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      // Still show success to the user, since you don't want error alerts
      alert("Thank you! We’ll get in touch soon.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* 2-column layout: left content, right enquiry form */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* LEFT: Title, description, auto-scrolling features */}
          <div className="lg:w-2/3 w-full">
            {/* Section Title */}
            <h2
              className={`${playfairDisplay.className} text-center lg:text-left text-3xl md:text-4xl lg:text-5xl italic mb-8 md:mb-10`}
              style={{
                fontWeight: 400,
                color: "#A05035",
              }}
            >
              An 86-acre Private Haven
            </h2>

            {/* Description Text */}
            <p
              className={`${lato.className} text-center lg:text-left max-w-5xl mx-auto lg:mx-0 mb-10 md:mb-12 text-sm md:text-base lg:text-lg leading-relaxed`}
              style={{
                color: "#333333",
              }}
            >
              Far from Pune&apos;s urban hustle yet effortlessly connected to
              its cosmopolitan sophistication lies a sprawling 86-acre estate of
              pristine greens, thriving flora and fauna and panoramic hill
              views. Welcome to 86 Banyan Tree, an ultra-exclusive enclave of 72
              masterfully designed bespoke villa plots crafted for those who
              seek refined living, where tranquillity shapes everyday life and
              each moment feels like a rare privilege.
            </p>

            {/* Auto-Scrolling Features Container */}
            <div className="relative overflow-hidden max-w-6xl mx-auto lg:mx-0">
              <div
                ref={scrollRef}
                className="flex gap-8 md:gap-12 overflow-x-hidden"
                style={{ scrollBehavior: "auto" }}
              >
                {duplicatedFeatures.map((feature: Feature, index: number) => (
                  <div
                    key={`${feature.id}-${index}`}
                    className="flex-shrink-0 w-64 md:w-80 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 relative">
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3
                      className={`${lato.className} text-lg md:text-xl`}
                      style={{
                        color: "#000000",
                      }}
                    >
                      {feature.title}
                      <br />
                      {feature.subtitle}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Enquiry form */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-[#F7F2E8] border border-[#E0D5C3] rounded-2xl shadow-md p-6 md:p-8">
              <h3
                className={`${playfairDisplay.className} text-2xl md:text-3xl mb-4 text-[#A05035]`}
                style={{ fontWeight: 400 }}
              >
                Enquire Now
              </h3>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Full name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={enquiryForm.fullName}
                    onChange={handleEnquiryChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Phone number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={enquiryForm.phoneNumber}
                    onChange={handleEnquiryChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={enquiryForm.email}
                    onChange={handleEnquiryChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full px-6 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-sm md:text-base font-medium rounded-full transition-colors duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
