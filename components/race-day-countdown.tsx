"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function RaceDayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to next race (simulated)
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7) // 7 days from now
    targetDate.setHours(14, 0, 0, 0)

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-[#070303] py-20 md:py-32">
      {/* Background Gradient - Radial center gray to dark #111112 */}
      <div className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px]">
        {/* Countdown Numbers */}
        <div className="flex flex-wrap justify-center gap-1 md:gap-4 relative z-20">
          <TimeUnit value={timeLeft.days} label="D" />
          <TimeUnit value={timeLeft.hours} label="H" />
          <TimeUnit value={timeLeft.minutes} label="M" />
          <TimeUnit value={timeLeft.seconds} label="S" />
        </div>

        {/* Match Day Overlay - Positioned absolute center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
        >
          <div className="w-[85%] md:w-[55%] lg:w-[45%] max-w-[600px] -rotate-6">
            <div className="relative flex flex-col items-center justify-center rounded-lg border-4 border-[#D1AB3E] bg-[#B80F1A] px-8 py-6 shadow-2xl md:px-12 md:py-10">
              <span className="font-[family-name:var(--font-oswald)] text-xs uppercase text-[#D1AB3E] md:text-sm">
                RCB · CHINNASWAMY
              </span>
              <span className="font-brier text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white uppercase">
                Match Day
              </span>
              <span className="mt-1 font-[family-name:var(--font-oswald)] text-xs uppercase text-[#D1AB3E] md:text-sm">
                Ee Sala Cup Namdu
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-row items-baseline">
      <span className="font-oswald text-[5rem] font-bold uppercase leading-none text-[#4C3B25] md:text-[8rem] lg:text-[12rem]">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="ml-1 font-oswald text-[5rem] font-bold uppercase leading-none text-[#B80F1A] md:text-[8rem] lg:text-[12rem]">
        {label}
      </span>
    </div>
  )
}
