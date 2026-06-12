"use client";

import Image from "next/image";
import CustomEmblaCarousel from "../custom/CustomCarosal";

const logos = [
    {
        name: "Hypefury",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68219bc7a31ef73107948e1a_Hyperfury.webp",
        width: 150,
        height: 40,
    },
    {
        name: "Taplio",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68219c6c6be22b9fa6e75b62_Taplio.webp",
        width: 120,
        height: 40,
    },
    {
        name: "Seamless AI",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a9981b4dae4e86b28656_Seamless%20AI.webp",
        width: 155,
        height: 40,
    },
    {
        name: "Pray.com",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a9983ede949427b0720c_pray.webp",
        width: 150,
        height: 40,
    },
    {
        name: "Foreplay",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a998fd59291830cd9aaa_foreplay.webp",
        width: 145,
        height: 40,
    },
    {
        name: "Teleport",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a9988807751903b9e3de_teleport.webp",
        width: 150,
        height: 40,
    },
    {
        name: "Figure",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a998a88bae4f22690b2e_Figure.webp",
        width: 130,
        height: 40,
    },
    {
        name: "Contact Studios",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a998644e8caf9649e02a_Contact.webp",
        width: 115,
        height: 40,
    },
    {
        name: "CourseAI",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/68219a59385f2a26d3c52368_Couese%20AI.webp",
        width: 125,
        height: 40,
    },
    {
        name: "The Family Fund",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821aa4e5a15ac52403b91db_familyfund-p-1600.webp",
        width: 170,
        height: 40,
    },
    {
        name: "Brain Apes",
        image:
            "https://cdn.prod.website-files.com/673ff72afe499201ca5b3d58/6821a998631abf52d0a17e1f_Brain%20Apes%20with%20Text-p-1600.webp",
        width: 160,
        height: 40,
    },
];

export default function CompaniesSliderSection() {
    return (
        <section className="bg-cream py-8 sm:py-9 md:py-10">
            <CustomEmblaCarousel
                items={logos}
                isContinuousPlay
                options={{
                    loop: true,
                    align: "start",
                    dragFree: true,
                }}
                continuousPlayConfig={{
                    speed: 0.8,
                    direction: "forward",
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                }}
                wrapperClassName="!bg-cream"
                CustomCard={(logo) => (
                    <div
                        key={logo.name}
                        className="flex min-w-[170px] shrink-0 basis-[170px] items-center justify-center px-6 sm:min-w-[200px] sm:basis-[200px] md:min-w-[230px] md:basis-[230px] lg:min-w-[235px] lg:basis-[235px] px-10"
                    >
                        <div className="flex h-[46px] w-full items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-90">
                            <Image
                                src={logo.image}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className="h-auto max-h-[32px] w-auto object-contain sm:max-h-[36px]"
                            />
                        </div>
                    </div>
                )}
            />
        </section>
    );
}