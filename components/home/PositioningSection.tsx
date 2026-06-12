import Image from "next/image";

const cards = [
  {
    title: "Not a Course",
    description:
      "Every framework, every playbook, free. You don't have a knowledge problem. You have an implementation problem.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/677238a828765b2c016930cd_image%25203-p-500.webp",
    imageAlt: "Target system visual",
    imageWidth: 190,
    imageHeight: 160,
  },
  {
    title: "Not an Agency",
    description:
      "Agencies hold the keys to your growth. The day they leave, everything stops. You've built nothing. You've just been renting someone else's execution.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68367078105043c2455a8e69_ai%20tools.webp",
    imageAlt: "AI tools visual",
    imageWidth: 210,
    imageHeight: 140,
  },
  {
    title: "Not a Mastermind",
    description:
      "You don't need another room full of founders to network with. You need systems installed, assets created, and a brand machine that generates revenue while you sleep.",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6836707891e773ab0b41bd81_matt-c-suite.webp",
    imageAlt: "Business system visual",
    imageWidth: 185,
    imageHeight: 140,
  },
  {
    title: "Step-by-step guidance",
    description:
      "We build your personal brand systems alongside you. You own everything we create. Your team runs it. It keeps working after we are done.",
    image: "",
    imageAlt: "",
    imageWidth: 0,
    imageHeight: 0,
  },
];

export default function PositioningSection() {
  return (
    <section className="bg-cream py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="layout-page-container">
        <div className="layout-heading-center max-w-full">
          <h2 className="text-heading-section">
            Not a Course. Not an Agency.
            <br />
            Not a Mastermind.
          </h2>

          <p className="mt-6 text-body-large max-w-400">
            Supreme OS builds the systems that let your business grow without
            you in the room.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-basic flex min-h-[215px] flex-col justify-between gap-7 rounded-[8px] p-8 shadow-[0_10px_28px_rgba(16,16,16,0.05)] sm:min-h-[230px] sm:p-9 md:flex-row md:items-center lg:p-10"
            >
              <div className="max-w-full text-left">
                <h3 className="text-heading-card">
                  {card.title}
                </h3>

                <p className="mt-5 font-body text-[16px] font-medium leading-[1.52] tracking-[-0.01em] text-black/85 sm:text-[19px]">
                  {card.description}
                </p>
              </div>

              {card.image && (
                <div className="flex shrink-0 justify-center md:justify-end ms-10">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={card.imageWidth}
                    height={card.imageHeight}
                    className="h-auto w-[150px] object-contain sm:w-[170px] lg:w-[190px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}