"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const offers = [
  {
    title: "Supreme OS Velocity",
    href: "#velocity",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6775f8721a2e12bc8ca7e50d_66bf50c82452fa337e53336f_frame_founderos_preview-p-500.webp",
    alt: "Supreme OS Velocity preview",
  },
  {
    title: "Edge",
    href: "#edge",
    image:
      "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6775f91c2b1b9593c7c50c4f_66bf50c9d204fd307e300def_frame_mastermind_preview-p-500.webp",
    alt: "Edge preview",
  },
];

export default function OfferCardsSection() {
  return (
    <section className="bg-cream py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="layout-page-container">
        <div className="layout-heading-center">
          <h2 className="text-heading-section">
            No fluff. Just real systems,
            <br className="hidden sm:block" />
            support, and community.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:gap-6">
          {offers.map((offer) => (
            <Link
              key={offer.title}
              href={offer.href}
              className="card-clickable group relative flex min-h-[430px] flex-col overflow-hidden rounded-[8px] bg-paper p-7 shadow-[0_12px_34px_rgba(16,16,16,0.055)] sm:min-h-[520px] sm:p-9 md:min-h-[560px] lg:min-h-[610px]"
            >
              {/* Top Content */}
              <div className="flex items-start justify-between gap-5">
                <h3 className="font-body text-[29px] font-medium leading-none tracking-[-0.045em] text-ink sm:text-[34px] md:text-[36px] lg:text-[38px]">
                  {offer.title}
                </h3>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-primary-300 text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-11 sm:w-11">
                  <Icon icon="solar:arrow-right-up-linear" className="h-6 w-6" />
                </span>
              </div>

              {/* Image */}
              <div className="relative mt-8 flex flex-1 items-end justify-center overflow-hidden sm:mt-10">
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  width={640}
                  height={520}
                  className="h-auto w-full max-w-[430px] object-contain transition-transform duration-500 group-hover:scale-[1.025] sm:max-w-[500px] md:max-w-[470px] lg:max-w-[540px]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}