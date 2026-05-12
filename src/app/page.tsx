import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyJerry from "@/components/WhyJerry";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Gift from "@/components/Gift";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import GSAPInit from "@/components/GSAPInit";

export default function Home() {
  return (
    <>
      <GSAPInit />
      <UtilityBar />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <HowItWorks />
        <WhyJerry />
        <Testimonials />
        <FAQ />
        <Gift />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
