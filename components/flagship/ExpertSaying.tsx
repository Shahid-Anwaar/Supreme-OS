"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CustomEmblaCarousel from "../custom/CustomCarosal";

type ExpertItem = {
  name: string;
  role: string;
  image: string;
  imageAlt?: string;
  videoUrl?: string;
  bgClassName?: string;
};

const experts: ExpertItem[] = [
  {
    name: "Gerard Adams",
    role: "Founder, Leaders Create Leaders",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67a97b945be0484f23f4de60_gerardadams%201.webp",
    imageAlt: "Gerard Adams Testimonial",
    bgClassName: "bg-[#f1ffd9]",
  },
  {
    name: "Nicole Murphy",
    role: "Founder & CEO of Tall Size",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67a97b945be0484f23f4de65_nicole%201.webp",
    imageAlt: "Nicole Murphy",
    bgClassName: "bg-[#fff1f8]",
  },
  {
    name: "Belan Wagaw",
    role: "Founder, Lifestyle First Agency",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67a97b945be0484f23f4de6d_Belen%20Wagaw%201.webp",
    imageAlt: "Belan Wagaw",
    bgClassName: "bg-[#fffbd0]",
  },
  {
    name: "Rob Hoffman",
    role: "CEO of Contact Studios",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67a97b945be0484f23f4de69_yD7Umh8ldHpELUfn%201.webp",
    imageAlt: "Rob Hoffman",
    bgClassName: "bg-[#eef7ff]",
  },
  {
    name: "John Figueiredo",
    role: "Founder, Sisu ($1B exit)",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67a97b945be0484f23f4de71_John%20Figueiredo%201.webp",
    imageAlt: "John Figueiredo",
    bgClassName: "bg-[#f4edff]",
  },
];

function getVideoEmbedUrl(url: string) {
  if (url.includes("fast.wistia.net/embed/iframe")) {
    return url.includes("?") ? url : `${url}?autoPlay=true`;
  }

  if (url.includes("youtube.com/embed/")) {
    return url.includes("?") ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  }

  if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  return url;
}

function ExpertCard({
  item,
  onPlay,
}: {
  item: ExpertItem;
  onPlay: (videoUrl: string) => void;
}) {
  return (
    <div
      className={`relative h-[460px] overflow-hidden rounded-[6px] ${item.bgClassName || "bg-[#f5f5f5]"}`}
    >
      <Image
        src={item.image}
        alt={item.imageAlt || item.name}
        fill
        sizes="(max-width: 768px) 88vw, (max-width: 1024px) 45vw, 330px"
        className="object-cover object-top"
      />

      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-white via-white/90 to-transparent" />

      <div className="absolute bottom-5 left-0 right-0 flex items-end justify-between gap-4 px-6">
        <button
          type="button"
          onClick={() => item.videoUrl && onPlay(item.videoUrl)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:scale-105 disabled:cursor-default disabled:bg-black/25"
          disabled={!item.videoUrl}
          aria-label={`Play ${item.name} testimonial`}
        >
          <Icon icon="solar:play-bold" className="ml-0.5 h-4 w-4" />
        </button>

        <div className="text-right">
          <h3 className="font-body text-[24px] font-medium leading-none tracking-[-0.02em] text-ink sm:text-[27px]">
            {item.name}
          </h3>

          <p className="mt-2 font-body text-[14px] font-medium leading-[1.25] tracking-[-0.01em] text-black/55 sm:text-[15px]">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ExpertsSayingSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-cream py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="layout-page-container">
        <div className="grid items-center gap-8 lg:grid-cols-[260px_1fr] xl:grid-cols-[285px_1fr]">
          <div className="relative z-10">
            <h2 className="text-heading-section">
              What the <br />
              experts <br />
              are saying.
            </h2>

            <div className="mt-8 hidden gap-4 lg:flex" id="expert-slider-arrows" />
          </div>

          <CustomEmblaCarousel
            items={experts}
            options={{
              loop: true,
              align: "start",
              dragFree: true,
            }}
            wrapperClassName="!bg-transparent"
            CustomCard={(item: ExpertItem) => (
              <div className="min-w-0 flex-[0_0_88%] px-3 sm:flex-[0_0_48%] lg:flex-[0_0_34%] xl:flex-[0_0_32%]">
                <ExpertCard item={item} onPlay={setActiveVideo} />
              </div>
            )}
            CustomButtonWrapper={(onPrevClick, onNextClick) => (
              <div className="absolute left-5 bottom-32 z-20 hidden gap-4 lg:flex">
                <button
                  type="button"
                  onClick={onPrevClick}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white transition hover:bg-black"
                  aria-label="Previous expert"
                >
                  <Icon icon="material-symbols:chevron-left-rounded" className="h-7 w-7" />
                </button>

                <button
                  type="button"
                  onClick={onNextClick}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white transition hover:bg-black"
                  aria-label="Next expert"
                >
                  <Icon icon="material-symbols:chevron-right-rounded" className="h-7 w-7" />
                </button>
              </div>
            )}
          />
        </div>

        <div className="mt-7 flex justify-center gap-4 lg:hidden">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white">
            <Icon icon="material-symbols:chevron-left-rounded" className="h-7 w-7" />
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white">
            <Icon icon="material-symbols:chevron-right-rounded" className="h-7 w-7" />
          </button>
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[940px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-[32px] font-bold text-white"
              aria-label="Close video"
            >
              ×
            </button>

            <div className="aspect-video overflow-hidden rounded-[10px] bg-black">
              <iframe
                src={getVideoEmbedUrl(activeVideo)}
                title="Expert testimonial video"
                className="h-full w-full"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}