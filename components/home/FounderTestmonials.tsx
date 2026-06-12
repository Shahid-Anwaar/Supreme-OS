import Image from "next/image";

const testimonials = [
  {
    name: "Steve Gatena",
    company: "Pray.com",
    quote:
      "Supreme OS frameworks and systems have been transformational for my growth.",
    description:
      "Since learning these systems, I have grown my LinkedIn following significantly, launched a successful podcast, and scaled my SaaS business to new heights.",
    image: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6773842175c0eee5ae448a79_steve-gatena%25201-p-500.png",
  },
  {
    name: "Rob Hoffman",
    company: "Contact Studios",
    quote: "I have closed multiple new contracts.",
    description:
      "Supreme OS gave me the playbook to grow my audience. Best service ever. I do not know where I would be without this clarity, systems, and momentum.",
    image: "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67adc193c7bfa64f169bd46c_Rob%20(2).webp",
  },
];

export default function FounderTestimonialsSection() {
  return (
    <section className="bg-cream py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="layout-page-container">
        <div className="layout-heading-center">
          <h2 className="text-heading-section">
            What founders are saying:
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-[990px] flex-col gap-8 sm:mt-12 md:gap-10">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="card-basic overflow-hidden rounded-[8px] shadow-[0_12px_34px_rgba(16,16,16,0.055)]"
            >
              <div className="grid min-h-[260px] grid-cols-1 md:grid-cols-[335px_1px_1fr] lg:grid-cols-[360px_1px_1fr]">
                {/* Image Side */}
                <div className="relative flex min-h-[240px] items-end justify-center overflow-hidden bg-paper px-8 pt-8 md:min-h-[290px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={330}
                    height={330}
                    className="h-[235px] w-[235px] rounded object-cover object-top sm:h-[260px] sm:w-[260px] md:h-[285px] md:w-[285px]"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-paper via-paper/90 to-transparent" />
                </div>

                {/* Green Divider */}
                <div className="hidden bg-primary-300 md:block" />

                {/* Content Side */}
                <div className="flex items-center px-7 py-8 sm:px-9 md:px-10 lg:px-12">
                  <div className="w-full max-w-[580px] text-left">
                    <div className="mb-5 flex flex-wrap items-center">
                      <span className="inline-flex min-h-[20px] items-center rounded-full border border-primary-400 bg-paper px-5 py-1 font-body text-[12px] font-black leading-none text-ink">
                        {item.name}
                      </span>

                      <span className="-ml-2 inline-flex min-h-[20px] items-center rounded-full bg-primary-300 px-7 py-1 font-body text-[12px] font-black leading-none text-ink">
                        {item.company}
                      </span>
                    </div>

                    <h3 className="font-body text-[22px] font-black leading-[1.12] tracking-[-0.035em] text-ink sm:text-[25px] md:text-[27px]">
                      “{item.quote}”
                    </h3>

                    <p className="mt-6 font-body text-[16px] font-medium leading-[1.35] tracking-[-0.012em] text-ink sm:text-[17px] md:text-[18px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}