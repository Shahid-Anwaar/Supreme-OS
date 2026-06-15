import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { type ReactNode } from "react";

type LevelUpBusinessSectionProps = {
  heading?: ReactNode;
  items?: string[];
  ctaText?: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
};

const defaultItems = [
  "40+ monthly coaching sessions",
  "180+ systems to use in your business",
  "Plug-n-play templates and guides",
  "3 months of group mentorship sessions with Matt",
  "3 months of access to the Supreme OS digital community",
  "Leveraged content creation systems",
  "Content GPS playbook and process",
];

export default function LevelUpBusinessSection({
  heading = "Level up your online business.",
  items = defaultItems,
  ctaText = "WATCH THIS to LEARN more",
  ctaHref = "/apply",
  image = "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67a59c604cb5d3245ec7f178_founder-os-laptop.webp",
  imageAlt = "Supreme OS laptop preview",
}: LevelUpBusinessSectionProps) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="layout-page-container max-w-[1080px]">
        <h2 className="text-center text-heading-section">{heading}</h2>

        <div className="mt-10 grid items-center gap-10 md:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="rounded-[8px] bg-paper px-7 py-8 shadow-[0_10px_30px_rgba(16,16,16,0.06)] sm:px-9 sm:py-10 lg:px-10">
            <div className="space-y-5">
              {items.map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-start gap-4">
                  <Icon
                    icon="lucide:crosshair"
                    className="mt-1 h-[18px] w-[18px] shrink-0 text-primary-300 sm:h-[20px] sm:w-[20px]"
                  />

                  <p className="font-body text-[18px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[21px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                href={ctaHref}
                className="btn-base btn-size-xl btn-brand w-full uppercase sm:w-auto"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[430px] lg:min-h-[520px]">
            <div className="absolute inset-0 m-auto h-[340px] w-[340px] rounded-full bg-primary-300/35 blur-[90px] sm:h-[460px] sm:w-[460px]" />

            <Image
              src={image}
              alt={imageAlt}
              width={959}
              height={673}
              className="relative z-10 h-auto w-full max-w-[720px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}