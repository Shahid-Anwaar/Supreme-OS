import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { type ReactNode } from "react";

type MissionSectionProps = {
  heading?: ReactNode;
  introText?: ReactNode;
  secondIntroText?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  contentHeading?: ReactNode;
  paragraphs?: ReactNode[];
  bullets?: ReactNode[];
  ctaText?: string;
  ctaHref?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultBullets: ReactNode[] = [
  "Work where they want",
  "On what they want",
  "With who they want",
  "Wherever they want",
];

export default function MissionSection({
  heading = "Our mission: Make the founder experience delightful.",
  introText = "Supreme OS was born in 2021 when one founder brainstormed his calling in life.",
  secondIntroText =
    "Amidst the Red Rocks in Sedona, this led to the pursuit of helping founders, growing a community of 2 million, and building automations to put businesses on autopilot – and bring more fun to the founder's journey.",
  image = "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6822d8ed187cdbb288b43413_mattgray.webp",
  imageAlt = "Matt Gray sitting outdoors",
  imageCaption = "Matt Gray / Founder & CEO",
  contentHeading = "Building a business is hard.",
  paragraphs = [
    "My purpose is to help make the founder's journey more joyful and magical.",
    "All founders deserve to control the 4 Ws in life and have the freedom to:",
    "I found freedom by creating systems, eliminating the unessential, taking care of my health, and building a community of fellow builders.",
    "And you can too.",
  ],
  bullets = defaultBullets,
  ctaText = "Find Out How",
  ctaHref = "#book-call",
  sectionClassName = "",
  containerClassName = "",
}: MissionSectionProps) {
  return (
    <section
      className={`bg-cream py-3 ${sectionClassName}`}
    >
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto max-w-[1320px] text-center">
          <h2 className="text-heading-section">
            {heading}
          </h2>

          <p className="mx-auto mt-12 max-w-[980px] text-body-default">
            {introText}
          </p>

          <p className="mx-auto mt-10 max-w-[1280px] text-body-default">
            {secondIntroText}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1120px] gap-10 md:mt-14 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <div>
            <div className="relative overflow-hidden rounded-[8px] bg-paper">
              <Image
                src={image}
                alt={imageAlt}
                width={620}
                height={760}
                className="h-auto w-full object-cover"
              />
            </div>

            {imageCaption && (
              <p className="mt-4 font-body text-[17px] font-medium leading-none tracking-[-0.01em] text-ink sm:text-[20px]">
                {imageCaption}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <div className="text-left">
              <h3 className="font-body text-[18px] font-black leading-[1.25] tracking-[-0.01em] text-ink sm:text-[21px]">
                {contentHeading}
              </h3>

              {paragraphs[0] && (
                <p className="mt-7 font-body text-[16px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[18px]">
                  {paragraphs[0]}
                </p>
              )}

              {paragraphs[1] && (
                <p className="mt-7 font-body text-[16px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[18px]">
                  {paragraphs[1]}
                </p>
              )}

              <div className="mt-6 space-y-4">
                {bullets.map((bullet, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Icon
                      icon="lucide:crosshair"
                      className="h-[18px] w-[18px] shrink-0 text-primary-300"
                    />

                    <p className="font-body text-[16px] font-medium leading-[1.25] tracking-[-0.01em] text-ink sm:text-[18px]">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {paragraphs[2] && (
                <p className="mt-8 font-body text-[16px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[18px]">
                  {paragraphs[2]}
                </p>
              )}

              {paragraphs[3] && (
                <p className="mt-8 font-body text-[16px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[18px]">
                  {paragraphs[3]}
                </p>
              )}

              <div className="mt-8">
                <Link
                  href={ctaHref}
                  className="btn-base btn-size-xl btn-brand w-full sm:w-auto"
                >
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}