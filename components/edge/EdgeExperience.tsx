"use client";

import { useState } from "react";
import VideoPreviewCard, { VideoCardItem } from "./VideoPreview";

const experienceVideos: VideoCardItem[] = [
  {
    title: "Edge Mexico City",
    thumbnail:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67aacd88dddba8d5a776f7e8_mastermind_mexico.webp",
    thumbnailAlt: "Edge Mexico City",
    videoUrl: "https://www.youtube.com/watch?v=UD51MFjT2DU",
  },
  {
    title: "Edge Los Angeles",
    thumbnail:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/67aacd91dddba8d5a7771319_mastermind_losangeles.webp",
    thumbnailAlt: "Edge Los Angeles",
    videoUrl: "https://www.youtube.com/watch?v=MtkoZpJNbfk",
  },
  {
    title: "Edge Sedona",
    thumbnail:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6808af82ea10004b5c669d93_fdN2sTxDTqg-HD.webp",
    thumbnailAlt: "Edge Sedona",
    videoUrl: "https://www.youtube.com/watch?v=Eyx6XFtWmCc",
  },
  {
    title: "Edge Austin",
    thumbnail:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6875d82ba7c637eaa2f16ede_thumbnail.avif",
    thumbnailAlt: "Edge Austin",
    videoUrl: "https://fast.wistia.net/embed/iframe/kwjln2b71v?autoPlay=true",
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

export default function EdgeExperiencesSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-cream pt-0">
      <div className="layout-page-container max-w-[1080px] pt-0">
        <div className="grid gap-x-7 gap-y-9 md:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {experienceVideos.map((video) => (
            <VideoPreviewCard
              key={video.title}
              video={video}
              onPlay={setActiveVideo}
            />
          ))}
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
                title="Experience video player"
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