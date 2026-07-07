"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import localFont from "next/font/local"
import { motion } from "motion/react"
import { Heart } from "lucide-react"
import { Cinzel } from "next/font/google"
import { LOVE_STORY_SLIDES } from "@/lib/love-story-slides"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const theSeasons = localFont({
  src: "../../Font/Fontspring-DEMO-theseasons-reg.otf",
  display: "swap",
  variable: "--font-the-seasons",
})

const aboveTheBeyond = localFont({
  src: "../../Font/above-the-beyond-script.otf",
  display: "swap",
  variable: "--font-above-beyond",
})

const CORNER_DECO_CLASS =
  "block h-auto w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[260px]"

const PREVIEW_SLIDES = [
  LOVE_STORY_SLIDES[0],
  LOVE_STORY_SLIDES[Math.floor(LOVE_STORY_SLIDES.length / 2)],
  LOVE_STORY_SLIDES[LOVE_STORY_SLIDES.length - 1],
]

function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span
        className="h-px w-6 sm:w-10"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent))",
        }}
      />
      <span className="h-0.5 w-0.5 rounded-full bg-motif-deep/45 sm:h-1 sm:w-1" aria-hidden />
      <span
        className="h-px w-6 sm:w-10"
        style={{
          background:
            "linear-gradient(to left, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent))",
        }}
      />
    </div>
  )
}

function LoveStoryTitle() {
  return (
    <h2
      className="relative mx-auto w-full max-w-full text-center"
      style={
        {
          "--title-size": "clamp(2.15rem, 11vw, 4.5rem)",
          "--script-size": "clamp(1.2rem, 5vw, 2.5rem)",
          "--script-overlap": "clamp(-0.75rem, -3.2vw, -1.75rem)",
        } as React.CSSProperties
      }
    >
      <span
        className={`${theSeasons.className} block uppercase leading-[0.78] tracking-[0.08em] min-[400px]:tracking-[0.11em] sm:tracking-[0.15em] md:tracking-[0.18em]`}
        style={{
          fontSize: "var(--title-size)",
          color: "var(--color-welcome-navy)",
        }}
      >
        Our Love Story
      </span>
      <span className="sr-only">Our Love Story</span>
    </h2>
  )
}

function PreviewPolaroids() {
  return (
    <div className="relative mx-auto mt-8 flex h-[220px] max-w-md items-center justify-center sm:mt-10 sm:h-[260px] md:h-[300px]">
      {PREVIEW_SLIDES.map((slide, index) => {
        const rotations = ["-rotate-6", "rotate-0", "rotate-6"]
        const offsets = ["-translate-x-[28%]", "translate-y-[-6%]", "translate-x-[28%]"]
        const zIndexes = ["z-10", "z-20", "z-10"]

        return (
          <motion.div
            key={slide.imageSrc}
            className={`absolute w-[38%] max-w-[150px] sm:max-w-[170px] md:max-w-[190px] ${rotations[index]} ${offsets[index]} ${zIndexes[index]}`}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.03, zIndex: 30 }}
          >
            <div
              className="p-1.5 sm:p-2"
              style={{
                background: "var(--color-welcome-bg-soft)",
                border: "1px solid color-mix(in srgb, var(--color-motif-deep) 10%, transparent)",
                boxShadow:
                  "0 10px 28px color-mix(in srgb, var(--color-motif-deep) 14%, transparent), inset 0 1px 0 color-mix(in srgb, white 70%, transparent)",
              }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill
                  sizes="190px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export function LoveStory() {
  return (
    <section
      id="love-story"
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative overflow-x-hidden`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <div className="pointer-events-none absolute right-0 top-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/decoration/deco/top-right-corner-deco.png"
          alt=""
          className={CORNER_DECO_CLASS}
        />
      </div>
      <div className="pointer-events-none absolute left-0 top-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/decoration/deco/top-left-corner-deco.png"
          alt=""
          className={CORNER_DECO_CLASS}
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/decoration/deco/bottom-left-corner-deco.png"
          alt=""
          className={CORNER_DECO_CLASS}
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/decoration/deco/bottom-right-corner-deco.png"
          alt=""
          className={CORNER_DECO_CLASS}
        />
      </div>

      <div className="relative z-20 px-4 py-10 text-center sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-5 sm:mb-6 md:mb-7">
            <OrnamentalDivider />
          </div>

          <LoveStoryTitle />

          <p
            className="font-goudy-italic mx-auto mt-5 max-w-2xl text-[0.75rem] leading-[1.68] sm:mt-6 sm:text-[0.8125rem] sm:leading-[1.7] md:mt-7 md:text-[0.875rem]"
            style={{ color: "var(--color-welcome-text)" }}
          >
            From our first chapter to this beautiful season of commitment — every moment has been a
            testament to love, faith, and grace.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5">
            <span
              className="h-px w-8 sm:w-12 md:w-16"
              style={{
                background:
                  "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-welcome-navy) 38%, transparent))",
              }}
            />
            <Heart
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              style={{ color: "var(--color-welcome-green)" }}
              aria-hidden
            />
            <span
              className="h-px w-8 sm:w-12 md:w-16"
              style={{
                background:
                  "linear-gradient(to left, transparent, color-mix(in srgb, var(--color-welcome-navy) 38%, transparent))",
              }}
            />
          </div>
        </motion.div>

        <PreviewPolaroids />

        <motion.div
          className="mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Link
            href="/love-story"
            className={`${cinzel.className} group relative inline-flex items-center justify-center rounded-sm border px-7 py-3 text-[0.625rem] font-normal uppercase tracking-[0.18em] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-9 sm:py-3.5 sm:text-[0.6875rem] sm:tracking-[0.24em] md:px-11 md:text-xs md:tracking-[0.28em]`}
            style={{
              backgroundColor: "var(--color-welcome-green)",
              borderColor: "color-mix(in srgb, var(--color-welcome-navy) 35%, transparent)",
              color: "var(--color-welcome-bg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-welcome-navy)"
              e.currentTarget.style.borderColor = "var(--color-welcome-green)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-welcome-green)"
              e.currentTarget.style.borderColor =
                "color-mix(in srgb, var(--color-welcome-navy) 35%, transparent)"
            }}
          >
            <span
              className={`${theSeasons.className} relative z-10 text-[1.35rem] normal-case tracking-normal sm:text-[1.5rem] md:text-[1.65rem]`}
            >
              From Hello to Forever
            </span>
            <div
              className="absolute inset-0 -z-0 rounded-sm opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-25"
              style={{ backgroundColor: "var(--color-motif-deep)" }}
            />
          </Link>

          <p
            className="font-goudy-italic mt-3 text-[0.625rem] tracking-wide sm:text-[0.6875rem]"
            style={{ color: "var(--color-welcome-text)" }}
          >
            {LOVE_STORY_SLIDES.length} chapters of love, waiting to be read
          </p>
        </motion.div>
      </div>
    </section>
  )
}
