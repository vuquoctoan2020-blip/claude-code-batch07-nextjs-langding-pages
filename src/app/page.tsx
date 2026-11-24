import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import CourseContent from "@/components/CourseContent";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <CourseContent />
      <SocialProof />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
