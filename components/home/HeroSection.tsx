import Image from "next/image";
import Link from "next/link";
import CompaniesSliderSection from "./CompaniesSlider";

type HeroAvatar = {
  src: string;
  alt?: string;
};

type HeroSectionProps = {
  isShowBadge?: boolean;
  badgeText?: string;
  title?: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  trustText?: string;
  avatars?: HeroAvatar[];
  showCompaniesSlider?: boolean;
};

const defaultAvatars: HeroAvatar[] = [
  { src: "https://i.pravatar.cc/80?img=12" },
  { src: "https://i.pravatar.cc/80?img=32" },
  { src: "https://i.pravatar.cc/80?img=45" },
  { src: "https://i.pravatar.cc/80?img=56" },
  { src: "https://i.pravatar.cc/80?img=60" },
  { src: "https://i.pravatar.cc/80?img=68" },
];

export default function HeroSection({
  isShowBadge = false,
  badgeText = "For founders doing $30k/month to $10M+/year",
  title = (
    <>
      We Build You a <br /> Personal Brand Machine
    </>
  ),
  subtitle = "The same system behind a $15M personal brand, 5M+ followers, and 2 billion organic impressions – installed into your business with your voice, your offer, your brand.",
  ctaText = "Book a Brand Strategy Call",
  ctaHref = "#book-call",
  trustText = "Trusted by 5,000+ founders building systemized, founder-led brands.",
  avatars = defaultAvatars,
  showCompaniesSlider = true,
}: HeroSectionProps) {
  return (
    <section className="bg-cream pb-10 pt-7 sm:pb-12 sm:pt-8 md:pb-14 md:pt-10 lg:pb-16 lg:pt-18">
      <div className="layout-page-container">
        <div className="mx-auto flex flex-col items-center text-center">
          {isShowBadge && (
            <div className="mb-9 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 shadow-[0_10px_24px_rgba(16,16,16,0.14)] sm:mb-10">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-primary-300" />

              <p className="font-subhead text-[9px] font-black uppercase leading-none tracking-[0.07em] text-white sm:text-[11px]">
                {badgeText}
              </p>
            </div>
          )}

          <h1 className="text-heading-page">
            {title}
          </h1>

          <p className="mt-7 text-body-large">{subtitle}</p>

          <div className="mt-12 flex w-full justify-center sm:mt-14">
            <Link href={ctaHref} className="btn-base btn-size-xl btn-brand w-full sm:w-auto">
              {ctaText}
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-center sm:mt-11">
            <div className="flex items-center justify-center">
              {avatars.map((avatar, index) => (
                <div
                  key={`${avatar.src}-${index}`}
                  className="-ml-1.5 first:ml-0 h-[19px] w-[19px] overflow-hidden rounded-full border border-paper bg-line shadow-sm sm:h-[22px] sm:w-[22px]"
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt || `Founder ${index + 1}`}
                    width={42}
                    height={42}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="mt-3 max-w-[430px] font-body text-[15px] font-medium leading-[1.35] tracking-[-0.01em] text-black/85 sm:text-[18px]">
              {trustText}
            </p>
          </div>
        </div>
      </div>

      {showCompaniesSlider && <CompaniesSliderSection />}
    </section>
  );
}