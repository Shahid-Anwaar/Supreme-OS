import AutomateGrowthSection from "@/components/edge/AutomateGrowth";
import AudienceFitSection from "@/components/flagship/AudienceFit";
import CourseCurriculumSection from "@/components/flagship/CourseCurriculum";
import ExpertsSayingSection from "@/components/flagship/ExpertSaying";
import FAQSection from "@/components/flagship/FaqSection";
import LevelUpBusinessSection from "@/components/flagship/LevelUpBusiness";
import ThreeGridSection from "@/components/flagship/ThreeGridSection";
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


export default function FlagshipPage() {
  return (
    <>
      <HeroSection
        isShowBadge={false}
        title={
          <>
            Build a systemized personal brand.
          </>
        }
        subtitle="Install the systems and content engine to make your business scale beautifully."
        ctaText="Book a Brand Strategy Call"
        ctaHref="#book-call"
        trustText="Trusted by 5,000+ founders"
        showCompaniesSlider={true}
      />

      <AutomateGrowthSection />
      <ThreeGridSection />
      <FounderTestimonialsSection />
      <EarningsDisclaimerSection />
      <CourseCurriculumSection />
      <BusinessWorksSection
        heading={
          <>
            Build a business that works for you, not the other way
            <br className="hidden lg:block" /> around.
          </>
        }
        gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        features={[
          {
            title: "Jam packed calendar",
            description: "Over 40 live coaching sessions per month.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/686f360924e8c35552cc03b1_Skool%20Calendar%20(2).avif",
            alt: "Skool Schedule",
            imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
          },
          {
            title: "Sessions with Matt",
            description: (
              <>
                Real-time strategy.
                <br />
                What&apos;s working right now.
              </>
            ),
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6836707ad193ceb40613de36_session%20with%20matt.webp",
            alt: "Session with Matt",
            imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
          },
          {
            title: "Onboarding Call",
            description: "Get crystal clear on your path to systemization and results.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6834000eff1f151daa6b7129_Frame%2083595%20(2).webp",
            alt: "Founder OS Community",
            imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
          },
          {
            title: "Content templates",
            description: "Content frameworks for consistent audience building.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677729ceff0190670ae28db8_653c1e2165310461ef83b2b5_founder-module-2.webp",
            alt: "Distribution Strategy",
            imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
          },
          {
            title: "Founder AI",
            description: "Founder OS custom built AI agents trained on Matt's mind.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68367078105043c2455a8e69_ai%20tools.webp",
            alt: "AI Tools",
            imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
          },
          {
            title: "Process frameworks",
            description: "Install what you need. Use what works for other people.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677729397c08cfba7c2b7b72_653c2505f6f1f1a7d7989810_productivity-hacks.webp",
            alt: "Founder OS productivity tools",
            imageClassName: "w-[190px] sm:w-[210px] md:w-[220px]",
          },
          {
            title: "Tight-knit community",
            description: "Exclusive community of founders building together.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6836707a920717d135ccdc19_community.webp",
            alt: "Founder OS community",
            imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
          },
          {
            title: "License our systems",
            description: "Install the architecture of scale and go further, faster.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/683670798d7a4f1dbb14fd54_our%20systems.webp",
            alt: "Founder OS Systems",
            imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
          },
        ]}
      />
      <FounderTestimonialsSection
        heading="What experts are saying about Matt."
        gridClassName="grid-cols-1 md:grid-cols-2"
        cardVariant="vertical"
        containerClassName="max-w-[1300px]"
        testimonials={[
          {
            name: "Brett Adcock",
            company: "Figure.ai",
            quote: "Matt is an absolute beast when it comes to audience and community growth.",
            description:
              "He has one of the fastest growing brands online and is an incredible teacher. Would highly recommend working with him.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677730af1ed0f7c3fb036835_headshot_brett_adcock_round.webp",
            imageAlt: "Brett Adcock",
          },
          {
            name: "Harley Finkelstein",
            company: "Shopify",
            quote:
              "Matt is one of the most brilliant and thoughtful community builders I’ve ever met.",
            description:
              "He has tips and frameworks that scale and you can use today in whatever you are building.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67774f700d6e7b010d770f06_67497181720eea8d5d325ac5_Harley%20Finkelstein%20Shopify%20pro%20image-p-500.webp",
            imageAlt: "Harley Finkelstein",
          },
          {
            name: "Scot Chisholm",
            company: "Classy",
            quote: "This is the most curated group of founders I’ve ever been a part of.",
            description: "It’s truly heavy-hitters only.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67774f70d3b214b85922ec02_6622a09ced32be9c7f593131_headshot_scot_chisolm_round.webp",
            imageAlt: "Scot Chisholm",
          },
          {
            name: "Austin Belcak",
            company: "Cultivated Culture",
            quote:
              "If I woke up with no audience and no customers, Matt is the first person I’d call",
            description: "to help me build it back up.",
            image:
              "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67774f707c08cfba7c44f7a0_65bc3589091504321411174c_Austin%20Belcak.webp",
            imageAlt: "Austin Belcak",
          },
        ]}
      />
      <EarningsDisclaimerSection />
      <AudienceFitSection />
      <LevelUpBusinessSection />
      <ExpertsSayingSection />
      <EarningsDisclaimerSection />
      <FAQSection />
      <CommunityReviewsSection />
      <EarningsDisclaimerSection />
      <AmbitiousFoundersSection />
    </>
  );
}
