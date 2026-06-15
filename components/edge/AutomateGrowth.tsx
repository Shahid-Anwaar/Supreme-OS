import Image from "next/image";
import { type ReactNode } from "react";

type GrowthStep = {
    title: string;
    items: string[];
    image: string;
    imageAlt?: string;
    dotClassName?: string;
    imageClassName?: string;
    wrapperClassName?: string;
};

type AutomateGrowthSectionProps = {
    heading?: ReactNode;
    steps?: GrowthStep[];
    mobileArrowImage?: string;
    mobileArrowAlt?: string;
    sectionClassName?: string;
    containerClassName?: string;
};

const defaultSteps: GrowthStep[] = [
    {
        title: "Attract",
        items: ["Action", "Purpose", "Results"],
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677709529688bccd51d131cb_operating_system.webp",
        imageAlt: "Operating System",
        dotClassName: "bg-sky-300",
        imageClassName: "w-[128px]",
        wrapperClassName: "left-[0px] top-[250px]",
    },
    {
        title: "Nurture",
        items: ["Customer", "Content", "Messages"],
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677709529688bccd51d131cd_niche.webp",
        imageAlt: "Niche",
        dotClassName: "bg-orange-300",
        imageClassName: "w-[138px]",
        wrapperClassName: "left-[250px] top-[155px]",
    },
    {
        title: "Monetize",
        items: ["Audience", "Brand", "Community"],
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677709529688bccd51d131cf_community.webp",
        imageAlt: "Community",
        dotClassName: "bg-fuchsia-200",
        imageClassName: "w-[138px]",
        wrapperClassName: "left-[500px] top-[80px]",
    },
    {
        title: "Scale",
        items: ["Process", "Technology", "Team"],
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677709529688bccd51d131d1_scale.webp",
        imageAlt: "Scale",
        dotClassName: "bg-lime-300",
        imageClassName: "w-[138px]",
        wrapperClassName: "left-[745px] top-[10px]",
    },
];

function GrowthStepCard({
    step,
    responsive = false,
}: {
    step: GrowthStep;
    responsive?: boolean;
}) {
    return (
        <div
            className={
                responsive
                    ? "flex w-full items-center gap-3 rounded-[24px] bg-white/45 p-3 sm:gap-4 sm:p-4 md:p-5"
                    : "flex items-center gap-4"
            }
        >
            <Image
                src={step.image}
                alt={step.imageAlt || step.title}
                width={180}
                height={180}
                className={
                    responsive
                        ? "h-auto w-[78px] shrink-0 object-contain sm:w-[95px] md:w-[112px]"
                        : `h-auto shrink-0 object-contain ${step.imageClassName || "w-[138px]"}`
                }
            />

            <div className={responsive ? "text-left" : "mt-16 text-left"}>
                <h3
                    className={
                        responsive
                            ? "font-body text-[18px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[20px] md:text-[22px]"
                            : "font-body text-[20px] font-semibold leading-none tracking-[-0.02em] text-ink"
                    }
                >
                    {step.title}
                </h3>

                <ul className={responsive ? "mt-2.5 space-y-1" : "mt-3 space-y-1"}>
                    {step.items.map((item) => (
                        <li
                            key={item}
                            className={
                                responsive
                                    ? "flex items-start gap-2.5 font-body text-[15px] font-medium leading-[1.15] tracking-[-0.01em] text-ink sm:text-[16px] md:text-[17px]"
                                    : "flex items-start gap-3 font-body text-[17px] font-medium leading-[1.15] tracking-[-0.01em] text-ink"
                            }
                        >
                            <span
                                className={`mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full ${
                                    step.dotClassName || "bg-primary-300"
                                }`}
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function AutomateGrowthSection({
    heading = "Get the framework for efficient growth.",
    steps = defaultSteps,
    sectionClassName = "",
    containerClassName = "",
}: AutomateGrowthSectionProps) {
    return (
        <section className={`bg-cream ${sectionClassName}`}>
            <div className={`layout-page-container ${containerClassName}`}>
                <div className="layout-heading-center max-w-full">
                    <h2 className="text-heading-section">{heading}</h2>
                </div>

                {/* XL exact layout - unchanged */}
                <div className="relative mx-auto mt-10 hidden min-h-[420px] max-w-[990px] overflow-visible xl:block">
                    <svg
                        className="pointer-events-none absolute left-[-70px] top-[24px] h-[355px] w-[1010px]"
                        viewBox="0 0 1010 355"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <marker
                                id="growth-arrow"
                                markerWidth="10"
                                markerHeight="10"
                                refX="8"
                                refY="5"
                                orient="auto"
                                markerUnits="strokeWidth"
                            >
                                <path d="M0 0 L10 5 L0 10" fill="none" stroke="#111" />
                            </marker>
                        </defs>

                        <path
                            d="M30 330 C250 260 520 155 1000 15"
                            stroke="#111"
                            strokeWidth="1"
                            markerEnd="url(#growth-arrow)"
                        />
                    </svg>

                    {steps.map((step, index) => (
                        <div
                            key={`${step.title}-${index}`}
                            className={`absolute z-10 ${step.wrapperClassName || ""}`}
                        >
                            <GrowthStepCard step={step} />
                        </div>
                    ))}
                </div>

                {/* LG / MD responsive layout */}
                <div className="relative mx-auto mt-10 hidden max-w-[900px] lg:block xl:hidden">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                        {steps.map((step, index) => (
                            <div key={`${step.title}-${index}`} className="relative">
                                <GrowthStepCard step={step} responsive />

                                {(index === 0 || index === 2) && (
                                    <div className="pointer-events-none absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:block">
                                        <span className="text-[26px] leading-none text-ink/40">→</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* SM / Mobile layout - no image arrow, no extra space */}
                <div className="mx-auto mt-8 max-w-[520px] space-y-4 lg:hidden">
                    {steps.map((step, index) => (
                        <div key={`${step.title}-${index}`} className="relative">
                            <GrowthStepCard step={step} responsive />

                            {index !== steps.length - 1 && (
                                <div className="pointer-events-none absolute left-1/2 -bottom-[14px] z-20 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-cream">
                                    <span className="text-[18px] leading-none text-ink/45">
                                        ↓
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}