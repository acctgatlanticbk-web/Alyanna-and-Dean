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

const CORNER_DECO_CLASS = "block h-auto w-auto"
const CORNER_DECO_STYLE = {
  width: "clamp(56px, 16vw, 220px)",
  maxWidth: "clamp(56px, 16vw, 220px)",
} as React.CSSProperties

function OrnamentalDivider({ size = "md" }: { size?: "sm" | "md" }) {
  const lineW = size === "sm" ? "w-8 sm:w-12" : "w-10 sm:w-16"
  const dotSm = size === "sm" ? "h-px w-px" : "h-0.5 w-0.5"
  const dotMd = size === "sm" ? "h-0.5 w-0.5" : "h-1 w-1"
  return (
    <div className="flex items-center justify-center gap-1">
      {/* left wing */}
      <span
        className={`h-px ${lineW}`}
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-motif-deep) 30%, transparent))",
        }}
      />
      <span className={`rounded-full ${dotSm}`} style={{ background: "color-mix(in srgb, var(--color-motif-deep) 25%, transparent)" }} aria-hidden />
      <span className={`rounded-full ${dotMd}`} style={{ background: "color-mix(in srgb, var(--color-motif-deep) 45%, transparent)" }} aria-hidden />
      <span className={`rounded-full ${dotSm}`} style={{ background: "color-mix(in srgb, var(--color-motif-deep) 25%, transparent)" }} aria-hidden />
      {/* right wing */}
      <span
        className={`h-px ${lineW}`}
        style={{
          background:
            "linear-gradient(to left, transparent, color-mix(in srgb, var(--color-motif-deep) 30%, transparent))",
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
          "--title-size": "clamp(1.75rem, 9.5vw, 4.5rem)",
          "--script-size": "clamp(1rem, 4.2vw, 2.5rem)",
          "--script-overlap": "clamp(-0.55rem, -2.6vw, -1.75rem)",
        } as React.CSSProperties
      }
    >
      <span
        className={`${theSeasons.className} block uppercase leading-[0.82] tracking-[0.07em] min-[400px]:tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.18em]`}
        style={{
          fontSize: "var(--title-size)",
          color: "var(--color-welcome-navy)",
        }}
      >
        Our Love Story
      </span>
      <span
        aria-hidden
        className={`${aboveTheBeyond.className} relative z-10 mx-auto block w-fit max-w-full px-1 leading-[0.9]`}
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
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative flex h-[calc(100dvh-3rem)] flex-col overflow-hidden sm:h-[calc(100dvh-3.5rem)]`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      {/* ── Fixed corner decorations — always visible in all 4 corners ── */}
      <div className="pointer-events-none fixed left-0 top-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/decoration/deco/top-left-corner-deco.png" alt="" className={CORNER_DECO_CLASS} style={CORNER_DECO_STYLE} />
      </div>
      <div className="pointer-events-none fixed right-0 top-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/decoration/deco/top-right-corner-deco.png" alt="" className={CORNER_DECO_CLASS} style={CORNER_DECO_STYLE} />
      </div>
      <div className="pointer-events-none fixed bottom-0 left-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/decoration/deco/bottom-left-corner-deco.png" alt="" className={CORNER_DECO_CLASS} style={CORNER_DECO_STYLE} />
      </div>
      <div className="pointer-events-none fixed bottom-0 right-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/decoration/deco/bottom-right-corner-deco.png" alt="" className={CORNER_DECO_CLASS} style={CORNER_DECO_STYLE} />
      </div>

      {/* ── Header ── */}
      <div className="relative z-20 shrink-0 px-4 pb-1 pt-6 text-center sm:pb-2 sm:pt-8 md:pb-3 md:pt-10">
        <div className="mx-auto mb-1.5 sm:mb-3 md:mb-4">
          <OrnamentalDivider />
        </div>
        <LoveStoryPageTitle />
        <p
          className="font-goudy-italic mx-auto mt-1 max-w-[255px] text-[0.62rem] leading-[1.55] sm:mt-3 sm:max-w-xl sm:text-[0.8rem] sm:leading-[1.65] md:mt-4 md:text-[0.875rem]"
          style={{ color: "var(--color-welcome-text)" }}
        >
          From our first chapter to this beautiful season of commitment — every moment has been a
          testament to love, faith, and grace.
        </p>
      </div>

      {/* ── Carousel fills remaining space ── */}
      <div className="relative z-20 min-h-0 flex-1 overflow-hidden">
        <LoveStoryCarousel />
      </div>

      {/* ── Footer CTA ── */}
      <div className="relative z-20 shrink-0 px-4 pb-4 pt-1 text-center sm:pb-7 md:pb-8">
        <div className="mx-auto mb-2 sm:mb-4">
          <OrnamentalDivider size="sm" />
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
    </main>
  )
}
