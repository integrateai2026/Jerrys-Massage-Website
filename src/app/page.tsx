import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Specials from "@/components/Specials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import GSAPInit from "@/components/GSAPInit";

export default function Home() {
  return (
    <>
      <GSAPInit />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Specials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
