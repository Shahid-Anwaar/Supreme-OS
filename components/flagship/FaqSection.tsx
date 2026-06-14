"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, type ReactNode } from "react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

type FAQSectionProps = {
  heading?: ReactNode;
  items?: FAQItem[];
};

const defaultFaqItems: FAQItem[] = [
  {
    question: "How long is the curriculum?",
    answer: (
      <>
        <p>
          Our curriculum consists of 12 in-depth modules you can digest at your
          own pace.
        </p>

        <p>
          I recommend taking one module a week to allow time for you to absorb
          and apply what is shared in each lesson. Each module also comes with
          corresponding exercises to help solidify the principles and systems.
        </p>
      </>
    ),
  },
  {
    question: "Does each module have a video?",
    answer: (
      <>
        <p>The modules are view-at-your-own-pace videos.</p>

        <p>
          You have access to live interactive Q&amp;A sessions with Matt and the
          entire Founder OS private community where you can ask questions and
          connect with fellow founders.
        </p>
      </>
    ),
  },
  {
    question: "When can I start the program?",
    answer: (
      <p>
        You can begin immediately after joining. If you’re ready to get started,{" "}
        <Link href="/apply" className="font-bold underline">
          apply now
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Can I pass this as a business expense?",
    answer: (
      <p>
        We are not accountants. But you should be able to count this as a
        business expense. You will receive a payment receipt in your email upon
        joining. Make sure you save this receipt as proof of purchase.
      </p>
    ),
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-ink/80">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
        aria-expanded={isOpen}
      >
        <span className="font-body text-[20px] font-medium leading-[1.25] tracking-[-0.01em] text-ink sm:text-[24px] md:text-[26px]">
          {item.question}
        </span>

        <Icon
          icon="material-symbols:arrow-forward"
          className={`h-8 w-8 shrink-0 text-ink transition-transform duration-300 sm:h-9 sm:w-9 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-[850px] space-y-4 font-body text-[15px] font-medium leading-[1.55] tracking-[-0.01em] text-black/75 sm:text-[17px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({
  heading = "Frequently Asked Questions",
  items = defaultFaqItems,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="layout-page-container">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-center text-heading-section">{heading}</h2>

          <div className="mt-12 sm:mt-14 md:mt-16">
            {items.map((item, index) => (
              <FAQAccordionItem
                key={`${item.question}-${index}`}
                item={item}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}