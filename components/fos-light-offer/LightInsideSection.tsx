import Image from "next/image";
import { type ReactNode } from "react";

type InsideModule = {
  title: ReactNode;
  image: string;
  imageAlt?: string;
  intro: ReactNode;
  bullets: ReactNode[];
  outro: ReactNode;
};

type FounderOsLightInsideSectionProps = {
  heading?: ReactNode;
  modules?: InsideModule[];
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultModules: InsideModule[] = [
  {
    title: "Core Content GPS",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/69cf7650e8c4552203ee03cd_GPS%20Flow%20Icon.webp",
    imageAlt: "GPS flow icon",
    intro: "The simplified version of the Content GPS that shows you:",
    bullets: [
      "What content to create",
      "Where to publish it",
      "Why it converts",
      "How to stop random posting forever",
    ],
    outro: "This alone removes 80% of content confusion.",
  },
  {
    title: "Founder-Led Brand Positioning",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/69cf76500634e520426daf29_Positionning.webp",
    imageAlt: "Founder-led brand positioning icon",
    intro: "You’ll learn how to:",
    bullets: [
      "Stop sounding like everyone else",
      <>
        Anchor your brand around <strong>one clear idea</strong>
      </>,
      <>
        Attract the <em>right</em> audience — not just more followers
      </>,
    ],
    outro: "No rebrand. No identity crisis. Just clarity and resonance.",
  },
  {
    title: "Monetization Foundations (Clean & Scalable)",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/69cf7650afc275d660217ff4_Monetization.webp",
    imageAlt: "Monetization foundations icon",
    intro: "You’ll see:",
    bullets: [
      "How attention actually turns into revenue",
      "Where founders accidentally kill leverage",
      <>
        How to design monetization that scales <em>with</em> your life
      </>,
    ],
    outro: "This is about leverage, not hustling harder.",
  },
  {
    title: "Focus, Output & Consistency Systems",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/69cf776dd6c6b89708afcf34_Founder-Led%20Brand%20Positioning%20Icon.webp",
    imageAlt: "Focus output and consistency systems icon",
    intro: "The same thinking used inside Founder OS to:",
    bullets: [
      "Protect deep work",
      "Reduce decision fatigue",
      "Build momentum without burnout",
    ],
    outro: "Because willpower is fragile. Systems are permanent.",
  },
];

export default function LightInsideSection({
  heading = "What You Get Inside Founder OS Light",
  modules = defaultModules,
  sectionClassName = "",
  containerClassName = "",
}: FounderOsLightInsideSectionProps) {
  return (
    <section className={`bg-cream py-10 sm:py-12 lg:py-14 ${sectionClassName}`}>
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto max-w-[1180px]">
          <h2 className="text-heading-section text-center">
            {heading}
          </h2>

          <div className="mt-8 space-y-7">
            {modules.map((module, index) => (
              <div
                key={index}
                className="grid items-center gap-8 rounded-[8px] bg-white px-7 py-10 shadow-[0_18px_45px_rgba(0,0,0,0.04)] md:grid-cols-[0.95fr_1.35fr] md:px-12 lg:px-14 lg:py-11"
              >
                <div className="flex justify-center">
                  <Image
                    src={module.image}
                    alt={module.imageAlt || ""}
                    width={260}
                    height={220}
                    sizes="(max-width: 768px) 220px, 260px"
                    className="h-auto w-full max-w-[220px] object-contain sm:max-w-[250px]"
                  />
                </div>

                <div className="grid gap-8 md:grid-cols-[2px_1fr] md:gap-12">
                  <div className="hidden h-full w-[2px] bg-[#ccff24] md:block" />

                  <div className="font-body text-ink">
                    <h3 className="text-[23px] font-black leading-[1.2] tracking-[-0.02em] sm:text-[25px]">
                      {module.title}
                    </h3>

                    <div className="mt-4 text-[18px] font-medium leading-[1.4] tracking-[-0.01em] sm:text-[20px]">
                      <p>{module.intro}</p>

                      <ul className="mt-3 list-disc space-y-2 pl-8">
                        {module.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>

                      <p className="mt-5">{module.outro}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}