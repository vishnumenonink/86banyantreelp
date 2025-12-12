import AmenitiesSection from "@/components/home/AmenitiesSection";
import ClaimPlotForm from "@/components/home/ClaimPlotForm";
import ConnectivitySection from "@/components/home/ConnectivitySection";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AmenitiesSection />
      <ConnectivitySection />
      <TestimonialsSection />
      <ClaimPlotForm />
      <Footer />
    </div>
  );
}
