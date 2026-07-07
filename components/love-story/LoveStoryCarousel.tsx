"use client"

import localFont from "next/font/local"
import { StorySection } from "@/components/StorySection"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { LOVE_STORY_SLIDES } from "@/lib/love-story-slides"

const theSeasons = localFont({
  src: "../../Font/Fontspring-DEMO-theseasons-reg.otf",
  display: "swap",
  variable: "--font-the-seasons",
})

export function LoveStoryCarousel() {
  return (
    <div
      className={`${theSeasons.variable} w-full`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 52,
          dragFree: false,
          skipSnaps: false,
        }}
        className="w-full touch-pan-y select-none"
        aria-label="Love story chapters"
      >
        <CarouselContent className="ml-0 touch-pan-x [-webkit-overflow-scrolling:touch]">
          {LOVE_STORY_SLIDES.map((slide) => (
            <CarouselItem key={slide.imageSrc} className="basis-full pl-0">
              <StorySection {...slide} theme="light" variant="slide" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p
        className="font-goudy-italic pb-6 pt-2 text-center text-[0.625rem] tracking-[0.12em] sm:pb-8 sm:text-[0.6875rem]"
        style={{ color: "color-mix(in srgb, var(--color-welcome-text) 72%, transparent)" }}
      >
        Swipe to explore our story
      </p>
    </div>
  )
}
