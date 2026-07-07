import React from "react"
import Link from "next/link"
import localFont from "next/font/local"
import { LoveStoryCarousel } from "@/components/love-story/LoveStoryCarousel"
import { Cinzel } from "next/font/google"

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

function LoveStoryPageTitle() {
  return (
    <h1
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
      <span
        aria-hidden
        className={`${aboveTheBeyond.className} relative z-10 mx-auto block w-fit max-w-full px-1 leading-[0.88] sm:leading-[0.9]`}
        style={{
          marginTop: "var(--script-overlap)",
          fontSize: "var(--script-size)",
          color: "var(--color-motif-accent)",
          textShadow:
            "0 1px 0 color-mix(in srgb, var(--color-welcome-bg) 95%, white), 0 0 10px color-mix(in srgb, var(--color-welcome-bg) 65%, white)",
        }}
      >
        From Hello to Forever
      </span>
      <span className="sr-only">From Hello to Forever</span>
    </h1>
  )
}

export default function LoveStoryPage() {
  return (
    <main
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative min-h-screen overflow-x-hidden`}
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

      <div className="relative z-20 px-4 pb-2 pt-4 text-center sm:pt-6 md:pt-8">
        <div className="mx-auto mb-5 sm:mb-6 md:mb-7">
          <OrnamentalDivider />
        </div>

        <LoveStoryPageTitle />

        <p
          className="font-goudy-italic mx-auto mt-4 max-w-2xl text-[0.75rem] leading-[1.68] sm:mt-5 sm:text-[0.8125rem] sm:leading-[1.7] md:mt-6 md:text-[0.875rem]"
          style={{ color: "var(--color-welcome-text)" }}
        >
          From our first chapter to this beautiful season of commitment — every moment has been a
          testament to love, faith, and grace.
        </p>
      </div>

      <LoveStoryCarousel />

      <div
        className="relative px-4 pb-16 pt-2 text-center sm:pb-20 md:pb-24"
        style={{ background: "var(--color-welcome-bg)" }}
      >
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

        <div className="relative z-20">
          <div className="mx-auto mb-5 sm:mb-6">
            <OrnamentalDivider />
          </div>
          <Link
            href="/#guest-list"
            className={`${cinzel.className} group relative inline-flex items-center justify-center rounded-sm border px-6 py-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-8 sm:py-3 sm:text-[0.6875rem] sm:tracking-[0.24em] md:px-10 md:py-3.5 md:text-xs md:tracking-[0.28em]`}
            style={{
              backgroundColor: "var(--color-welcome-green)",
              borderColor: "color-mix(in srgb, var(--color-welcome-navy) 35%, transparent)",
              color: "var(--color-welcome-bg)",
            }}
          >
            <span className="relative z-10">Join us</span>
            <div
              className="absolute inset-0 -z-0 rounded-sm opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-25"
              style={{ backgroundColor: "var(--color-motif-deep)" }}
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
