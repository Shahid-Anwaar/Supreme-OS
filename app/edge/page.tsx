import EdgeExperiencesSection from "@/components/edge/EdgeExperience";
import TestimonialYoutubeSection from "@/components/edge/TestmonialYoutube";
import ThreeVideosSection from "@/components/edge/ThreeSection";
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


export default function EdgePage() {
  return (
    <>
      <HeroSection
        isShowBadge={false}
        title={
          <>
            Decide like a CEO. <br /> Move like a creator.
          </>
        }
        subtitle="Private 1:1s with Matt Gray that collapse quarters into weeks. Your personal advisory board to scale your business."
        ctaText="Book a Brand Strategy Call"
        ctaHref="#book-call"
        trustText=""
        avatars={[]}
        showCompaniesSlider={true}
      />
      <PositioningSection
  heading="What you get inside Edge."
  description="For founders doing $1M+ who need the room to think bigger and the systems to execute faster."
  cards={[
    {
      title: "Steal our systems. Scale your business.",
      description:
        "The exact frameworks behind a $14M/year business at 50% margin. Installed into yours.",
      image:
        "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68231edb0375948f4e2b9b7b_66ad2eecb9f1baee56e610a0_Plug-And-Play-Systems-p-1600.webp",
      imageAlt: "Plug and play systems",
      imageWidth: 520,
      imageHeight: 360,
      isLarge: true,
    },
    {
      title: "Automate your business with precision.",
      description:
        "Install repeatable systems that remove you from daily operations while keeping growth compounding.",
      image:
        "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68231edb520987c4ce8a8b5e_67da52bb5c0c2e48155b52cb_founder%20battle%20plan-p-500.webp",
      imageAlt: "Founder battle plan",
      imageWidth: 260,
      imageHeight: 170,
    },
    {
      title: "Direct access to Matt.",
      description:
        "Private, ongoing access to Matt and his operating team. A direct line to the person who built it.",
      image:
        "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68231edab16a4eedde98293c_67da52bbb9dd14d58e7ce676_personal%20board%20advisor.webp",
      imageAlt: "Personal advisory board",
      imageWidth: 260,
      imageHeight: 280,
    },
    {
      title: "Content systems sessions with Matt.",
      description: "Work on the systems that matter most for your growth.",
      image:
        "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68231edb68791d64d7a21386_66ad2eeb2076e763abc9da44_In-Person-Experiences-p-500.webp",
      imageAlt: "Content systems session",
      imageWidth: 260,
      imageHeight: 180,
    },
    {
      title: "Built around you",
      description:
        "Edge is built around your business and the problems you are solving right now.",
      image:
        "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68231eda5472c99209395832_67da52bb40d14c40ab4aeeaa_High%20powered%20founders.webp",
      imageAlt: "High powered founders",
      imageWidth: 260,
      imageHeight: 220,
    },
  ]}
/>
      {/* <FrameworkCtaSection /> */}
      <FounderTestimonialsSection />
      <EarningsDisclaimerSection />
      <ThreeVideosSection />
      <TestimonialYoutubeSection />
      <EdgeExperiencesSection />
      <CommunityReviewsSection />
    </>
  );
}
