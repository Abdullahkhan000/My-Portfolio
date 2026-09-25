import { About } from "@/components/About";
import { AmbientScene } from "@/components/AmbientScene";
import { CameraInterlude } from "@/components/CameraInterlude";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntroLoader } from "@/components/IntroLoader";
import { MotionProvider } from "@/components/ui/Motion";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { PremiumInteractions } from "@/components/PremiumInteractions";
import { Services } from "@/components/Services";
import { VitoEncodes } from "@/components/VitoEncodes";

export default function Home() {
  return (
    <MotionProvider>
      <IntroLoader />
      <PremiumInteractions />
      <AmbientScene />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <CameraInterlude />
        <VitoEncodes />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
