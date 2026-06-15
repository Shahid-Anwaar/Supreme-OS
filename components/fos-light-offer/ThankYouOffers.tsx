import Link from "next/link";
import { type ReactNode } from "react";

type ThankYouOfferSectionProps = {
  heading?: ReactNode;
  productName?: ReactNode;
  normalPrice?: ReactNode;
  todayPrice?: ReactNode;
  leftHeading?: ReactNode;
  rightHeading?: ReactNode;
  leftBullets?: ReactNode[];
  rightBullets?: ReactNode[];
  bottomLine?: ReactNode;
  description?: ReactNode;
  ctaText?: string;
  ctaHref?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultLeftBullets: ReactNode[] = [
  "Is not available anywhere else",
  "Is not emailed",
  "Is not shown again",
  "Expires when you leave this page",
];

const defaultRightBullets: ReactNode[] = [
  "Install systems early",
  "Stop guessing",
  "Think in leverage",
  "Build calm, scalable businesses",
];

export default function ThankYouOfferSection({
  heading = "Your Private Thank-You Page Offer",
  productName = "Founder OS Light",
  normalPrice = "Normally: $3,500",
  todayPrice = "Today: $197 (94% OFF)",
  leftHeading = "This offer:",
  rightHeading = "The founders who win long-term:",
  leftBullets = defaultLeftBullets,
  rightBullets = defaultRightBullets,
  bottomLine = "Instant access. No upsells. No games.",
  description = (
    <>
      Founder OS Light is the <strong>cleanest entry point</strong> into that way
      of operating.
    </>
  ),
  ctaText = "Yes! Give Me Founder OS Light For $197",
  ctaHref = "#checkout",
  sectionClassName = "",
  containerClassName = "",
}: ThankYouOfferSectionProps) {
  return (
    <section className={`bg-cream py-8 sm:py-10 lg:py-12 ${sectionClassName}`}>
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto max-w-[1280px] rounded-[8px] bg-white px-6 py-12 text-ink sm:px-10 sm:py-14 lg:px-20 lg:py-14">
          <div className="text-center">
            <h2 className="text-heading-section">
              {heading}
            </h2>

            <div className="mt-9 space-y-3 font-body text-[22px] font-medium leading-[1.25] tracking-[-0.02em] text-ink sm:text-[26px]">
              <p>{productName}</p>
              <p>{normalPrice}</p>

              <p>
                <span className="inline-block rounded-[3px] bg-lime-300 px-1.5 py-0.5 font-black">
                  {todayPrice}
                </span>
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-[810px] gap-10 text-left sm:mt-12 md:grid-cols-2 md:gap-20">
            <div>
              <h3 className="font-body text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-ink sm:text-[20px]">
                {leftHeading}
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-9 font-body text-[17px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[19px]">
                {leftBullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-body text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-ink sm:text-[20px]">
                {rightHeading}
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-9 font-body text-[17px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[19px]">
                {rightBullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-[720px] text-center font-body text-[18px] font-medium leading-[1.45] tracking-[-0.01em] text-ink sm:text-[20px]">
            <p>{bottomLine}</p>

            <p className="mt-4">{description}</p>
          </div>

          <div className="mt-9 flex justify-center">
            <Link
              href={ctaHref}
              className="btn-base btn-size-xl btn-brand"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}