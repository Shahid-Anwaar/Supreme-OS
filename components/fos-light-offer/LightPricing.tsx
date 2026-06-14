import Link from "next/link";
import { type ReactNode } from "react";

type FounderOsLightPricingSectionProps = {
  heading?: ReactNode;
  subheading?: ReactNode;
  description?: ReactNode;
  ctaText?: string;
  ctaHref?: string;
  normalPrice?: ReactNode;
  todayPrice?: ReactNode;
  footerText?: ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
};

export default function LightPricingSection({
  heading = "Founder OS Light",
  subheading = "Get the Core Systems That Turn Attention Into Leverage",
  description =
    "The fastest, cleanest way to stop guessing, remove chaos, and build a scalable brand with real systems (without overwhelm).",
  ctaText = "Yes! Give Me Founder OS Light For $197",
  ctaHref = "#checkout",
  normalPrice = "Normally $3,500",
  todayPrice = "Today: $197 (94% OFF)",
  footerText =
    "This private price is only available on this page as a thank-you for taking action.",
  sectionClassName = "",
  containerClassName = "",
}: FounderOsLightPricingSectionProps) {
  return (
    <section className={`bg-cream py-12 sm:py-14 lg:py-16 ${sectionClassName}`}>
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto max-w-[1280px] text-center text-ink">
          <h2 className="font-body text-[36px] font-black leading-[1.08] tracking-[-0.03em] sm:text-[46px] lg:text-[50px]">
            {heading}
          </h2>

          <h3 className="mx-auto mt-7 max-w-[1000px] font-body text-[26px] font-medium leading-[1.2] tracking-[-0.03em] sm:text-[34px] lg:text-[36px]">
            {subheading}
          </h3>

          <p className="mx-auto mt-7 max-w-[1250px] font-body text-[18px] font-medium leading-[1.35] tracking-[-0.01em] sm:text-[21px]">
            {description}
          </p>

          <div className="mt-7 flex justify-center">
            <Link
              href={ctaHref}
              className="inline-flex min-h-[62px] w-full max-w-[468px] items-center justify-center rounded-full bg-[#ccff24] px-8 text-center font-body text-[18px] font-black leading-none tracking-[-0.01em] text-ink transition hover:scale-[1.02] sm:text-[20px]"
            >
              {ctaText}
            </Link>
          </div>

          <div className="mt-8 font-body text-ink">
            <p className="text-[24px] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[26px]">
              {normalPrice}
            </p>

            <p className="mt-3 text-[22px] font-black leading-[1.15] tracking-[-0.02em] sm:text-[24px]">
              <span className="inline-block rounded-[3px] bg-[#ccff24] px-1.5 py-0.5">
                {todayPrice}
              </span>
            </p>
          </div>

          <p className="mx-auto mt-10 max-w-[850px] font-body text-[18px] font-medium leading-[1.35] tracking-[-0.01em] sm:text-[21px]">
            {footerText}
          </p>
        </div>
      </div>
    </section>
  );
}