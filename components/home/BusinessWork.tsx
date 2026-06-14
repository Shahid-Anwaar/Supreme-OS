import Image from "next/image";
import { type ReactNode } from "react";

type BusinessFeature = {
  title: ReactNode;
  description: ReactNode;
  image: string;
  alt?: string;
  imageClassName?: string;
};

type BusinessWorksSectionProps = {
  heading?: ReactNode;
  features?: BusinessFeature[];
  gridClassName?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

// const defaultFeatures: BusinessFeature[] = [
//   {
//     title: "Jam packed calendar",
//     description: "Over 40 live coaching sessions per month.",
//     image:
//       "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/686f360924e8c35552cc03b1_Skool%20Calendar%20(2).avif",
//     alt: "Skool Schedule",
//     imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
//   },
//   {
//     title: "Sessions with Matt",
//     description: (
//       <>
//         Real-time strategy.
//         <br />
//         What&apos;s working right now.
//       </>
//     ),
//     image:
//       "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6836707ad193ceb40613de36_session%20with%20matt.webp",
//     alt: "Session with Matt",
//     imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
//   },
//   {
//     title: "Onboarding Call",
//     description: "Get crystal clear on your path to systemization and results.",
//     image:
//       "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6834000eff1f151daa6b7129_Frame%2083595%20(2).webp",
//     alt: "Founder OS Community",
//     imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
//   },
//   {
//     title: "Content templates",
//     description: "Content frameworks for consistent audience building.",
//     image:
//       "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677729ceff0190670ae28db8_653c1e2165310461ef83b2b5_founder-module-2.webp",
//     alt: "Distribution Strategy",
//     imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
//   },
//   {
//     title: "Founder AI",
//     description: "Founder OS custom built AI agents trained on Matt's mind.",
//     image:
//       "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68367078105043c2455a8e69_ai%20tools.webp",
//     alt: "AI Tools",
//     imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
//   },
//   {
//     title: "Process frameworks",
//     description: "Install what you need. Use what works for other people.",
//     image:
//       "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677729397c08cfba7c2b7b72_653c2505f6f1f1a7d7989810_productivity-hacks.webp",
//     alt: "Founder OS productivity tools",
//     imageClassName: "w-[190px] sm:w-[210px] md:w-[220px]",
//   },
//   {
//     title: "Tight-knit community",
//     description: "Exclusive community of founders building together.",
//     image:
//       "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6836707a920717d135ccdc19_community.webp",
//     alt: "Founder OS community",
//     imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
//   },
//   {
//     title: "License our systems",
//     description: "Install the architecture of scale and go further, faster.",
//     image:
//       "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/683670798d7a4f1dbb14fd54_our%20systems.webp",
//     alt: "Founder OS Systems",
//     imageClassName: "w-[220px] sm:w-[240px] md:w-[250px]",
//   },
// ];

const defaultFeatures: BusinessFeature[] = [
  {
    title: "Compounding Content",
    description: "Attract your dream customer",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/682a851916de3744b0519bf2_compounding%20content.webp",
    alt: "Compounding content visual",
    imageClassName: "w-[170px] sm:w-[185px] md:w-[190px]",
  },
  {
    title: "Scaling templates",
    description: "Transform vision into execution",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6822d5f497abb9fbe70634e0_scaling%20template-p-800.webp",
    alt: "Scaling templates visual",
    imageClassName: "w-[220px] sm:w-[240px] md:w-[245px]",
  },
  {
    title: "Monetization frameworks",
    description: "Convert attention to opportunity",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/682a8657476869d7689dad64_monetization%20framework-p-500.png",
    alt: "Monetization frameworks visual",
    imageClassName: "w-[190px] sm:w-[205px] md:w-[210px]",
  },
  {
    title: "Founder ecosystem",
    description: "Build with friends, not alone",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6822d5f4578995ac87d2f211_founder%20ecosystem.webp",
    alt: "Founder ecosystem visual",
    imageClassName: "w-[240px] sm:w-[260px] md:w-[270px]",
  },
  {
    title: "Execution playbooks",
    description: "Grow with clarity and confidence",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6822d5f425064266cd0d41b5_execution%20framework.webp",
    alt: "Execution playbooks visual",
    imageClassName: "w-[220px] sm:w-[235px] md:w-[245px]",
  },
  {
    title: "Memorable experiences",
    description: "Life-changing community",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6822d5f4e816ede22d15dbdf_memorable%20experience.webp",
    alt: "Memorable experiences visual",
    imageClassName: "w-[185px] sm:w-[205px] md:w-[215px]",
  },
];
function BusinessFeatureCard({ item }: { item: BusinessFeature }) {
  return (
    <article className="card-basic flex h-full min-h-[300px] flex-col rounded-[8px] px-6 pb-8 pt-7 text-center shadow-[0_12px_34px_rgba(16,16,16,0.055)] sm:min-h-[330px] sm:px-7 sm:pb-9 sm:pt-8">
      <div className="flex min-h-[150px] flex-1 items-center justify-center sm:min-h-[165px] md:min-h-[175px]">
        <Image
          src={item.image}
          alt={item.alt || "Feature visual"}
          width={420}
          height={300}
          className={`h-auto max-w-full object-contain ${item.imageClassName || "w-[220px] sm:w-[240px] md:w-[250px]"
            }`}
        />
      </div>
      <div className="mt-5 sm:mt-6">
        <h3 className="font-body text-[18px] font-medium leading-[1.15] tracking-[-0.03em] text-ink sm:text-[20px] md:text-[21px]">
          {item.title}
        </h3>

        <p className="mt-3 font-body text-[15px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[16px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function BusinessWorksSection({
  heading = (
    <>
      Build a business that works for you, not the other way
      <br className="hidden lg:block" /> around.
    </>
  ),
  features = defaultFeatures,
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  sectionClassName = "",
  containerClassName = "",
}: BusinessWorksSectionProps) {
  return (
    <section
      className={`bg-cream  ${sectionClassName}`}
    >
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="layout-heading-center max-w-full">
          <h2 className="text-heading-section">{heading}</h2>
        </div>

        <div className={`mt-10 grid gap-5 sm:mt-12 lg:gap-6 ${gridClassName}`}>
          {features.map((item, index) => (
            <BusinessFeatureCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}