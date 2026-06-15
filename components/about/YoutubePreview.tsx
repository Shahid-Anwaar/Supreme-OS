import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

type YoutubePreviewSectionProps = {
  title?: ReactNode;
  description?: ReactNode;
  ctaText?: string;
  ctaHref?: string;
  ctaTarget?: "_self" | "_blank";
  laptopImage?: string;
  laptopAlt?: string;
  glassImage?: string;
  glassAlt?: string;
  videoCardImage?: string;
  videoCardAlt?: string;
  controlsImage?: string;
  controlsAlt?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

export default function YoutubePreviewSection({
  title = "YouTube",
  description = "Proven systems to grow your brand and gain time, location, and financial freedom.",
  ctaText = "See More",
  ctaHref = "https://linktw.in/nInMpY",
  ctaTarget = "_blank",
  laptopImage =
    "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad9d1a81e63f3bf67936b8_Macbook_pro_youtube%201.webp",
  laptopAlt = "Macbook Pro YouTube preview",
  glassImage =
    "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad9d1a81e63f3bf67936b1_glass%201.webp",
  glassAlt = "Video overlay background",
  videoCardImage =
    "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad9d1a81e63f3bf67936c0_dan%20koe%20youtube.webp",
  videoCardAlt = "YouTube video preview",
  controlsImage =
    "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad9d1a81e63f3bf67936af_bottom%20controls.svg",
  controlsAlt = "Video player controls",
  sectionClassName = "",
  containerClassName = "",
}: YoutubePreviewSectionProps) {
  return (
    <section
      className={`overflow-hidden bg-cream py-12 sm:py-14 md:py-16 lg:py-20 ${sectionClassName}`}
    >
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative flex min-h-[270px] items-center justify-center sm:min-h-[360px] lg:min-h-[420px]">
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[80px] w-[78%] -translate-x-1/2 rounded-full bg-black/25 blur-[34px]" />

            <Image
              src={laptopImage}
              alt={laptopAlt}
              width={960}
              height={580}
              className="relative z-10 h-auto w-full max-w-[620px] object-contain"
              priority={false}
            />

            <div className="absolute left-[50%] top-[2%] z-20 w-[40%] max-w-[260px] -translate-x-[5%] rounded-[5px] bg-black shadow-[0_14px_36px_rgba(16,16,16,0.28)] sm:top-[0%] lg:left-[55%] lg:w-[43%]">
              <div className="relative overflow-hidden rounded-[5px]">
                <Image
                  src={glassImage}
                  alt={glassAlt}
                  width={120}
                  height={190}
                  className="h-auto w-full object-cover"
                />

                <Image
                  src={videoCardImage}
                  alt={videoCardAlt}
                  width={320}
                  height={170}
                  className="absolute inset-x-0 top-0 h-auto w-full object-cover"
                />

                <Image
                  src={controlsImage}
                  alt={controlsAlt}
                  width={320}
                  height={40}
                  className="absolute inset-x-0 bottom-0 h-auto w-full"
                />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-heading-section">
              {title}
            </h2>

            <p className="mx-auto mt-6 max-w-[590px] font-body text-[18px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[21px] lg:mx-0">
              {description}
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href={ctaHref}
                target={ctaTarget}
                rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
                className="btn-base btn-size-xl btn-brand w-full sm:w-auto"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}