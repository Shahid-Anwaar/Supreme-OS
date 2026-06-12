"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function FrameworkCtaSection() {
  return (
    <section className="bg-cream py-4 sm:py-5 md:py-6">
      <div className="layout-page-container">
        <div className="flex flex-col gap-5 rounded-lg bg-primary-400 px-5 py-5 sm:px-7 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-8 lg:py-6">
          {/* Left Content */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex shrink-0 items-center justify-center text-ink">
              <Icon
                icon="solar:users-group-rounded-bold"
                className="h-8 w-8 sm:h-9 sm:w-9"
              />
            </div>

            <div className="max-w-[820px] text-left">
              <h3 className="font-body text-[16px] font-black leading-[1.25] tracking-[-0.02em] text-ink sm:text-[17px] md:text-[18px]">
                More than 253,700 founders have signed up to learn how to build
                authentic visibility.
              </h3>

              <p className="mt-2 font-body text-[15px] font-medium leading-[1.45] tracking-[-0.01em] text-ink sm:text-[16px] md:text-[17px]">
                Get the email series that unpacks my Content GPS framework,
                built to help you earn trust by showing up as yourself.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="#framework"
            className="btn-base min-h-[44px] w-full shrink-0 rounded-full bg-paper px-8 py-3 text-[14px] font-black text-ink shadow-[0_8px_20px_rgba(16,16,16,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-white sm:w-auto md:min-w-[185px]"
          >
            Get the framework
          </Link>
        </div>
      </div>
    </section>
  );
}