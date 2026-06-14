"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import VideoPreviewCard, { VideoCardItem } from "./VideoPreview";

type ThreeVideosSectionProps = {
  heading?: ReactNode;
  videos?: VideoCardItem[];
  ctaText?: string;
  ctaHref?: string;
};

const defaultVideos: VideoCardItem[] = [
  {
    title: "Trailer",
    thumbnail:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6916ae5ff53e0b6a007d2a76_Trailer%20Mexico%20City.webp",
    thumbnailAlt: "Trailer video thumbnail",
    videoUrl: "https://www.youtube.com/watch?v=UD51MFjT2DU",
  },
  {
    title: "Community",
    thumbnail:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6916ae5f2b5b2cf2c2f5a0ee_Experience%20Sedona.webp",
    thumbnailAlt: "Community video thumbnail",
    videoUrl: "https://www.youtube.com/watch?v=NjpRh7-578k",
  },
  {
    title: "Experience",
    thumbnail:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/687605c4c32f1737ede51980_thumbnail%20(2).webp",
    thumbnailAlt: "Experience video thumbnail",
    videoUrl: "https://www.youtube.com/watch?v=8TWVQiJLbxk",
  },
];

function getYoutubeEmbedUrl(url: string) {
  const videoId = url.includes("watch?v=")
    ? url.split("watch?v=")[1]?.split("&")[0]
    : url.split("/").pop();

  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

export default function ThreeVideosSection({
  heading = (
    <>
      Iron sharpens iron. <br /> Founders sharpen founders.
    </>
  ),
  videos = defaultVideos,
  ctaText = "Book a Brand Strategy Call",
  ctaHref = "#book-call",
}: ThreeVideosSectionProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-cream py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="layout-page-container">
        <div className="mx-auto text-center">
          <h2 className="text-heading-section">{heading}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12">
            {videos.map((video) => (
              <VideoPreviewCard
                key={video.title}
                video={video}
                onPlay={setActiveVideo}
              />
            ))}
          </div>

          <div className="mt-11 flex justify-center sm:mt-12">
            <Link
              href={ctaHref}
              className="btn-base btn-size-xl btn-brand w-full sm:w-auto"
            >
              {ctaText}
            </Link>
          </div>
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
                src={getYoutubeEmbedUrl(activeVideo)}
                title="Video player"
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