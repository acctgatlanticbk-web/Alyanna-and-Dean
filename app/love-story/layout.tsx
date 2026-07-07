"use client"

import Link from "next/link"
import { Cinzel } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export default function LoveStoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--color-welcome-bg)" }}>
      <div
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-welcome-bg) 95%, transparent)",
          borderColor: "color-mix(in srgb, var(--color-welcome-navy) 18%, transparent)",
          boxShadow: "0 4px 18px color-mix(in srgb, var(--color-welcome-navy) 6%, transparent)",
        }}
      >
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-3 sm:h-14 sm:px-6 lg:px-8">
          <Link
            href="/#love-story"
            onClick={() => sessionStorage.setItem("returnFromLoveStory", "true")}
            className={`${cinzel.className} inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:gap-2 sm:px-4 sm:py-2 sm:text-[0.6875rem] sm:tracking-[0.2em]`}
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
            <span aria-hidden>←</span>
            <span className="hidden sm:inline">Back to invitation</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <div
            className={`${cinzel.className} text-[0.625rem] font-semibold uppercase tracking-[0.24em] sm:text-[0.6875rem] sm:tracking-[0.28em]`}
            style={{ color: "var(--color-welcome-navy)" }}
          >
            Love Story
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
