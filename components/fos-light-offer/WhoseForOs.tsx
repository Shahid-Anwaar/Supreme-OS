import Link from "next/link";
import { type ReactNode } from "react";

type WhoFounderOsLightIsForSectionProps = {
  heading?: ReactNode;
  forTitlePrefix?: ReactNode;
  forHighlight?: ReactNode;
  forTitleSuffix?: ReactNode;
  notForTitlePrefix?: ReactNode;
  notForHighlight?: ReactNode;
  notForTitleSuffix?: ReactNode;
  forItems?: ReactNode[];
  notForItems?: ReactNode[];
  ctaText?: string;
  ctaHref?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultForItems: ReactNode[] = [
  "You’re building or systemizing a personal brand.",
  "You value clarity, simplicity, and leverage.",
  "You want systems, not hype.",
  <>
    You want something you can <strong><em>actually implement.</em></strong>
  </>,
];

const defaultNotForItems: ReactNode[] = [
  "You want shortcuts.",
  "You won’t implement.",
  "You want guarantees.",
  "You want someone else to do the work.",
];

function GlowBulletList({
  items,
  variant = "green",
}: {
  items: ReactNode[];
  variant?: "green" | "red";
}) {
  const dotClass =
    variant === "green"
      ? "bg-[#ccff24] shadow-[0_0_18px_rgba(204,255,36,0.9)]"
      : "bg-[#ff4b55] shadow-[0_0_18px_rgba(255,75,85,0.75)]";

  return (
    <div className="mt-7 space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-5">
          <span
            className={`mt-[7px] h-[14px] w-[14px] shrink-0 rounded-full blur-[1px] ${dotClass}`}
          />

          <p className="font-body text-[17px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[19px]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function WhoseForOS({
  heading = "Who Founder OS Light Is For",
  forTitlePrefix = "Founder OS Light",
  forHighlight = "Is For You",
  forTitleSuffix = "If:",
  notForTitlePrefix = "This",
  notForHighlight = "Is NOT For You",
  notForTitleSuffix = "If:",
  forItems = defaultForItems,
  notForItems = defaultNotForItems,
  ctaText = "Yes! Give Me Founder OS Light For $197",
  ctaHref = "#checkout",
  sectionClassName = "",
  containerClassName = "",
}: WhoFounderOsLightIsForSectionProps) {
  return (
    <section className={`bg-cream py-10 sm:py-12 lg:py-14 ${sectionClassName}`}>
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto max-w-[1305px]">
          <h2 className="text-center text-heading-section">
            {heading}
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-6">
            <div className="rounded-[8px] bg-white px-7 py-10 shadow-[0_18px_45px_rgba(0,0,0,0.04)] sm:px-10 sm:py-12 lg:px-12">
              <h3 className="font-body text-[28px] font-medium leading-[1.15] tracking-[-0.03em] text-ink sm:text-[32px]">
                {forTitlePrefix}{" "}
                <span className="rounded-[3px] bg-[#ccff24] px-1.5">
                  {forHighlight}
                </span>{" "}
                {forTitleSuffix}
              </h3>

              <GlowBulletList items={forItems} variant="green" />
            </div>

            <div className="rounded-[8px] bg-white px-7 py-10 shadow-[0_18px_45px_rgba(0,0,0,0.04)] sm:px-10 sm:py-12 lg:px-12">
              <h3 className="font-body text-[28px] font-medium leading-[1.15] tracking-[-0.03em] text-ink sm:text-[32px]">
                {notForTitlePrefix}{" "}
                <span className="rounded-[3px] bg-[#ff4b55] px-1.5 text-white">
                  {notForHighlight}
                </span>{" "}
                {notForTitleSuffix}
              </h3>

              <GlowBulletList items={notForItems} variant="red" />
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