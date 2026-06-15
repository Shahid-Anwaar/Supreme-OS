import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { type ReactNode } from "react";

type PodcastItem = {
  name: string;
  href: string;
  image: string;
  imageAlt?: string;
};

type PodcastButton = {
  label: string;
  href: string;
  icon: string;
};

type PodcastSectionProps = {
  logoImage?: string;
  logoAlt?: string;
  heading?: ReactNode;
  podcasts?: PodcastItem[];
  buttons?: PodcastButton[];
  gridClassName?: string;
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultPodcasts: PodcastItem[] = [
  {
    name: "Chris Do",
    href: "https://podcasts.apple.com/us/podcast/how-to-make-%24100-000-month-doing-what-you-love-w-chris-do-ep-14/id1678152217?i=1000610127119",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad8dfdfe227955e726ead1_Group%201.webp",
    imageAlt: "Chris Do podcast",
  },
  {
    name: "Sam Ovens",
    href: "https://podcasts.apple.com/us/podcast/sam-ovens-on-the-real-truth-about-building-a-community-ep-5/id1678152217?i=1000605053061",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad8dfdfe227955e726eac5_samovens.webp",
    imageAlt: "Sam Ovens podcast",
  },
  {
    name: "Neil Patel",
    href: "https://podcasts.apple.com/us/podcast/10x-your-business-by-using-these-skills-w-neil-patel-ep-18/id1678152217?i=1000613541155",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad8dfdfe227955e726eac9_neilpatel.webp",
    imageAlt: "Neil Patel podcast",
  },
  {
    name: "Dan Koe",
    href: "https://podcasts.apple.com/us/podcast/how-dan-koe-makes-%244-2m-and-98-profit-with-no-employees-ep-28/id1678152217?i=1000625837534",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad8dfdfe227955e726eac2_dankoe.webp",
    imageAlt: "Dan Koe podcast",
  },
  {
    name: "Dan Martell",
    href: "https://podcasts.apple.com/us/podcast/the-best-strategy-to-build-your-business-buying-back/id1678152217?i=1000614962989",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad8dfdfe227955e726eacc_danmartell.webp",
    imageAlt: "Dan Martell podcast",
  },
];

const defaultButtons: PodcastButton[] = [
  {
    label: "APPLE",
    href: "https://podcasts.apple.com/us/podcast/the-matt-gray-show/id1678152217",
    icon: "ic:baseline-apple",
  },
  {
    label: "SPOTIFY",
    href: "https://open.spotify.com/show/2OAaHpzK2XInvo3KL5EotD?si=0fc288de68174b8d",
    icon: "mdi:spotify",
  },
];

function PodcastCard({ item }: { item: PodcastItem }) {
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[0.66/1] overflow-hidden rounded-[8px] bg-ink shadow-[0_12px_34px_rgba(16,16,16,0.08)]"
    >
      <Image
        src={item.image}
        alt={item.imageAlt || item.name}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover object-top transition duration-500 group-hover:scale-105"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

      <div className="absolute left-5 top-5">
        <Image
          src="https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67ad8dfdfe227955e726eac7_logo.svg"
          alt="Matt Gray Show"
          width={78}
          height={24}
          className="h-auto w-[72px] object-contain sm:w-[78px]"
        />
      </div>

      <div className="absolute bottom-6 left-5 right-5 flex items-center justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition group-hover:scale-110">
          <Icon icon="solar:play-bold" className="ml-0.5 h-4 w-4" />
        </span>

        <h3 className="font-body text-[20px] font-black leading-none tracking-[-0.02em] text-white sm:text-[22px]">
          {item.name}
        </h3>
      </div>
    </Link>
  );
}

export default function PodcastSection({
  logoImage =
    "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/682a87a0abff5ba066045e5b_matt%20gray.svg",
  logoAlt = "The Matt Gray Show",
  heading = "A podcast to help you level up your business",
  podcasts = defaultPodcasts,
  buttons = defaultButtons,
  gridClassName = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
  sectionClassName = "",
  containerClassName = "",
}: PodcastSectionProps) {
  return (
    <section
      className={`overflow-hidden bg-cream ${sectionClassName}`}
    >
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="mx-auto flex flex-col items-center text-center">
          <Image
            src={logoImage}
            alt={logoAlt}
            width={280}
            height={80}
            className="h-auto w-[210px] object-contain sm:w-[250px] md:w-[280px]"
          />

          <h2 className="mt-10 text-heading-section">
            {heading}
          </h2>
        </div>

        <div className={`mt-10 grid gap-4 sm:mt-12 md:gap-5 ${gridClassName}`}>
          {podcasts.map((item, index) => (
            <PodcastCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <p className="font-body text-[20px] font-medium leading-none tracking-[-0.01em] text-ink sm:text-[22px]">
            Listen on
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            {buttons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-[5px] border border-ink bg-transparent px-10 font-body text-[18px] font-black leading-none tracking-[-0.01em] text-ink transition hover:bg-ink hover:text-white sm:w-[210px]"
              >
                <Icon icon={button.icon} className="h-6 w-6" />
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}