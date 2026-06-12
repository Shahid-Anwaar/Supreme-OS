import Image from "next/image";

const logos = [
  {
    name: "Hypefury",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68219bc7a31ef73107948e1a_Hyperfury.webp",
    width: 160,
    height: 42,
  },
  {
    name: "Taplio",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68219c6c6be22b9fa6e75b62_Taplio.webp",
    width: 120,
    height: 42,
  },
  {
    name: "Seamless AI",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a9981b4dae4e86b28656_Seamless%20AI.webp",
    width: 155,
    height: 42,
  },
  {
    name: "Pray.com",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a9983ede949427b0720c_pray.webp",
    width: 150,
    height: 42,
  },
  {
    name: "Foreplay",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a998fd59291830cd9aaa_foreplay.webp",
    width: 150,
    height: 42,
  },
  {
    name: "Teleport",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a9988807751903b9e3de_teleport.webp",
    width: 150,
    height: 42,
  },
  {
    name: "Figure",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a998a88bae4f22690b2e_Figure.webp",
    width: 130,
    height: 42,
  },
  {
    name: "Contact Studios",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a998644e8caf9649e02a_Contact.webp",
    width: 110,
    height: 42,
  },
  {
    name: "CourseAI",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68219a59385f2a26d3c52368_Couese%20AI.webp",
    width: 125,
    height: 42,
  },
  {
    name: "Classy",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a998ad7836cc650ce545_602189faea7602000482908e.webp",
    width: 105,
    height: 42,
  },
  {
    name: "The Family Fund",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821aa4e5a15ac52403b91db_familyfund-p-1600.webp",
    width: 170,
    height: 42,
  },
  {
    name: "Brain Apes",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a998631abf52d0a17e1f_Brain%20Apes%20with%20Text-p-1600.webp",
    width: 160,
    height: 42,
  },
];

export default function AmbitiousFoundersSection() {
  return (
    <section className="bg-cream py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="layout-page-container">
        <div className="layout-heading-center">
          <h2 className="text-heading-section">
            Join thousands of ambitious founders.
          </h2>
        </div>

        <div className="mx-auto mt-9 flex max-w-[1160px] flex-wrap items-center justify-center gap-x-8 gap-y-7 sm:mt-10 sm:gap-x-10 md:gap-x-12 lg:gap-x-14 lg:gap-y-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-[34px] shrink-0 items-center justify-center opacity-65 transition-opacity duration-200 hover:opacity-90 sm:h-[38px]"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={130}
                height={logo.height}
                className="h-auto w-28 h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}