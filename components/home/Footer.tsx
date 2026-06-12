"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const socialLinks = [
  {
    label: "X",
    href: "#",
    icon: "simple-icons:x",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "mdi:linkedin",
  },
  {
    label: "YouTube",
    href: "#",
    icon: "mdi:youtube",
  },
  {
    label: "TikTok",
    href: "#",
    icon: "ic:baseline-tiktok",
  },
  {
    label: "Instagram",
    href: "#",
    icon: "mdi:instagram",
  },
  {
    label: "Podcast",
    href: "#",
    icon: "mdi:podcast",
  },
  {
    label: "Blog",
    href: "#",
    icon: "simple-icons:blogger",
  },
];

const footerLinks = [
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "DMCA Policy",
    href: "#dmca",
  },
  {
    label: "Privacy Policy",
    href: "#privacy",
  },
  {
    label: "Terms of Service",
    href: "#terms",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="layout-page-container">
        <div className="flex flex-col gap-12 py-12 sm:py-14 md:py-16 lg:gap-16">
          {/* Top Footer */}
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            {/* Left Content */}
            <div className="mx-auto w-full max-w-[430px] text-center lg:mx-0 lg:text-left">
              <Link
                href="/"
                aria-label="Supreme OS Home"
                className="inline-flex font-body text-[20px] font-black uppercase leading-none tracking-[-0.04em] text-white"
              >
                Supreme OS
              </Link>

              <div className="mt-9 flex justify-center lg:justify-start">
                <Link
                  href="#framework"
                  className="btn-base btn-brand btn-size-xl"
                >
                  Get The Framework
                </Link>
              </div>

              <div className="mt-7">
                <h3 className="font-body text-[15px] font-black leading-[1.35] tracking-[-0.02em] text-white sm:text-[16px]">
                  More than 100,000 founders have signed up to learn how to
                  build authentic visibility.
                </h3>

                <p className="mt-3 font-body text-[15px] font-medium leading-[1.35] tracking-[-0.015em] text-white sm:text-[16px]">
                  Get the email series that unpacks my Content GPS framework,
                  built to help you earn trust by showing up as yourself.
                </p>
              </div>
            </div>

            {/* Right Social */}
            <div className="flex flex-col items-center gap-3 lg:items-end">
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-end">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="text-white transition-all duration-200 hover:-translate-y-0.5 hover:text-primary-300"
                  >
                    <Icon icon={item.icon} className="h-[20px] w-[20px]" />
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-center gap-6 lg:justify-end">
                <Link
                  href="#blog"
                  className="font-body text-[15px] font-black leading-none text-primary-300 transition-colors duration-200 hover:text-white"
                >
                  Blog
                </Link>

                <Link
                  href="#careers"
                  className="font-body text-[15px] font-black leading-none text-primary-300 transition-colors duration-200 hover:text-white"
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="text-center">
            <p className="font-body text-[14px] font-medium leading-[1.5] tracking-[-0.015em] text-white sm:text-[15px]">
              Supreme OS Copyright 2026. All materials on this website are the
              property of Supreme OS. All rights reserved.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              {footerLinks.map((item, index) => (
                <div key={item.label} className="flex items-center gap-4">
                  <Link
                    href={item.href}
                    className="font-body text-[15px] font-medium leading-none text-primary-300 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>

                  {index !== footerLinks.length - 1 && (
                    <span className="hidden text-white sm:inline">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}