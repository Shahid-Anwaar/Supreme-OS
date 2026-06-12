"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = sessionStorage.getItem("contactSalesName");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto flex min-h-[80vh] max-w-[640px] flex-col items-center justify-center text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl">
          🎉
        </div>

        <h1 className="mb-3 text-[28px] font-bold tracking-[-0.04em] sm:text-[34px]">
          Thank you{name ? `, ${name}` : ""}!
        </h1>

        <p className="max-w-[480px] text-[16px] leading-7 text-black/60">
          Your contact request has been received successfully. Our team will
          review your details and contact you soon.
        </p>

        <Link
          href="/"
          className="mt-8 btn-base btn-brand px-7 py-4"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}