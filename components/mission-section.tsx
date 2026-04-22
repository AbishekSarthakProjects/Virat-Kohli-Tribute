"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, useInView } from "framer-motion"

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [signatureDrawn, setSignatureDrawn] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1.2, 1, 0.2])
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, -200])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 1, 1, 0])

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setSignatureDrawn(true), 800)
    }
  }, [isInView])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight = rect.height
        const scrolled = -rect.top
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getTextTransform = () => {
    if (scrollProgress < 0.2) {
      const progress = scrollProgress / 0.2
      return {
        opacity: progress,
        transform: `translateX(${(1 - progress) * -50}px)`,
      }
    }
    return {
      opacity: 1,
      transform: "translateX(0px)",
    }
  }

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center bg-[#050303] py-24 text-vk-text-light"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/*
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 border-2 border-white/20 rounded-full px-6 py-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-vk-red">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-bold uppercase tracking-wider">TEAM LORENZO SINCE 2020</span>
          </div>
        </div>
        */}

          <div className="relative h-32 flex items-center justify-center mt-16">
            {/* Cricket bat + ball icon */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#D1AB3E]"
              aria-hidden="true"
            >
              {/* Bat */}
              <rect
                x="38"
                y="6"
                width="10"
                height="36"
                rx="2"
                transform="rotate(30 38 6)"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              {/* Handle */}
              <rect
                x="26"
                y="36"
                width="4"
                height="14"
                rx="1.5"
                transform="rotate(30 26 36)"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              {/* Ball */}
              <circle cx="16" cy="46" r="7" stroke="currentColor" strokeWidth="2.5" />
              <path d="M9 46 Q 16 41 23 46" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M9 46 Q 16 51 23 46" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        
        <div className="text-center">
          <h2 className="text-balance text-4xl font-black uppercase leading-[1.1] md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="font-brier text-7xl leading-[1.1] text-[#D1AB3E] md:text-8xl">SELF-BELIEF</span> AND
            <br />
            HARD WORK WILL <span className="font-brier leading-[1.1] text-[#B80F1A]">ALWAYS</span>
            <br />
            EARN YOU SUCCESS.
            <br />
            THERE IS NO <span className="font-brier leading-[1.1] text-[#D1AB3E]">SUBSTITUTE</span>
            <br />
            FOR DISCIPLINE AND
            <br />
            CONSISTENCY.
          </h2>
        </div>

        {/* Signature animation */}
        {/*
        <div className="relative h-32 flex items-center justify-center mt-16">
          
          <svg width="400" height="150" viewBox="0 0 400 150" className="w-full max-w-md">
            <motion.path
              d="M30,75 Q60,40 110,75 T220,75 Q250,95 310,65 Q340,45 370,75 M200,90 Q220,110 250,90"
              fill="none"
              stroke="#c8f550"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={signatureDrawn ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
        */}
      </div>
    </section>
  )
}
