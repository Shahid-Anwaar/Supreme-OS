import Image from "next/image";
import { type ReactNode } from "react";

type CurriculumModule = {
  part: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt?: string;
};

type CourseCurriculumSectionProps = {
  heading?: ReactNode;
  modules?: CurriculumModule[];
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultModules: CurriculumModule[] = [
  {
    part: "Part 1",
    title: "Get clear on your vision.",
    description:
      "Vision is essential for growth and success. In this module, you'll discover the systems to map out your vision.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6777202ffa67144ac482831b_founder-module-1.webp",
    imageAlt: "Founder Course Module - Get clear on your vision",
  },
  {
    part: "Part 2",
    title: "Build your operating system.",
    description:
      "Frameworks that create sustainable momentum with minimal intervention.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677729ceff0190670ae28db8_653c1e2165310461ef83b2b5_founder-module-2.webp",
    imageAlt: "Distribution Strategy",
  },
  {
    part: "Part 3",
    title: "Leverage audience growth systems.",
    description:
      "Audience quality determines your growth ceiling. These frameworks help you attract, engage, and retain followers.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677729ce1ed0f7c3fbfeeef9_653c1f9cbe32e9dd3c8849c3_founder-module-3%20(1).webp",
    imageAlt: "Megaphone icon with social media notification bubbles",
  },
  {
    part: "Part 4",
    title: "Craft a winning offer.",
    description:
      "Develop a value proposition that resonates deeply with your audience and positions your solution as the clear choice.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677729ce83792e5320ce1de9_653c1fa650324156ad6be9a8_founder-module-4.webp",
    imageAlt: "Magnet with glowing lightning bolts",
  },
  {
    part: "Part 5",
    title: "Scale your monetization.",
    description:
      "Transform audience engagement into sustainable revenue. Create pathways from free content to paid solutions.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677729cef7f092b4fe294fc8_653c207185d10496354a272d_founder-module-5.webp",
    imageAlt: "Payment notification and floating money visual",
  },
];

function CurriculumModuleCard({ item }: { item: CurriculumModule }) {
  return (
    <article className="card-basic overflow-hidden rounded-[8px] bg-paper px-6 py-8 shadow-[0_12px_34px_rgba(16,16,16,0.055)] sm:px-8 sm:py-9 md:px-10 lg:px-14 lg:py-12">
      <div className="grid items-center gap-8 md:grid-cols-[300px_1px_1fr] lg:grid-cols-[340px_1px_1fr] lg:gap-12">
        <div className="flex justify-center md:justify-start">
          <Image
            src={item.image}
            alt={item.imageAlt || String(item.title)}
            width={320}
            height={260}
            className="h-auto w-[190px] object-contain sm:w-[230px] md:w-[260px] lg:w-[290px]"
          />
        </div>

        <div className="hidden h-full min-h-[170px] w-px bg-primary-300 md:block" />

        <div className="text-left">
          <div className="inline-flex rounded-[5px] bg-primary-300 px-5 py-3 font-body text-[16px] font-medium leading-none tracking-[-0.01em] text-ink sm:text-[18px]">
            {item.part}
          </div>

          <div className="mt-7">
            <h3 className="font-body text-[24px] font-medium leading-[1.15] tracking-[-0.025em] text-ink sm:text-[27px] md:text-[29px]">
              {item.title}
            </h3>

            <p className="mt-4 max-w-[650px] font-body text-[17px] font-medium leading-[1.38] tracking-[-0.01em] text-ink sm:text-[19px] md:text-[20px]">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CourseCurriculumSection({
  heading = "Program content:",
  modules = defaultModules,
  sectionClassName = "",
  containerClassName = "max-w-[1080px]",
}: CourseCurriculumSectionProps) {
  return (
    <section
      className={`bg-cream py-12 sm:py-14 md:py-16 lg:py-20 ${sectionClassName}`}
    >
      <div className="layout-page-container">
        <div className="layout-heading-center">
          <h2 className="text-heading-section">{heading}</h2>
        </div>

        <div className={`mx-auto mt-10 space-y-6 sm:mt-12 ${containerClassName}`}>
          {modules.map((item, index) => (
            <CurriculumModuleCard key={`${item.part}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}