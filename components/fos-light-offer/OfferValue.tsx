import Image from "next/image";
import { type ReactNode } from "react";

type OfferValueSectionProps = {
  heading?: ReactNode;
  image?: string;
  imageAlt?: string;
  introText?: ReactNode;
  bullets?: ReactNode[];
  closingLines?: ReactNode[];
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultBullets: ReactNode[] = [
  "Proprietary Founder OS frameworks",
  "Systems refined over 17+ years",
  "The same mental models used inside Flagship & Velocity",
  "A foundation that compounds across every offer you ever build",
];

const defaultClosingLines: ReactNode[] = [
  <>
    I <em>don’t</em> sell this publicly.
  </>,
  <>
    I <em>don’t</em> discount it on my site.
  </>,
];

export default function OfferValueSection({
  heading = "Why This Is Normally $3,500",
  image = "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6927d1534ab8bb28cbd2560a_Founder%20OS%20Light%20(1).webp",
  imageAlt = "Founder OS Light product preview",
  introText = "Founder OS Light includes:",
  bullets = defaultBullets,
  closingLines = defaultClosingLines,
  sectionClassName = "",
  containerClassName = "",
}: OfferValueSectionProps) {
  return (
    <section className={`bg-cream py-12 sm:py-14 lg:py-16 ${sectionClassName}`}>
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-heading-section text-center">
            {heading}
          </h2>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-16">
            <div className="flex justify-center lg:justify-start">
              <Image
                src={image}
                alt={imageAlt}
                width={610}
                height={360}
                sizes="(max-width: 1024px) 100vw, 610px"
                className="h-auto w-full max-w-[610px] object-contain"
              />
            </div>

            <div className="mx-auto w-full max-w-[620px] text-left lg:mx-0">
              <p className="font-body text-[19px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[21px]">
                {introText}
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-8 font-body text-[17px] font-medium leading-[1.45] tracking-[-0.01em] text-ink sm:text-[19px]">
                {bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>

              <div className="mt-6 space-y-3 font-body text-[18px] font-medium leading-[1.4] tracking-[-0.01em] text-ink sm:text-[20px]">
                {closingLines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}