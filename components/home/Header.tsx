"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Supreme OS Velocity",
    href: "#velocity",
  },
  {
    label: "Edge",
    href: "#edge",
  },
  {
    label: "Flagship",
    href: "#flagship",
  },
  {
    label: "About us",
    href: "#about",
  },
];

export default function HeaderSection() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-2 z-50 bg-cream py-3.5 sm:py-4">
      <div className="layout-page-container">
        <nav className="nav-bar-shell min-h-[54px] rounded-[10px] bg-paper px-5 shadow-[0_8px_26px_rgba(16,16,16,0.06)] sm:px-6 lg:px-8 py-3">
          {/* Left Side */}
          <div className="flex min-w-0 items-center gap-7 lg:gap-9">
            <Link
              href="/"
              aria-label="Supreme OS Home"
              className="flex shrink-0 items-center"
            >
              <span className="h-[26px] w-[26px] rounded-full bg-primary-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex xl:gap-[46px]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-body text-[16px] font-semibold leading-none text-black/85 transition-colors duration-200 hover:text-primary-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            <p className="max-w-40 text-right font-body text-[14px] font-medium leading-[1.08] text-ink">
              Do you want to grow your online business?
            </p>

            <Link
              href="#book-call"
              className="btn-base btn-size-lg btn-brand "
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-ink transition-all duration-200 ${
                  mobileOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-ink transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-ink transition-all duration-200 ${
                  mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="nav-mobile-panel mt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 font-body text-[14px] font-bold text-ink transition-colors duration-200 hover:bg-primary-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="divider-light my-4" />

            <div className="stack-gap-md">
              <p className="text-body-small text-center">
                Do you want to grow your online business?
              </p>

              <Link
                href="#book-call"
                onClick={() => setMobileOpen(false)}
                className="btn-base btn-size-md btn-brand w-full"
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}