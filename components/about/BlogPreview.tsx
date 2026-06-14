import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

type BlogTagVariant = "lime" | "teal" | "default";

type BlogPost = {
  title: ReactNode;
  description?: ReactNode;
  href: string;
  image: string;
  imageAlt?: string;
  authorName?: string;
  authorImage?: string;
  readTime?: string;
  tag?: string;
  tagVariant?: BlogTagVariant;
};

type BlogPreviewSectionProps = {
  heading?: ReactNode;
  description?: ReactNode;
  ctaText?: string;
  ctaHref?: string;
  posts?: BlogPost[];
  sectionClassName?: string;
  containerClassName?: string;
  gridClassName?: string;
};

const defaultAuthorImage =
  "https://cdn.prod.website-files.com/67b527fc21dcaaa24e79d0fa/68218b93e922eefad3d9b8c0_64faa62851d65e51f31012d7_mattprofile.webp";

const defaultPosts: BlogPost[] = [
  {
    title: "Unlock the secret for unlimited growth",
    description:
      "5 components of building a rock-solid community [Community OS] Want to know the secret behind guaranteed...",
    href: "/blog/unlock-the-secret-for-unlimited-growth",
    image:
      "https://cdn.prod.website-files.com/67b527fc21dcaaa24e79d0fa/682583c99700e17929b6aa57_65fcaae12833a47092518b3f_Unlock%2520the%2520secret%2520for%2520unlimited%2520growth.png",
    imageAlt: "The Founder Journey",
    authorName: "Matt Gray",
    authorImage: defaultAuthorImage,
    readTime: "5 min read",
    tag: "Monetization",
    tagVariant: "lime",
  },
  {
    title: "Create your own competition-less category",
    description: "",
    href: "/blog/create-your-own-competition-less-category",
    image:
      "https://cdn.prod.website-files.com/67b527fc21dcaaa24e79d0fa/682583a27eae34fbb9b6be35_65fcaa4d781d485ff29fc3d2_Create%2520your%2520own%2520competition-less%2520category.webp",
    imageAlt: "Competition-less category visual",
    authorName: "Matt Gray",
    authorImage: defaultAuthorImage,
    readTime: "3.5 min read",
    tag: "Systems",
    tagVariant: "teal",
  },
];

function BlogTag({
  label,
  variant = "default",
}: {
  label: string;
  variant?: BlogTagVariant;
}) {
  const variantClass =
    variant === "lime"
      ? "border-primary-400 text-primary-500"
      : variant === "teal"
        ? "border-cyan-600 text-cyan-700"
        : "border-ink/30 text-ink";

  return (
    <span
      className={`inline-flex min-h-[30px] items-center rounded-full border bg-paper px-5 py-1 font-body text-[14px] font-medium leading-none tracking-[-0.01em] ${variantClass}`}
    >
      {label}
    </span>
  );
}

function BlogPreviewCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-basic flex h-full flex-col rounded-[8px] bg-paper p-6 shadow-[0_12px_34px_rgba(16,16,16,0.055)] sm:p-7">
      <Link href={post.href} className="block">
        <div className="relative aspect-[1.52/1] overflow-hidden rounded-[6px] bg-line">
          <Image
            src={post.image}
            alt={post.imageAlt || String(post.title)}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <h3 className="mt-7 font-body text-[23px] font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-[25px] md:text-[26px]">
          {post.title}
        </h3>

        {post.description && (
          <p className="mt-6 font-body text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-ink sm:text-[20px]">
            {post.description}
          </p>
        )}
      </Link>

      <div className="mt-auto pt-8">
        <div className="flex items-center gap-3">
          {post.authorImage && (
            <Image
              src={post.authorImage}
              alt={post.authorName || "Author"}
              width={26}
              height={26}
              className="h-[26px] w-[26px] rounded-full object-cover"
            />
          )}

          <p className="font-body text-[16px] font-medium leading-none tracking-[-0.01em] text-ink sm:text-[17px]">
            {post.authorName}
            {post.readTime ? ` / ${post.readTime}` : ""}
          </p>
        </div>

        {post.tag && (
          <div className="mt-5">
            <BlogTag label={post.tag} variant={post.tagVariant} />
          </div>
        )}
      </div>
    </article>
  );
}

export default function BlogPreviewSection({
  heading = "Founder OS Blog",
  description = "Get access to our guides, playbooks, and blueprints for growing your business",
  ctaText = "Read More",
  ctaHref = "/blog",
  posts = defaultPosts,
  sectionClassName = "",
  containerClassName = "",
  gridClassName = "grid-cols-1 md:grid-cols-2",
}: BlogPreviewSectionProps) {
  return (
    <section
      className={`bg-cream py-12 sm:py-14 md:py-16 lg:py-20 ${sectionClassName}`}
    >
      <div className={`layout-page-container ${containerClassName}`}>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.7fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <h2 className="text-heading-section">
              {heading}
            </h2>

            <p className="mx-auto mt-7 max-w-[390px] font-body text-[18px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[21px] lg:mx-0">
              {description}
            </p>

            <div className="mt-9 flex justify-center lg:justify-start">
              <Link
                href={ctaHref}
                className="btn-base btn-size-xl btn-brand w-full sm:w-auto"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          <div className={`grid gap-6 ${gridClassName}`}>
            {posts.map((post, index) => (
              <BlogPreviewCard key={`${post.href}-${index}`} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}