import AboutHeroSection from "@/components/about/AboutHero";
import BlogPreviewSection from "@/components/about/BlogPreview";
import MissionSection from "@/components/about/MissionSection";
import PodcastSection from "@/components/about/PodcastSection";
import YoutubePreviewSection from "@/components/about/YoutubePreview";
import EdgeExperiencesSection from "@/components/edge/EdgeExperience";
import TestimonialYoutubeSection from "@/components/edge/TestmonialYoutube";
import ThreeVideosSection from "@/components/edge/ThreeSection";
import ThreeGridSection from "@/components/flagship/ThreeGridSection";
import LightHeroSection from "@/components/fos-light-offer/LightHero";
import LightInsideSection from "@/components/fos-light-offer/LightInsideSection";
import LightIntroSection from "@/components/fos-light-offer/LightIntro";
import LightPricingSection from "@/components/fos-light-offer/LightPricing";
import OfferValueSection from "@/components/fos-light-offer/OfferValue";
import ThankYouOfferSection from "@/components/fos-light-offer/ThankYouOffers";
import WhoseForOS from "@/components/fos-light-offer/WhoseForOs";

export default function EdgePage() {
  return (
    <>
      <LightHeroSection />
      <LightPricingSection />
      <OfferValueSection
        heading="Let’s Be Honest About Where You’re At"
        introText={
          <>
            If you’re here, you don’t have a motivation problem.
            <br />
            <strong>You have a systems problem.</strong>
            <br />
            Most founders at this stage are stuck because:
          </>
        }
        bullets={[
          <>
            They <em>know</em> personal brand matters... but execution feels scattered
          </>,
          "They’ve consumed tons of content... nothing feels installed",
          "They’re busy, but not building leverage",
          "They’re creating... without a clear path to monetization",
        ]}
        closingLines={[
          <strong key="tips">You don’t need more tips.</strong>,
          <strong key="foundation">
            You need a foundation that locks everything into place.
          </strong>,
        ]}
      />
      <LightIntroSection />
      <LightInsideSection />

      <WhoseForOS />
      <OfferValueSection />
      <ThankYouOfferSection />
    </>
  );
}
