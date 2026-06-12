import Image from "next/image";

const features = [
  {
    title: "Compounding Content",
    description: "Attract your dream customer",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/682a851916de3744b0519bf2_compounding%20content.webp",
    alt: "Compounding content visual",
    imageClassName: "w-[170px] sm:w-[185px] md:w-[190px]",
  },
  {
    title: "Scaling templates",
    description: "Transform vision into execution",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6822d5f497abb9fbe70634e0_scaling%20template-p-800.webp",
    alt: "Scaling templates visual",
    imageClassName: "w-[220px] sm:w-[240px] md:w-[245px]",
  },
  {
    title: "Monetization frameworks",
    description: "Convert attention to opportunity",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/682a8657476869d7689dad64_monetization%20framework-p-500.png",
    alt: "Monetization frameworks visual",
    imageClassName: "w-[190px] sm:w-[205px] md:w-[210px]",
  },
  {
    title: "Founder ecosystem",
    description: "Build with friends, not alone",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6822d5f4578995ac87d2f211_founder%20ecosystem.webp",
    alt: "Founder ecosystem visual",
    imageClassName: "w-[240px] sm:w-[260px] md:w-[270px]",
  },
  {
    title: "Execution playbooks",
    description: "Grow with clarity and confidence",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6822d5f425064266cd0d41b5_execution%20framework.webp",
    alt: "Execution playbooks visual",
    imageClassName: "w-[220px] sm:w-[235px] md:w-[245px]",
  },
  {
    title: "Memorable experiences",
    description: "Life-changing community",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6822d5f4e816ede22d15dbdf_memorable%20experience.webp",
    alt: "Memorable experiences visual",
    imageClassName: "w-[185px] sm:w-[205px] md:w-[215px]",
  },
];

export default function BusinessWorksSection() {
  return (
    <section className="bg-cream py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="layout-page-container">
        <div className="layout-heading-center">
          <h2 className="text-heading-section">
            Build a business that works for you,
            not the other way around.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((item) => (
            <article
              key={item.title}
              className="card-basic flex min-h-[320px] flex-col rounded-[8px] px-6 pb-8 pt-7 text-center shadow-[0_12px_34px_rgba(16,16,16,0.055)] sm:min-h-[330px] sm:px-7 sm:pb-9 sm:pt-8"
            >
              <div className="flex min-h-[145px] flex-1 items-center justify-center sm:min-h-[155px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={280}
                  className={`h-auto object-contain ${item.imageClassName}`}
                />
              </div>

              <div className="mt-5 sm:mt-6">
                <h3 className="font-body text-[18px] font-medium leading-[1.15] tracking-[-0.03em] text-ink sm:text-[20px] md:text-[21px]">
                  {item.title}
                </h3>

                <p className="mt-3 font-body text-[15px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[16px]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}