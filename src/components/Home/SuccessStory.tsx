"use client";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { Container } from "@/components/Container";
import { useOverlay } from "@/components/Overlay";

import videoPreviewImg from "./videoPreview.webp";

const VideoIframe = () => {
  return (
    <div className="aspect-video w-screen max-w-screen-lg md:px-6">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/CaVz9ovVqXs?si=TJOBMxfH0a2mJ64S"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const items = [
  {
    title: "Increasing product inventory",
    description:
      "Using their growth capital from Choco Up to pay for product inventory helped increase their sales and improved their profit margins.",
  },
  {
    title: "Building a strong women's brand",
    description:
      "Creating an activewear brand that catered to Asian women's bodies proved to be a great success as they are now part of the Love, Bonito family.",
  },
];

export const SucessStory = () => {
  const { show } = useOverlay();
  function onVideoClick() {
    show({
      content: <VideoIframe />,
    });
  }
  return (
    <Container className="py-12" size="medium">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-center font-medium uppercase tracking-widest text-chocoup-medium-slate-blue">
          SUCCESS STORY
        </div>
        <h3 className="mb-8 text-center">
          Maximise{" "}
          <span className="text-chocoup-medium-slate-blue">
            business potential
          </span>{" "}
          with growth capital investment
        </h3>
        <button
          onClick={onVideoClick}
          type="button"
          className="group mb-8 rounded-[40px] p-4 shadow-xl md:rounded-[72px] md:p-6"
        >
          <div className="relative aspect-video overflow-hidden rounded-[24px] md:rounded-[48px]">
            <Image
              src={videoPreviewImg}
              alt="video preview"
              placeholder="blur"
              loading="lazy"
              className="filter group-hover:brightness-75"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chocoup-lavender transition-all duration-300 group-hover:scale-110">
              <PlayCircleIcon className="h-24 w-24 text-chocoup-indian-red" />
            </div>
          </div>
        </button>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {items.map((item, index) => (
            <div key={item.title} className="flex gap-6 p-6 leading-loose">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-chocoup-medium-slate-blue text-xl font-bold italic text-white">
                  {index + 1}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-2xl font-bold">{item.title}</div>
                <div className="text-lg leading-8 text-chocoup-midnight-blue">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
