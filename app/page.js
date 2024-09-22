import AboutSection from "@/components/Home/AboutSection";
import CausesForDonation from "@/components/Home/CausesForDonation";
import EventsAndPrograms from "@/components/Home/EventsAndPrograms";
import FeaturesSection from "@/components/Home/FeaturesSection";
import Hero from "@/components/Home/Hero";
import NewsAndArticles from "@/components/Home/NewsAndArticles";
import StatisticsSection from "@/components/Home/StatisticsSection";
import WhyDonateUs from "@/components/Home/WhyDonateUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatisticsSection />
      <CausesForDonation />
      <WhyDonateUs />
      <FeaturesSection />
      <EventsAndPrograms />
      <NewsAndArticles />
    </>
  );
}
