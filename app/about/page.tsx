import AboutHeroSection from "@/components/about/AboutHero";
import BlogPreviewSection from "@/components/about/BlogPreview";
import MissionSection from "@/components/about/MissionSection";
import PodcastSection from "@/components/about/PodcastSection";
import YoutubePreviewSection from "@/components/about/YoutubePreview";
import EdgeExperiencesSection from "@/components/edge/EdgeExperience";
import TestimonialYoutubeSection from "@/components/edge/TestmonialYoutube";
import ThreeVideosSection from "@/components/edge/ThreeSection";
import ThreeGridSection from "@/components/flagship/ThreeGridSection";
import CommunityReviewsSection from "@/components/home/CommunityReviews";
import EarningsDisclaimerSection from "@/components/home/EarningDisclaimer";
import FounderTestimonialsSection from "@/components/home/FounderTestmonials";
import PositioningSection from "@/components/home/PositioningSection";

export default function EdgePage() {
  return (
    <>
      <AboutHeroSection />
      <MissionSection />

      <ThreeGridSection
        heading="Our values."
        showCta={false}
        gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        items={[
          {
            title: "Make magic possible",
            description: "We create exceptional founder experiences.",
            icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ac1af523ce115a84bcf3e4_64efd1a25709f735e5140498_abouticon1.svg",
            iconAlt: "Magician hat with wand",
          },
          {
            title: "Obsess over quality",
            description: "We go above and beyond to help founders.",
            icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ac1b22aa3031161bfd7c05_64efd33b5a701a73285c7ed8_abouticon2.svg",
            iconAlt: "Magnifying glass over diamond",
          },
          {
            title: "Have fun",
            description: "We connect and enjoy achieving mastery.",
            icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ac1af4024476d2080ebde8_64efd355c251a9a7672b6050_abouticon3.svg",
            iconAlt: "Light bulb icon",
          },
          {
            title: "Automate",
            description: "We evolve our systems to grow on autopilot.",
            icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ac1af550278ea6dca6ff5b_64efd37430ff78aa98a4c68b_abouticon4.svg",
            iconAlt: "Gear automation icon",
          },
        ]}
      />
      <PodcastSection />
      <BlogPreviewSection />
      <YoutubePreviewSection />
    </>
  );
}
