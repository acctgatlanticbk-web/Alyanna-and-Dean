"use client"

import { useState } from "react"
import localFont from "next/font/local"
import { StorySection } from "@/components/StorySection"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { LOVE_STORY_SLIDES } from "@/lib/love-story-slides"

const theSeasons = localFont({
  src: "../../Font/Fontspring-DEMO-theseasons-reg.otf",
  display: "swap",
  variable: "--font-the-seasons",
})

const total = LOVE_STORY_SLIDES.length

export function LoveStoryCarousel() {
  const [, setApi] = useState<CarouselApi>()

  return (
    <div
      className={`${theSeasons.variable} flex h-full flex-col`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      {/* ── Slides — fills available space ── */}
      <div className="min-h-0 flex-1">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            duration: 52,
            dragFree: false,
            skipSnaps: false,
          }}
          className="h-full w-full touch-pan-y select-none"
          aria-label="Love story chapters"
        >
          <CarouselContent
            className="ml-0 h-full touch-pan-x [-webkit-overflow-scrolling:touch]"
            viewportClassName="h-full"
          >
            {LOVE_STORY_SLIDES.map((slide, i) => (
              <CarouselItem key={slide.imageSrc} className="h-full basis-full pl-0">
                <StorySection
                  {...slide}
                  theme="light"
                  variant="slide"
                  slideIndex={i}
                  totalSlides={total}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* ── Swipe hint ── */}
      <div className="flex shrink-0 flex-col items-center pb-2 pt-1 sm:pb-3">
        {/* Mobile swipe nudge */}
        <div className="flex items-center gap-1.5 sm:hidden">
          <span className="animate-swipe-hint inline-block" aria-hidden>
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
              style={{ color: "var(--color-motif-deep)", opacity: 0.38 }}
            >
              <path d="M9 11V6a2 2 0 0 1 4 0v5" />
              <path d="M13 11V8a2 2 0 0 1 4 0v6a6 6 0 0 1-12 0v-3a2 2 0 0 1 4 0v1" />
            </svg>
          </span>
          <p
            className={`${theSeasons.className} text-[0.5rem] uppercase tracking-[0.18em]`}
            style={{ color: "var(--color-motif-deep)", opacity: 0.38 }}
          >
            Swipe to explore
          </p>
          <span className="animate-swipe-hint-rev inline-block" aria-hidden>
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
              style={{ color: "var(--color-motif-deep)", opacity: 0.38 }}
            >
              <path d="M9 11V6a2 2 0 0 1 4 0v5" />
              <path d="M13 11V8a2 2 0 0 1 4 0v6a6 6 0 0 1-12 0v-3a2 2 0 0 1 4 0v1" />
            </svg>
          </span>
        </div>

        {/* Desktop hint */}
        <p
          className="font-goudy-italic hidden text-[0.6rem] tracking-[0.12em] sm:block sm:text-[0.6875rem]"
          style={{ color: "color-mix(in srgb, var(--color-welcome-text) 55%, transparent)" }}
        >
          Swipe to explore our story
        </p>
      </div>
    </div>
  )
}
