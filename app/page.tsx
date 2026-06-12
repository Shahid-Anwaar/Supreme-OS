import AmbitiousFoundersSection from "@/components/home/AmbitiousFounder";
import BusinessWorksSection from "@/components/home/BusinessWork";
import CommunityReviewsSection from "@/components/home/CommunityReviews";
import EarningsDisclaimerSection from "@/components/home/EarningDisclaimer";
import FounderStorySection from "@/components/home/FounderStory";
import FounderTestimonialsSection from "@/components/home/FounderTestmonials";
import FrameworkCtaSection from "@/components/home/FrameWorkCTA";
import HeroSection from "@/components/home/HeroSection";
import OfferCardsSection from "@/components/home/OffersCard";
import PositioningSection from "@/components/home/PositioningSection";


export default function Home() {
  return (
     <>
      <HeroSection />
      <PositioningSection />
      <FrameworkCtaSection />
      <FounderTestimonialsSection />
      <EarningsDisclaimerSection />
      <OfferCardsSection />
      <BusinessWorksSection />
      <FounderStorySection />
      <CommunityReviewsSection />
      <AmbitiousFoundersSection />
    </>
  );
}
