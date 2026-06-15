import Link from "next/link";
import { type ReactNode } from "react";

type FounderOsLightIntroSectionProps = {
  heading?: ReactNode;
  leadText?: ReactNode;
  description?: ReactNode;
  beforeScaleText?: ReactNode;
  boldLines?: ReactNode[];
  leverageText?: ReactNode;
  finalText?: ReactNode;
  ctaText?: string;
  ctaHref?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultBoldLines: ReactNode[] = ["No Slack.", "No live calls.", "No noise."];

export default function LightIntroSection({
  heading = "What Is Founder OS Light?",
  leadText = "Founder OS Light is the foundational operating system behind Founder OS.",
  description = (
    <>
      It’s designed to help you{" "}
      <strong>install the core systems</strong> that make a founder-led brand
      work...without Slack, without calls, and without information overload.
    </>
  ),
  beforeScaleText = (
    <>
      Think of it as the operating system you should’ve had{" "}
      <em>before</em> trying to scale.
    </>
  ),
  boldLines = defaultBoldLines,
  leverageText = (
    <>
      Just the <strong>highest-leverage frameworks</strong>, in the{" "}
      <strong>right order</strong>, so you can move with clarity.
    </>
  ),
  finalText = (
    <>
      Think of this as the missing layer between “content” and “results.”
    </>
  ),
  ctaText = "Yes! Give Me Founder OS Light For $197",
  ctaHref = "#checkout",
  sectionClassName = "",
  containerClassName = "",
}: FounderOsLightIntroSectionProps) {
  return (
    <section className={`bg-cream py-12 sm:py-14 lg:py-16 ${sectionClassName}`}>
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto max-w-[1280px] text-center text-ink">
          <h2 className="text-heading-section">
            {heading}
          </h2>

          <div className="mx-auto mt-8 max-w-[1260px] font-body text-[18px] font-medium leading-[1.35] tracking-[-0.01em] sm:text-[20px]">
            <p className="font-black">{leadText}</p>

            <p className="mt-3">{description}</p>

            <p className="mt-4">{beforeScaleText}</p>

            <div className="mt-4 space-y-3 font-black">
              {boldLines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <p className="mt-4">{leverageText}</p>

            <p className="mt-4">{finalText}</p>
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