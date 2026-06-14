import { type ReactNode } from "react";

type ImpactStat = {
  value: ReactNode;
  label: ReactNode;
};

type FounderImpactSectionProps = {
  heading?: ReactNode;
  description?: ReactNode;
  stats?: ImpactStat[];
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultStats: ImpactStat[] = [
  {
    value: "3917",
    label: "Founders transformed through our products",
  },
  {
    value: "17x",
    label: "Average reported ROI of Supreme OS Program",
  },
  {
    value: "$20M",
    label: "Average revenue per Mastermind member",
  },
];

export default function AboutHeroSection({
  heading = (
    <>
      Transforming good
      <br />
      founders into great
    </>
  ),
  description = "We exist to create the world's greatest founder community.",
  stats = defaultStats,
  sectionClassName = "",
  containerClassName = "",
}: FounderImpactSectionProps) {
  return (
    <section
      className={`bg-cream py-12 sm:py-14 md:py-16 lg:py-20 ${sectionClassName}`}
    >
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-heading-page font-semibold tracking-wider lg:text-[76px]">
            {heading}
          </h2>

          <p className="mx-auto mt-9 max-w-full font-semibold text-[24px] leading-[1.25] tracking-[-0.025em] text-ink sm:text-[30px] md:text-[34px]">
            {description}
          </p>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          {stats.map((item, index) => (
            <div
              key={`${item.value}-${index}`}
              className="flex gap-5 border-b border-ink/70 py-10 sm:py-12 justify-between md:items-center lg:py-14"
            >
              <div>
                <div className="font-body text-[40px] font-bold leading-none tracking-[-0.04em] text-ink sm:text-[56px] md:text-[68px] lg:text-[76px]">
                  {item.value}
                </div>
              </div>

              <div className="md:text-left">
                <p className="text-body-default">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}