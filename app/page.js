import { AboutUsPage } from "@/components/About/AboutUsPage";
import AboutSection from "@/components/Home/AboutSection";
import CausesForDonation from "@/components/Home/CausesForDonation";
import EventsAndPrograms from "@/components/Home/EventsAndPrograms";
import FatimaStory from "@/components/Home/FatimaStory";
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
      {/* <CausesForDonation /> */}
      <WhyDonateUs />
      <FeaturesSection />
      <FatimaStory />
      {/* <EventsAndPrograms /> */}
      {/* <NewsAndArticles /> */}
      <AboutUsPage />
      <div className="w-full horizontal-padding pb-20">
        <p className="text-sm lg:w-[80%] text-center mx-auto">
          <span className="font-semibold">Join Us:</span> Be a part of this
          ongoing impact—your support can light up homes, empower families, and
          create a legacy of hope. Together, let’s bring the power of Sadaqah
          Jariyah to those who need it most
        </p>
      </div>
    </div>
  );
}
