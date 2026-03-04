import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - SafeGuard SL",
  description:
    "Welcome to SafeGuard SL, your trusted partner in digital security. Explore our innovative solutions designed to protect your online presence and ensure your safety in the digital world.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
