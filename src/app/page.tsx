'use client'
import { HeroSection } from "./component/ui/herosection";
import { Portfolio } from "./component/portfolio";
import { AboutMe } from "./component/aboutme";
import { GetInTouch } from "./component/getintouch";
import { useRef } from "react";
import { Toaster } from "sonner";
import { Footer } from "./component/ui/footer";
import Navbar from "./component/ui/navigation";

export default function Home() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div className="">
      <Navbar
        onHeroSectionClick={() => scrollToSection(heroSectionRef)}
        onPortfolioClick={() => scrollToSection(portfolioRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      <HeroSection refProp={heroSectionRef} />
      <Portfolio refProp={portfolioRef} />
      <AboutMe refProp={aboutRef} />
      <GetInTouch refProp={contactRef} />

      <Toaster richColors position="top-right" />
      <Footer />
    </div>
  );
}
