"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import InteractivePortrait from "./interactive-portrait"
import SignatureMarqueeSection from "./signature-marquee-section"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const portraitScale = useTransform(smoothProgress, [0, 0.28, 0.62], [0.9, 0.68, 0.44])
  const portraitX = useTransform(smoothProgress, [0, 0.4, 0.72], ["0%", "10%", "0%"])
  const portraitY = useTransform(smoothProgress, [0, 0.55, 0.85, 1], ["0%", "-5%", "-5%", "-100%"])
  const headlineY = useTransform(smoothProgress, [0, 0.42, 0.85, 1], ["0%", "-16%", "-16%", "-100%"])
  const headlineScale = useTransform(smoothProgress, [0, 0.42], [1, 0.88])

  const textOpacity = useTransform(smoothProgress, [0.14, 0.34, 0.74, 0.9], [0, 1, 1, 0])
  const revealLabelOpacity = useTransform(smoothProgress, [0, 0.18, 0.78], [1, 0.8, 0])

  const exitY = useTransform(smoothProgress, [0.85, 1], ["0%", "-100%"])
  const exitOpacity = useTransform(smoothProgress, [0.9, 1], [1, 0])

  return (
    <section id="home" ref={containerRef} className="relative h-[300vh] bg-[#050303]">
      <div className="sticky top-0 flex h-[100dvh] min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#050303]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(108,13,18,0.5),rgba(8,6,7,0)_42%),linear-gradient(180deg,rgba(8,6,7,0.08),rgba(8,6,7,0.96))]" />
        <div className="absolute inset-x-0 top-16 z-20 h-px bg-gradient-to-r from-transparent via-[#D1AB3E]/70 to-transparent" />
        <div className="absolute left-4 top-24 z-20 hidden flex-col gap-2 text-[10px] font-black uppercase text-[#D1AB3E] md:flex">
          <span>2026</span>
          <span className="h-12 w-px bg-[#B80F1A]" />
          <span className="[writing-mode:vertical-rl]">Chase mode</span>
        </div>
        <motion.div
          className="pointer-events-none absolute left-5 top-[22dvh] z-20 max-w-[360px] text-white md:left-10 lg:left-16"
          style={{ y: headlineY, scale: headlineScale, opacity: exitOpacity, transformOrigin: "left top" }}
        >
          <p className="mb-3 text-[11px] font-black uppercase text-[#D1AB3E]">India since 2008</p>
          <h1 className="font-brier text-3xl uppercase leading-[0.86] text-white md:text-5xl lg:text-6xl xl:text-7xl">
            Virat
            <span className="block text-[#B80F1A]">Kohli</span>
          </h1>
          <p className="mt-5 max-w-xs text-sm font-bold uppercase leading-relaxed text-white/70 md:text-base">
            No. 18. Chase architect. Red, black and gold under pressure.
          </p>
        </motion.div>
        <motion.div
          className="absolute bottom-5 right-4 z-20 hidden text-right text-[10px] font-black uppercase text-white/62 md:block"
          style={{ opacity: revealLabelOpacity }}
        >
          <div className="text-[#D1AB3E]">Move cursor to reveal helmet</div>
          <div>Back to scroll</div>
        </motion.div>
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{
            y: exitY,
            opacity: exitOpacity,
          }}
        >
          <motion.div
            className="flex h-full w-full items-center justify-center opacity-0"
            style={{ opacity: textOpacity }}
          >
            <SignatureMarqueeSection />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10"
          style={{
            scale: portraitScale,
            x: portraitX,
            y: portraitY,
            opacity: exitOpacity,
          }}
        >
          <InteractivePortrait />
        </motion.div>
      </div>
    </section>
  )
}
