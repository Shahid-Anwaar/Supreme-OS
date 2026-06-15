"use client";

import Image from "next/image";

export type VideoCardItem = {
  title: string;
  thumbnail: string;
  thumbnailAlt?: string;
  videoUrl: string;
};

type VideoPreviewCardProps = {
  video: VideoCardItem;
  onPlay: (videoUrl: string) => void;
  className?: string;
};

export default function VideoPreviewCard({
  video,
  onPlay,
  className = "",
}: VideoPreviewCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="font-body text-[20px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[24px]">
        {video.title}
      </h3>

      <button
        type="button"
        onClick={() => onPlay(video.videoUrl)}
        className="group mt-5 w-full rounded-[8px] bg-paper p-5 shadow-[0_10px_28px_rgba(16,16,16,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(16,16,16,0.1)]"
        aria-label={`Play ${video.title} video`}
      >
        <div className="relative aspect-video overflow-hidden rounded-[5px] bg-line">
          <Image
            src={video.thumbnail}
            alt={video.thumbnailAlt || video.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-black/45 backdrop-blur-sm transition group-hover:scale-110 sm:h-[58px] sm:w-[58px]">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}