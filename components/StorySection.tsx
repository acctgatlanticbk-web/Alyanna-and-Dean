"use client"

import React, { useEffect, useRef, useState } from "react"
import localFont from "next/font/local"
import Image from "next/image"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { TornPaperEdge } from "./TornPaperEdge"

const theSeasons = localFont({
  src: "../Font/Fontspring-DEMO-theseasons-reg.otf",
  display: "swap",
  variable: "--font-the-seasons",
})

const lightBg = "var(--color-welcome-bg)"
const darkBg = "var(--color-welcome-navy)"

interface StorySectionProps {
  imageSrc: string
  title?: string
  text: React.ReactNode
  layout: "image-left" | "image-right"
  theme: "dark" | "light"
  isFirst?: boolean
  isLast?: boolean
  variant?: "scroll" | "slide"
}

export const StorySection: React.FC<StorySectionProps> = ({
  imageSrc,
  title,
  text,
  layout,
  theme,
  isFirst = false,
  isLast = false,
  variant = "scroll",
}) => {
  const isDark = theme === "dark"
  const isSlide = variant === "slide"

  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasEntered, setHasEntered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const isVisible = isSlide ? true : hasEntered

  useEffect(() => {
    if (isSlide) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [isSlide])

  useEffect(() => {
    if (!isExpanded) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsExpanded(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isExpanded])

  const imageFrameStyle = isDark
    ? {
        background: "color-mix(in srgb, var(--color-welcome-bg) 12%, var(--color-welcome-navy))",
        boxShadow:
          "0 10px 28px color-mix(in srgb, var(--color-welcome-navy) 35%, transparent)",
      }
    : {
        background: "var(--color-welcome-bg-soft)",
        border: "1px solid color-mix(in srgb, var(--color-motif-deep) 10%, transparent)",
        boxShadow:
          "0 8px 24px color-mix(in srgb, var(--color-motif-deep) 7%, transparent), inset 0 1px 0 color-mix(in srgb, white 70%, transparent)",
      }

  const rotation = layout === "image-left" ? "rotate-1 md:rotate-2" : "-rotate-1 md:-rotate-2"
  const flexDirection = layout === "image-left" ? "flex-row" : "flex-row-reverse"
  const imageAlt = title ? `Photo: ${title}` : "Story moment photo"
  const expandedRotation = layout === "image-left" ? 2 : -2

  const hoverShadow = isDark
    ? "0 18px 42px color-mix(in srgb, var(--color-welcome-navy) 55%, transparent)"
    : "0 16px 36px color-mix(in srgb, var(--color-motif-deep) 18%, transparent)"

  return (
    <div
      className={`${theSeasons.variable} relative ${isSlide ? "min-h-[min(78vh,720px)]" : ""}`}
      style={{ background: isDark ? darkBg : lightBg }}
    >
      {!isDark && !isSlide && (
        <>
          {!isFirst && (
            <div className="pointer-events-none absolute left-0 top-0 z-20 -mt-[8px] w-full md:-mt-[20px]">
              <TornPaperEdge flipped={true} color={lightBg} />
            </div>
          )}
          <div className="pointer-events-none absolute bottom-0 left-0 z-20 -mb-[8px] w-full md:-mb-[20px]">
            <TornPaperEdge flipped={false} color={lightBg} />
          </div>
        </>
      )}
      <div
        ref={sectionRef}
        className={`container relative z-10 mx-auto px-2 transition-all ease-out md:px-12 ${
          isSlide ? "flex h-full min-h-[inherit] items-center py-10 duration-500 md:py-14" : "py-12 duration-1000 md:py-32"
        } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"} ${
          !isSlide && isFirst ? "pt-16 md:pt-36" : ""
        } ${!isSlide && isLast ? "pb-16 md:pb-36" : ""}`}
      >
        <div className={`flex ${flexDirection} items-center justify-between gap-3 md:gap-16`}>
          <div className="flex w-[45%] shrink-0 justify-center md:w-5/12">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              aria-label={`View ${imageAlt}`}
              className={`group relative w-full cursor-pointer border-0 bg-transparent p-0 text-left transition-all delay-300 duration-700 ease-out md:max-w-md ${rotation} ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"} hover:z-20 hover:-translate-y-2 hover:scale-[1.04] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
              style={
                {
                  "--hover-shadow": hoverShadow,
                } as React.CSSProperties
              }
              onMouseEnter={(event) => {
                event.currentTarget.style.boxShadow = "var(--hover-shadow)"
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.boxShadow = ""
              }}
            >
              <div
                className="w-full p-1.5 transition-shadow duration-500 group-hover:shadow-none md:p-3"
                style={imageFrameStyle}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 45vw, (max-width: 1024px) 40vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    quality={90}
                    priority={false}
                  />
                  {isDark && (
                    <div className="pointer-events-none absolute inset-0 z-10 bg-black/5 mix-blend-multiply" />
                  )}
                </div>
              </div>
            </button>
          </div>

          <div
            className="w-[55%] md:w-5/12"
            style={{ color: isDark ? lightBg : "var(--color-welcome-text)" }}
          >
            {title &&
              (isSlide ? (
                <h2
                  className={`${theSeasons.className} mb-3 text-lg uppercase leading-tight tracking-[0.08em] sm:text-2xl md:mb-6 md:text-3xl md:tracking-[0.12em] lg:text-4xl`}
                  style={{ color: isDark ? lightBg : "var(--color-welcome-navy)" }}
                >
                  {title}
                </h2>
              ) : (
                <motion.h2
                  key={`${title}-title`}
                  initial={false}
                  className={`${theSeasons.className} mb-3 text-lg uppercase leading-tight tracking-[0.08em] transition-all delay-500 duration-1000 sm:text-2xl md:mb-6 md:text-3xl md:tracking-[0.12em] lg:text-4xl ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ color: isDark ? lightBg : "var(--color-welcome-navy)" }}
                >
                  {title}
                </motion.h2>
              ))}

            {isSlide ? (
              <div className="font-goudy-italic space-y-3 text-[0.75rem] leading-[1.62] sm:space-y-4 sm:text-[0.8125rem] sm:leading-[1.65] md:space-y-6 md:text-[0.84375rem]">
                {text}
              </div>
            ) : (
              <motion.div
                key={`${title}-text`}
                initial={false}
                className={`font-goudy-italic space-y-3 text-[0.75rem] leading-[1.62] transition-all delay-700 duration-1000 sm:space-y-4 sm:text-[0.8125rem] sm:leading-[1.65] md:space-y-6 md:text-[0.84375rem] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {text}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="story-image-lightbox"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-black/78 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={imageAlt}
              className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg"
              initial={{
                opacity: 0,
                scale: 0.72,
                y: 56,
                rotate: expandedRotation,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.86,
                y: 28,
                rotate: expandedRotation * 0.5,
                filter: "blur(4px)",
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="absolute -right-2 -top-2 z-20 rounded-full border border-white/20 bg-black/55 p-2 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-black/70 sm:-right-3 sm:-top-3 sm:p-2.5"
                aria-label="Close photo"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div
                className="w-full p-2 sm:p-3 md:p-4"
                style={{
                  ...imageFrameStyle,
                  boxShadow:
                    "0 28px 64px color-mix(in srgb, black 45%, transparent), 0 12px 24px color-mix(in srgb, black 25%, transparent)",
                }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 90vw, 512px"
                    className="object-cover"
                    quality={95}
                    priority
                  />
                  {isDark && (
                    <div className="pointer-events-none absolute inset-0 z-10 bg-black/5 mix-blend-multiply" />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
