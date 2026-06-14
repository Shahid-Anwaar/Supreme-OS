import Image from "next/image";
import { type ReactNode } from "react";

type FounderTestimonial = {
  name: string;
  company: string;
  quote: string;
  description: string;
  image: string;
  imageAlt?: string;
};

type FounderTestimonialsSectionProps = {
  heading?: ReactNode;
  testimonials?: FounderTestimonial[];

  /**
   * Control cards per row from parent.
   * Examples:
   * "grid-cols-1"
   * "grid-cols-1 md:grid-cols-2"
   * "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
   */
  gridClassName?: string;

  /**
   * Use horizontal for 1 card per row.
   * Use vertical for 2 or 3 cards per row.
   */
  cardVariant?: "horizontal" | "vertical";

  sectionClassName?: string;
  containerClassName?: string;
};

const defaultTestimonials: FounderTestimonial[] = [
  {
    name: "Steve Gatena",
    company: "Pray.com",
    quote:
      "Supreme OS frameworks and systems have been transformational for my growth.",
    description:
      "Since learning these systems, I have grown my LinkedIn following significantly, launched a successful podcast, and scaled my SaaS business to new heights.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6773842175c0eee5ae448a79_steve-gatena%25201-p-500.png",
    imageAlt: "Steve Gatena",
  },
  {
    name: "Rob Hoffman",
    company: "Contact Studios",
    quote: "I have closed multiple new contracts.",
    description:
      "Supreme OS gave me the playbook to grow my audience. Best service ever. I do not know where I would be without this clarity, systems, and momentum.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67adc193c7bfa64f169bd46c_Rob%20(2).webp",
    imageAlt: "Rob Hoffman",
  },
];

function FounderTestimonialCard({
  item,
  variant = "vertical",
}: {
  item: FounderTestimonial;
  variant?: "horizontal" | "vertical";
}) {
  const isHorizontal = variant === "horizontal";

  if (!isHorizontal) {
    return (
      <article className="card-basic h-full rounded-[8px] bg-paper px-6 py-6 shadow-[0_12px_34px_rgba(16,16,16,0.055)] sm:px-8 sm:py-7 lg:px-10">
        <div className="flex items-start justify-between gap-5">
          <div className="relative h-[86px] w-[86px] shrink-0 overflow-hidden rounded-full bg-line sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px]">
            <Image
              src={item.image}
              alt={item.imageAlt || item.name}
              fill
              sizes="110px"
              className="object-cover object-top"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-end pt-3 text-right">
            <h3 className="font-body text-[25px] font-medium leading-[1.05] tracking-[-0.025em] text-ink sm:text-[30px] md:text-[34px]">
              {item.name}
            </h3>

            <div className="mt-3 flex max-w-full flex-wrap justify-end">
              <span className="inline-flex min-h-[22px] items-center rounded-full bg-primary-300 px-4 py-1 font-body text-[12px] font-black leading-none text-ink sm:text-[13px]">
                Founder
              </span>

              <span className="-ml-1 inline-flex min-h-[22px] items-center rounded-full border border-primary-400 bg-paper px-4 py-1 font-body text-[12px] font-medium leading-none text-ink sm:text-[13px]">
                {item.company}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-9 text-left">
          <p className="font-body text-[18px] font-medium leading-[1.33] tracking-[-0.012em] text-ink sm:text-[20px] md:text-[21px]">
            {item.quote} {item.description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="card-basic h-full overflow-hidden rounded-[8px] shadow-[0_12px_34px_rgba(16,16,16,0.055)]">
      <div className="grid h-full grid-cols-1 md:grid-cols-[320px_1px_1fr] lg:grid-cols-[360px_1px_1fr]">
        <div className="relative flex min-h-[240px] items-end justify-center overflow-hidden bg-paper px-6 pt-8 md:min-h-[290px]">
          <Image
            src={item.image}
            alt={item.imageAlt || item.name}
            width={360}
            height={360}
            className="h-[235px] w-[235px] rounded object-cover object-top sm:h-[260px] sm:w-[260px] md:h-[285px] md:w-[285px]"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper via-paper/90 to-transparent" />
        </div>

        <div className="hidden bg-primary-300 md:block" />

        <div className="flex items-center px-7 py-8 sm:px-9 md:px-10 lg:px-12">
          <div className="w-full text-left">
            <div className="mb-5 flex flex-wrap items-center">
              <span className="inline-flex min-h-[20px] items-center rounded-full border border-primary-400 bg-paper px-4 py-1 font-body text-[11px] font-black leading-none text-ink sm:px-5 sm:text-[12px]">
                {item.name}
              </span>

              <span className="-ml-2 inline-flex min-h-[20px] items-center rounded-full bg-primary-300 px-5 py-1 font-body text-[11px] font-black leading-none text-ink sm:px-7 sm:text-[12px]">
                {item.company}
              </span>
            </div>

            <h3 className="font-body text-[21px] font-black leading-[1.12] tracking-[-0.035em] text-ink sm:text-[24px] md:text-[26px]">
              “{item.quote}”
            </h3>

            <p className="mt-5 font-body text-[15px] font-medium leading-[1.38] tracking-[-0.012em] text-ink sm:text-[16px] md:text-[17px]">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

// function FounderTestimonialCard({
//   item,
//   variant = "vertical",
// }: {
//   item: FounderTestimonial;
//   variant?: "horizontal" | "vertical";
// }) {
//   const isHorizontal = variant === "horizontal";

//   return (
//     <article className="card-basic h-full overflow-hidden rounded-[8px] shadow-[0_12px_34px_rgba(16,16,16,0.055)]">
//       <div
//         className={
//           isHorizontal
//             ? "grid h-full grid-cols-1 md:grid-cols-[320px_1px_1fr] lg:grid-cols-[360px_1px_1fr]"
//             : "flex h-full flex-col"
//         }
//       >
//         <div
//           className={
//             isHorizontal
//               ? "relative flex min-h-[240px] items-end justify-center overflow-hidden bg-paper px-6 pt-8 md:min-h-[290px]"
//               : "relative flex min-h-[240px] items-end justify-center overflow-hidden bg-paper px-6 pt-8 sm:min-h-[280px]"
//           }
//         >
//           <Image
//             src={item.image}
//             alt={item.imageAlt || item.name}
//             width={360}
//             height={360}
//             className={
//               isHorizontal
//                 ? "h-[235px] w-[235px] rounded object-cover object-top sm:h-[260px] sm:w-[260px] md:h-[285px] md:w-[285px]"
//                 : "h-[235px] w-[235px] rounded object-cover object-top sm:h-[260px] sm:w-[260px] md:h-[285px] md:w-[285px]"
//             }
//           />

//           <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-paper via-paper/90 to-transparent" />
//         </div>

//         {isHorizontal && <div className="hidden bg-primary-300 md:block" />}

//         <div
//           className={
//             isHorizontal
//               ? "flex items-center px-7 py-8 sm:px-9 md:px-10 lg:px-12"
//               : "flex flex-1 items-start px-6 py-7 sm:px-7 sm:py-8"
//           }
//         >
//           <div className="w-full text-left">
//             <div className="mb-5 flex flex-wrap items-center">
//               <span className="inline-flex min-h-[20px] items-center rounded-full border border-primary-400 bg-paper px-4 py-1 font-body text-[11px] font-black leading-none text-ink sm:px-5 sm:text-[12px]">
//                 {item.name}
//               </span>

//               <span className="-ml-2 inline-flex min-h-[20px] items-center rounded-full bg-primary-300 px-5 py-1 font-body text-[11px] font-black leading-none text-ink sm:px-7 sm:text-[12px]">
//                 {item.company}
//               </span>
//             </div>

//             <h3 className="font-body text-[21px] font-black leading-[1.12] tracking-[-0.035em] text-ink sm:text-[24px] md:text-[26px]">
//               “{item.quote}”
//             </h3>

//             <p className="mt-5 font-body text-[15px] font-medium leading-[1.38] tracking-[-0.012em] text-ink sm:text-[16px] md:text-[17px]">
//               {item.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

export default function FounderTestimonialsSection({
  heading = "What founders are saying:",
  testimonials = defaultTestimonials,
  gridClassName = "grid-cols-1",
  cardVariant = "horizontal",
  sectionClassName = "",
  containerClassName = "max-w-[990px]",
}: FounderTestimonialsSectionProps) {
  return (
    <section
      className={`bg-cream py-12 sm:py-14 md:py-16 lg:py-20 ${sectionClassName}`}
    >
      <div className="layout-page-container">
        <div className="layout-heading-center">
          <h2 className="text-heading-section">{heading}</h2>
        </div>

        <div
          className={`mx-auto mt-10 grid gap-8 sm:mt-12 md:gap-10 ${containerClassName} ${gridClassName}`}
        >
          {testimonials.map((item, index) => (
            <FounderTestimonialCard
              key={`${item.name}-${index}`}
              item={item}
              variant={cardVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}