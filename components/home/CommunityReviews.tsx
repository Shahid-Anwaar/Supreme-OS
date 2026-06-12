"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { Icon } from "@iconify/react";
import { useState } from "react";

const reviews = [
  {
    name: "Christine Carrillo",
    role: "Entrepreneur & CEO Coach",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This is what I wish I had when launching my very first business. Supreme OS has been building communities and businesses at scale for years. I cannot imagine a better system to help entrepreneurs build their brand, community and business.",
    date: "Sep 11, 2022",
  },
  {
    name: 'Jonathan "JCron" Cronstedt',
    role: "Board Director, Kajabi.com",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    title: "Build a powerful personal brand that scales.",
    text: "If you are asking how to start and systemize a perpetual growth machine in your company, Supreme OS gives you a playbook that delivers real answers.",
    date: "Jan 29, 2023",
  },
  {
    name: "Kelli Law",
    role: "Founder, THE LIMITLESS WOMAN",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I joined Supreme OS because I wanted more clarity around content and business growth. The systems helped me organize my ideas, improve my message, and show up with more confidence.",
    date: "Nov 27, 2024",
  },
  {
    name: "Josh Ramsey",
    role: "Ramsey Consulting",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Uncertainty is everywhere. Where should you invest? I invested in myself. I trusted the system and it helped me improve my consulting services, pitch, and client approach.",
    date: "Nov 2, 2023",
  },
  {
    name: "Brett Adcock",
    role: "Founder @ Figure",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "The team is excellent when it comes to audience and community growth. They understand how founders think and how to turn ideas into consistent brand momentum.",
    date: "Oct 28, 2022",
  },
  {
    name: "Josh Viner",
    role: "Growth Marketing Consultant",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    text: "I joined Supreme OS to help build systems for my business and grow my audience. The program helped me break through content blocks, build systems, and connect with the right people.",
    date: "Nov 2, 2023",
  },
  {
    name: "Samee Hassan",
    role: "Co-founder @ DevSignal",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "I run a company where we help startups hire developers. The idea of building a brand that people trust was priceless. I met amazing people through the program.",
    date: "Nov 1, 2023",
  },
  {
    name: "Aamir Kidwai",
    role: "Founder / NEYA",
    avatar: "https://randomuser.me/api/portraits/men/57.jpg",
    text: "Before joining, I always had an idea that I wanted to start my own business. Supreme OS helped me turn that idea into a system and gave me direction to move forward.",
    date: "Nov 9, 2024",
  },
  {
    name: "Rob Hoffman",
    role: "CEO and Co-Founder of Contact Studios",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Supreme OS gave me the playbook to grow my audience. Best service ever. I do not know where I would be without the clarity, systems, and momentum.",
    date: "Dec 4, 2022",
  },
  {
    name: "Steve Gatena",
    role: "Founder & CEO of Pray.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I wanted to better understand how content creators build communities, monetize their content, and expand their influence. Supreme OS gave me a clear path and practical structure.",
    date: "Aug 15, 2022",
  },
  {
    name: "Dr. Gloria Lee",
    role: "Owner, The Relationship Collective",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    text: "Before joining, I was drowning in business without a clear game plan or direction. The system helped me simplify my message and focus on what actually moves the business.",
    date: "Jan 28, 2025",
  },
  {
    name: "Josh Schoonover",
    role: "CEO, Ask A DSO",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Supreme OS is full of proven systems that transformed my business. The community is full of founders who look out for each other and help each other win.",
    date: "Sep 26, 2023",
  },
  {
    name: "Seth Farwell",
    role: "Business Development Manager",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "The biggest shift was clarity. I stopped guessing what to post and started building around a clear system that made sense for my business.",
    date: "Jun 4, 2024",
  },
  {
    name: "Duleeka H.S.",
    role: "Founder, Lovilabs",
    avatar: "https://randomuser.me/api/portraits/women/27.jpg",
    text: "I was trying many things but nothing felt connected. Supreme OS helped me build a more focused brand direction and gave me the confidence to keep showing up.",
    date: "Jun 4, 2024",
  },
  {
    name: "Alex Smith",
    role: "Director, Basic Arts",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    text: "Joining Supreme OS has been transformational. Before I joined, I had content ideas but no real launch system. The framework helped me build and deliver with clarity.",
    date: "Nov 19, 2024",
  },
];

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  0: 1,
};

function Stars() {
  return (
    <div className="mt-4 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          icon="solar:star-bold"
          className="h-[18px] w-[18px] text-primary-300 sm:h-5 sm:w-5"
        />
      ))}
    </div>
  );
}

export default function CommunityReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(9);

  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <section className="bg-cream py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="layout-page-container">
        <div className="layout-heading-center max-w-full">
          <h2 className="text-heading-section">
            What our founder community is saying.
          </h2>
        </div>

        <div className="mt-10 sm:mt-12">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto gap-4 md:gap-5"
            columnClassName="space-y-4 md:space-y-5"
          >
            {visibleReviews.map((review) => (
              <article
                key={`${review.name}-${review.date}`}
                className="bg-paper px-5 py-5 text-left shadow-[0_8px_24px_rgba(16,16,16,0.035)] sm:px-6 sm:py-6"
              >
                <div className="flex items-start gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-line">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={88}
                      height={88}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-body text-[14px] font-black leading-tight text-ink sm:text-[15px]">
                      {review.name}
                    </h3>
                    <p className="mt-1 font-body text-[12px] font-medium leading-tight text-ink/80 sm:text-[13px]">
                      {review.role}
                    </p>
                  </div>
                </div>

                <Stars />

                {review.title && (
                  <h4 className="mt-4 font-body text-[15px] font-black leading-[1.3] text-ink sm:text-[16px]">
                    {review.title}
                  </h4>
                )}

                <p className="mt-3 font-body text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-ink/90 sm:text-[15px]">
                  {review.text}
                </p>

                <button
                  type="button"
                  className="mt-1 font-body text-[14px] font-medium text-ink underline underline-offset-2"
                >
                  Show more
                </button>

                <p className="mt-3 font-body text-[12px] font-medium text-muted sm:text-[13px]">
                  {review.date}
                </p>
              </article>
            ))}
          </Masonry>
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="rounded-[6px] border border-line-dark bg-paper px-5 py-2.5 font-body text-[13px] font-medium text-ink shadow-[0_8px_20px_rgba(16,16,16,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-ink"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}