import { type ReactNode } from "react";

type TestimonialYoutubeSectionProps = {
  heading?: ReactNode;
  videoUrl?: string;
  videoTitle?: string;
};

function getYoutubeEmbedUrl(url: string) {
  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return url;
}

export default function TestimonialYoutubeSection({
  heading = (
    <>
      Build something that matters.
      <br />
      And enjoy the journey.
    </>
  ),
  videoUrl = "https://www.youtube.com/watch?v=-9cCQrhWhKo",
  videoTitle = "Testimonial - Ali Abdaal",
}: TestimonialYoutubeSectionProps) {
  return (
    <section className="bg-cream py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="layout-page-container">
        <div className="mx-auto text-center">
          <h2 className="text-heading-section">{heading}</h2>

          <div className="mx-auto mt-10 max-w-[1080px] overflow-hidden rounded-[8px] bg-black shadow-[0_12px_34px_rgba(16,16,16,0.08)] sm:mt-12">
            <div className="aspect-video w-full">
              <iframe
                src={getYoutubeEmbedUrl(videoUrl)}
                title={videoTitle}
                className="h-full w-full"
                width="940"
                height="528"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}