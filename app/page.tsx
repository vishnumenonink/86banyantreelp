import AmenitiesSection from "@/components/home/AmenitiesSection";
import ClaimPlotForm from "@/components/home/ClaimPlotForm";
import ConnectivitySection from "@/components/home/ConnectivitySection";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Image from "next/image";

export const metadata = {
  title: "86 Banyan Tree  | N.A Villa Plots Chandkhed | Banyan Tree Realty",
  description:
    "A Project by Banyan Tree Realty & Panchshil Group - 86 Banyan Tree, Where luxury meets nature in perfect harmony.",
};

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
