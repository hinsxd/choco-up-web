"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { Slide, SlideProps } from "@/components/Home/Testimonials/Slide";

const BUFFER = 2;
export const Slider = ({ slides }: { slides: SlideProps[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(512);
  const [autoSlide, setAutoSlide] = useState(true);
  const slidesWithTranslations = useMemo(() => {
    if (!containerWidth) return [];

    return Array(2 * BUFFER + 1)
      .fill(0)
      .map((_, i) => i - BUFFER)
      .map((offset) => {
        const slide =
          slides[(activeIndex + slides.length + offset) % slides.length];
        return {
          ...slide,
          translateX: offset * containerWidth,
        };
      });
  }, [activeIndex, containerWidth, slides]);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setActiveIndex((i) => (i + 1) % slides.length);
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [autoSlide, slides.length]);
  useLayoutEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setContainerWidth(ref.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slides.length]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => {
        setAutoSlide(false);
      }}
      onMouseLeave={() => {
        setAutoSlide(true);
      }}
    >
      <button
        type="button"
        onClick={() => {
          setActiveIndex((i) => (i + slides.length - 1) % slides.length);
        }}
        className="absolute left-0 top-0 z-10 flex h-full w-12 items-center justify-center bg-gradient-to-r from-white to-transparent"
      >
        <ChevronLeftIcon className="h-6 w-6 text-chocoup-dark-slate-blue" />
      </button>
      <button
        type="button"
        onClick={() => {
          setActiveIndex((i) => (i + 1) % slides.length);
        }}
        className="absolute right-0 top-0 z-10 flex h-full w-12 items-center justify-center bg-gradient-to-l from-white to-transparent"
      >
        <ChevronRightIcon className="h-6 w-6 text-chocoup-dark-slate-blue" />
      </button>
      <div className="relative mx-auto h-[360px] w-full max-w-lg" ref={ref}>
        {containerWidth > 0 &&
          slidesWithTranslations.map((slide) => (
            <Slide {...slide} key={slide.id} />
          ))}
      </div>
    </div>
  );
};
