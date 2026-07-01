import HeroSection from '../components/HeroSection';
import CoreStats from '../components/CoreStats';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import SecuritySection from '../components/SecuritySection';
import Ecosystem from '../components/Ecosystem';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle("Home");
  return (
    <>
      <HeroSection />
      <CoreStats />
      <FeaturesSection />
      <HowItWorks />
      <SecuritySection />
      <Ecosystem />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
