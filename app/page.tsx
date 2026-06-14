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
      <HeroSection
        isShowBadge={true}
        badgeText="For founders doing $30k/month to $10M+/year"
        title={
          <>
            We Build You a <br /> Personal Brand Machine
          </>
        }
        subtitle="The same system behind a $15M personal brand, 5M+ followers, and 2 billion organic impressions – installed into your business with your voice, your offer, your brand."
        ctaText="Book a Brand Strategy Call"
        ctaHref="#book-call"
        trustText="Trusted by 5,000+ founders building systemized, founder-led brands."
        showCompaniesSlider={true}
      />

      <PositioningSection />
      <FrameworkCtaSection />
      <FounderTestimonialsSection />
      <EarningsDisclaimerSection />
      <OfferCardsSection />
      <BusinessWorksSection />
      <FounderStorySection />
      <CommunityReviewsSection />
      <EarningsDisclaimerSection />
      <AmbitiousFoundersSection />
    </>
  );
}
