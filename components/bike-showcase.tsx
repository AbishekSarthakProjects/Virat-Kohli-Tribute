"use client"

import { useState, useEffect } from "react"
import { InteractiveClean } from "@/components/interactive-clean"
import { motion } from "framer-motion"

interface AnimatedCounterProps {
  target: number
  label: string
  unit?: string
}

function AnimatedCounter({ target, label, unit = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-right">
      <div className="text-xs uppercase tracking-wider text-black/60 mb-2">{label}</div>
      <div className="text-6xl md:text-8xl font-black text-black">
        {count}
        {unit}
      </div>
    </div>
  )
}

export default function BikeShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#050303] px-6 pb-5 md:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
          <div className="flex flex-col justify-center items-start lg:items-end lg:pr-12 order-2 lg:order-1">
            <div className="relative">
              {/* Large decorative quote */}
              <div
                className="simteste pointer-events-none absolute -left-16 -top-20 select-none text-[200px] leading-none text-[#B80F1A] opacity-30 lg:-left-24 lg:-top-32 lg:text-[280px]"
                style={{ fontFamily: "var(--font-alex-brush), cursive" }}
              >
                &ldquo;
              </div>

              {/* Main quote with improved spacing and hierarchy */}
              <blockquote className="relative z-10 max-w-xl">
                <p className="mb-8 text-4xl font-black uppercase leading-[1.1] text-vk-text-light md:text-5xl lg:text-6xl">
                  <span className="block mb-2">SELF-BELIEF</span>
                  <span className="block mb-2">AND HARD WORK</span>
                  <span className="-ml-1 block font-brier text-5xl normal-case text-[#D1AB3E] md:text-6xl lg:text-8xl">
                    WILL ALWAYS
                  </span>
                  <span className="block mt-2">EARN YOU</span>
                  <span className="block">SUCCESS.</span>
                </p>
              </blockquote>

              {/* Author attribution */}
              <div className="mt-4">
                <p className="font-mono text-base font-medium text-[#D1AB3E] md:text-lg">Virat Kohli</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] md:aspect-square max-w-lg mx-auto lg:mx-0 order-1 lg:order-2"
          >
            {/* Decorative Corners (Green brackets) 
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#CFFF04] rounded-tl-3xl z-20" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-[#CFFF04] rounded-tr-3xl z-20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-[#CFFF04] rounded-bl-3xl z-20" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#CFFF04] rounded-br-3xl z-20" />
            */}
            <InteractiveClean />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
