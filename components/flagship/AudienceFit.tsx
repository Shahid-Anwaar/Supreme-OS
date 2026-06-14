import Link from "next/link";
import { type ReactNode } from "react";

type AudienceFitSectionProps = {
  heading?: ReactNode;
  brandName?: string;
  yesItems?: ReactNode[];
  noItems?: ReactNode[];
  ctaText?: string;
  ctaHref?: string;
};

const defaultYesItems: ReactNode[] = [
  <>
    You’re a founder who{" "}
    <strong className="font-black">cares about delighting your community</strong>{" "}
    and wants to level up and make a serious impact.
  </>,
  <>
    You want{" "}
    <strong className="font-black">
      proven frameworks, insights, and tools
    </strong>{" "}
    for scaling your company and avoiding fatal mistakes.
  </>,
  <>
    You know that the real magic is in the execution. You like to take action on
    what you learn and stay accountable to your goals.
  </>,
  <>
    You run an online business. This program is{" "}
    <strong className="font-black">designed for founders, by founders.</strong>{" "}
    I’m going to share with you the frameworks I learned the hard way.
  </>,
  <>
    You want a{" "}
    <strong className="font-black">
      structured approach to making money online
    </strong>{" "}
    using tools and systems to increase efficiency and leverage.
  </>,
  <>
    You want to <strong className="font-black">scale your business</strong>{" "}
    without burning yourself out or sacrificing your health and well-being.
  </>,
];

const defaultNoItems: ReactNode[] = [
  <>
    You’re looking for a “quick fix” for your business problems.{" "}
    <strong className="font-black">
      This program will help you build an enduring brand and business.
    </strong>{" "}
    It’s going to take work on your end and it takes time to implement.
  </>,
  <>
    You care more about following the latest business “trends” or “hacks” than
    using proven methods to accomplish your goals. We rely on mentorship, a
    community of fellow founders, and{" "}
    <strong className="font-black">
      proven systems to help you achieve your goals.
    </strong>
  </>,
  <>
    You’re more interested in doing things “your own way” and aren’t willing to
    listen to outside feedback.{" "}
    <strong className="font-black">
      We emphasize proven systems, not our ego.
    </strong>
  </>,
  <>
    You want to stay anonymous.{" "}
    <strong className="font-black">
      This program focuses on helping people stand out online
    </strong>{" "}
    and create a loyal community of dream customers.
  </>,
];

function FitPoint({
  children,
  variant = "yes",
}: {
  children: ReactNode;
  variant?: "yes" | "no";
}) {
  const glowClass =
    variant === "yes"
      ? "bg-primary-300 shadow-[0_0_22px_rgba(210,255,35,0.9)]"
      : "bg-red-400 shadow-[0_0_22px_rgba(255,70,70,0.8)]";

  return (
    <div className="flex items-start gap-5">
      <span
        className={`mt-2 h-4 w-4 shrink-0 rounded-full blur-[2px] ${glowClass}`}
      />

      <p className="font-body text-[18px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[20px] md:text-[21px]">
        {children}
      </p>
    </div>
  );
}

export default function AudienceFitSection({
  heading = (
    <>
      How do I know if <br /> Supreme OS is for me?
    </>
  ),
  brandName = "Supreme OS",
  yesItems = defaultYesItems,
  noItems = defaultNoItems,
  ctaText = "Book a Brand Strategy Call",
  ctaHref = "#book-call",
}: AudienceFitSectionProps) {
  return (
    <section className="bg-cream py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="layout-page-container">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="text-center text-heading-section">{heading}</h2>

          <div className="mt-12 sm:mt-14 md:mt-16">
            <h3 className="text-center font-body text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-ink sm:text-[34px] md:text-[38px]">
              {brandName}{" "}
              <span className="bg-primary-300 px-1.5 text-ink">
                is for you
              </span>{" "}
              if...
            </h3>

            <div className="mt-10 grid gap-x-16 gap-y-7 md:grid-cols-2 md:gap-y-8">
              {yesItems.map((item, index) => (
                <FitPoint key={`yes-${index}`} variant="yes">
                  {item}
                </FitPoint>
              ))}
            </div>
          </div>

          <div className="mt-14 sm:mt-16 md:mt-18">
            <h3 className="text-center font-body text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-ink sm:text-[34px] md:text-[38px]">
              {brandName}{" "}
              <span className="rounded-[3px] bg-red-400 px-1.5 text-white">
                is not for you
              </span>{" "}
              if...
            </h3>

            <div className="mt-10 grid gap-x-16 gap-y-7 md:grid-cols-2 md:gap-y-8">
              {noItems.map((item, index) => (
                <FitPoint key={`no-${index}`} variant="no">
                  {item}
                </FitPoint>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center sm:mt-14">
            <Link
              href={ctaHref}
              className="btn-base btn-size-xl btn-brand w-full sm:w-auto"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}