/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

type AutoplayConfig = {
    delay?: number;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
};

type ContinuousPlayConfig = {
    speed?: number;
    startDelay?: number;
    direction?: "forward" | "backward";
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
};

type EmblaCarouselProps = {
    options?: EmblaOptionsType;
    CustomCard?: (item: any, index: number, firstActiveItemIndex: number) => ReactNode;
    items?: any[];
    wrapperClassName?: string;
    CustomButtonWrapper?: (
        onPrevClickChoosed: () => void,
        onNextClickChoosed: () => void,
        onSpecificChoosed: (n: number) => void,

    ) => ReactNode;
    isAutoplay?: boolean;
    isContinuousPlay?: boolean;
    autoplayConfig?: AutoplayConfig;
    continuousPlayConfig?: ContinuousPlayConfig;
};

export default function CustomEmblaCarousel({
    options,
    CustomCard = () => null,
    items = [],
    wrapperClassName = "",
    CustomButtonWrapper = () => null,
    isAutoplay = false,
    isContinuousPlay = false,
    autoplayConfig = {},
    continuousPlayConfig = {},
}: EmblaCarouselProps) {
    const [selectedSnap, setSelectedSnap] = useState(0);

    const mergedAutoplayConfig: Required<AutoplayConfig> = {
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        ...autoplayConfig,
    };

    const mergedContinuousPlayConfig: Required<ContinuousPlayConfig> = {
        speed: 1.2,
        startDelay: 0,
        direction: "forward",
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        ...continuousPlayConfig,
    };

    const plugins = useMemo(() => {
        if (isContinuousPlay) {
            return [
                AutoScroll(mergedContinuousPlayConfig),
            ];
        }

        if (isAutoplay) {
            return [
                Autoplay(mergedAutoplayConfig),
            ];
        }

        return [];
    }, [
        isAutoplay,
        isContinuousPlay,
        mergedAutoplayConfig,
        mergedContinuousPlayConfig,
    ]);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            ...options,
        },
        plugins
    );

    const onPrevClickChoosed = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const onSpecificChoosed = useCallback((i: number) => {
        emblaApi?.scrollTo(i);
    }, [emblaApi]);

    const onNextClickChoosed = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    const updateIndexes = useCallback(() => {
        if (!emblaApi) return;
        setSelectedSnap(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi || !isContinuousPlay) return;
        emblaApi.plugins()?.autoScroll?.play();
    }, [emblaApi, isContinuousPlay]);


    useEffect(() => {
        if (!emblaApi) return;

        updateIndexes();

        emblaApi.on("select", updateIndexes);
        emblaApi.on("reInit", updateIndexes);

        return () => {
            emblaApi.off("select", updateIndexes);
            emblaApi.off("reInit", updateIndexes);
        };
    }, [emblaApi, updateIndexes]);

    return (
        <div className="w-full relative text-white">
            <div className="text-white">
                {CustomButtonWrapper(onPrevClickChoosed, onNextClickChoosed, onSpecificChoosed)}
            </div>
            <div
                className={`overflow-hidden bg-black ${wrapperClassName}`}
                ref={emblaRef}
            >
                <div className="flex h-full cursor-grab">
                    {items.map((review, index) =>
                        CustomCard(review, index, selectedSnap)
                    )}
                </div>
            </div>
        </div>
    );
}