import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

type ThreeGridItem = {
  title: ReactNode;
  description: ReactNode;
  icon: string;
  iconAlt?: string;
};

type ThreeGridSectionProps = {
  heading?: ReactNode;
  items?: ThreeGridItem[];
  gridClassName?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaHref?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultItems : ThreeGridItem[] = [
  {
    title: "Curated community",
    description: "Connect with fellow founders. Learn and level up together.",
    icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677714c852e6e45a2580e687_curated_community.webp",
    iconAlt: "Curated community",
  },
  {
    title: "Massive clarity",
    description: "Get clear on your goals and make your vision a reality.",
    icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67771557911a791208dd683c_massive_clarity.webp",
    iconAlt: "Massive clarity",
  },
  {
    title: "Leads and sales",
    description: "Frameworks that transform audience into opportunity.",
    icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677715655708d9cfede150d7_generation_conversion.webp",
    iconAlt: "Leads and sales",
  },
  {
    title: "Plug-and-play systems",
    description:
      "Maximize your efficiency and reduce your operational involvement.",
    icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6777156e52e6e45a258170b5_plugsystems.webp",
    iconAlt: "Plug-and-play systems",
  },
  {
    title: "Content systems",
    description:
      "Build an audience of raving fans with a sustainable content creation system.",
    icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6777157a1c8bfe60b8400819_raving_fans.webp",
    iconAlt: "Content systems",
  },
  {
    title: "Expert guidance",
    description:
      "Eliminate guesswork with real-time feedback from successful founders.",
    icon: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677715822c0855c7c4e272ec_expert_guidance.webp",
    iconAlt: "Expert guidance",
  },
];

function ThreeGridCard({ item }: { item: ThreeGridItem }) {
  return (
    <article className="card-basic flex h-full min-h-[220px] flex-col items-center justify-center rounded-[8px] bg-paper px-6 py-8 text-center shadow-[0_12px_34px_rgba(16,16,16,0.055)] sm:min-h-[235px] sm:px-8 sm:py-9">
      <div className="flex h-[58px] items-center justify-center">
        <Image
          src={item.icon}
          alt={item.iconAlt || "Grid icon"}
          width={58}
          height={58}
          className="h-[50px] w-[50px] object-contain opacity-70 sm:h-[56px] sm:w-[56px]"
        />
      </div>

      <div className="mt-5">
        <h3 className="font-body text-[24px] font-medium leading-[1.12] tracking-[-0.03em] text-ink sm:text-[27px] md:text-[29px]">
          {item.title}
        </h3>

        <p className="mx-auto mt-3 max-w-[330px] font-body text-[17px] font-medium leading-[1.32] tracking-[-0.01em] text-ink sm:text-[19px] md:text-[20px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function ThreeGridSection({
  heading,
  items = defaultItems,
  gridClassName = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  showCta = true,
  ctaText = "Book a Brand Strategy Call",
  ctaHref = "#book-call",
  sectionClassName = "",
  containerClassName = "",
}: ThreeGridSectionProps) {
  return (
    <section
      className={`bg-cream py-12 sm:py-14 md:py-16 lg:py-20 ${sectionClassName}`}
    >
      <div className={`layout-page-container ${containerClassName}`}>
        {heading && (
  <div className="layout-heading-center mb-10 sm:mb-12">
    <h2 className="text-heading-section">{heading}</h2>
  </div>
)}
        <div className={`grid gap-5 md:gap-6 ${gridClassName}`}>
          {items.map((item, index) => (
            <ThreeGridCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        {showCta && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href={ctaHref}
              className="btn-base btn-size-xl btn-brand w-full sm:w-auto"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}