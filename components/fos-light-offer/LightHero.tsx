import Link from "next/link";
import { type ReactNode } from "react";

type FounderOsLightHeroSectionProps = {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  badgeText?: ReactNode;
  videoSrc?: string;
  videoTitle?: string;
  ctaText?: string;
  ctaHref?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

export default function LightHeroSection({
  eyebrow = "FOUNDER OS",
  heading = "Install the Operating System That Turns Content Into Compounding Revenue",
  description =
    "Founder OS Light is the foundational framework inside Founder OS, the company that generates $15M per year from organic content with a 10-person team. You get the Content GPS, brand positioning system, monetization architecture, and focus frameworks that make the machine run. Delivered in the order that actually works.",
  badgeText = "Available to you right now",
  videoSrc = "https://fast.wistia.net/embed/iframe/swm454x5sa?autoPlay=true",
  videoTitle = "Unlock 95% Off FounderOS Lite and Transform Your Business",
  ctaText = "Yes! Give Me Founder OS Light For $197",
  ctaHref = "https://courses.founderos.com/offers/Byfu9Stz?coupon_code=OS-LIGHT-197",
  sectionClassName = "",
  containerClassName = "",
}: FounderOsLightHeroSectionProps) {
  return (
    <section className={`bg-cream py-8 sm:py-10 lg:py-12 ${sectionClassName}`}>
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto max-w-[1280px] text-center text-ink">
          <p className="font-body text-[14px] font-black uppercase leading-none tracking-[-0.02em] sm:text-[16px]">
            {eyebrow}
          </p>

          <h1 className="mx-auto mt-8 max-w-[1240px] text-heading-page">
            {heading}
          </h1>

          <p className="mx-auto mt-8 max-w-[1260px] font-body text-[22px] font-medium leading-[1.25] tracking-[-0.025em] text-ink sm:text-[26px]">
            {description}
          </p>

          <div className="mt-7">
            <span className="inline-block rounded-[3px] bg-[#ccff24] px-2 py-1 font-body text-[21px] font-black leading-none tracking-[-0.02em] text-ink sm:text-[25px]">
              {badgeText}
            </span>
          </div>

          <div className="mx-auto mt-7 w-full max-w-[620px] overflow-hidden rounded-[4px] bg-black shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-video w-full">
              <iframe
                src={videoSrc}
                title={videoTitle}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          <div className="mt-7 flex justify-center">
            <Link
              href={ctaHref}
              className="btn-base btn-brand btn-size-xl"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}