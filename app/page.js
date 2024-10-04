import { AboutUsPage } from "@/components/About/AboutUsPage";
import AboutSection from "@/components/Home/AboutSection";
import CausesForDonation from "@/components/Home/CausesForDonation";
import EventsAndPrograms from "@/components/Home/EventsAndPrograms";
import FeaturesSection from "@/components/Home/FeaturesSection";
import Hero from "@/components/Home/Hero";
import NewsAndArticles from "@/components/Home/NewsAndArticles";
import StatisticsSection from "@/components/Home/StatisticsSection";
import WhyDonateUs from "@/components/Home/WhyDonateUs";

export const metadata = {
  title: "Palmcare - Home",
  description: "Palmcare Charity",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <StatisticsSection />
      <CausesForDonation />
      <WhyDonateUs />
      <FeaturesSection />
      <EventsAndPrograms />
      <NewsAndArticles />
      <AboutUsPage />
    </div>
  );
}
