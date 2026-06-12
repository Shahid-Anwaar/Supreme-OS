import Image from "next/image";
import Link from "next/link";

export default function FounderStorySection() {
  return (
    <section id="about" className="bg-cream py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="layout-page-container">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-heading-section">
            Hey, I&apos;m Matt.
          </h2>

          <div className="relative mx-auto mt-7 overflow-hidden rounded-[7px] bg-paper shadow-[0_12px_34px_rgba(16,16,16,0.055)] sm:mt-8">
            <Image
              src="https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/682a02a539ea6ea598b0f32e_e76feea851042f3ab87e327b6d9a2b9b61cf2cfe.webp"
              alt="Founder sitting on steps"
              width={1200}
              height={520}
              className="h-[230px] w-full object-cover object-center sm:h-[310px] md:h-[340px] lg:h-[355px]"
              priority={false}
            />
          </div>

          <div className="mx-auto mt-7 max-w-[1180px] space-y-6 text-center sm:mt-8">
            <p className="font-body text-[15px] font-medium leading-[1.5] tracking-[-0.01em] text-ink sm:text-[17px] md:text-[18px]">
              My mission is to empower founders to build businesses that give
              them freedom through repeatable systems.
            </p>

            <p className="font-body text-[15px] font-medium leading-[1.5] tracking-[-0.01em] text-ink sm:text-[17px] md:text-[18px]">
              I built Supreme OS while traveling across the world — Tokyo,
              Mexico City, Joshua Tree, Yosemite, and Bali.
            </p>

            <p className="font-body text-[15px] font-medium leading-[1.5] tracking-[-0.01em] text-ink sm:text-[17px] md:text-[18px]">
              Supreme OS is what I wish I had years ago when I started as an
              entrepreneur. I have since built sustainable companies, and my goal
              is to open source the systems for the next generation of dreamers,
              creators, and builders.
            </p>

            <p className="font-body text-[15px] font-medium leading-[1.5] tracking-[-0.01em] text-ink sm:text-[17px] md:text-[18px]">
              Here&apos;s a sneak peek into the Supreme OS story...
            </p>
          </div>

          <div className="mt-8 flex justify-center sm:mt-9">
            <Link
              href="#about"
              className="btn-base btn-brand btn-size-xl"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}