"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const scheduleData = [
  {
    id: 1,
    round: "01",
    location: "ADELAIDE",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "22 NOV 24",
    finish: "100*",
    fastestLap: "143.2",
    image: "/images/kohli-captain.jpg",
  },
  {
    id: 2,
    round: "02",
    location: "BRISBANE",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "14 DEC 24",
    finish: "76",
    fastestLap: "68.1",
    image: "/images/kohli-cwc.jpg",
  },
  {
    id: 3,
    round: "03",
    location: "MELBOURNE",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "26 DEC 24",
    finish: "45",
    fastestLap: "52.3",
    image: "/images/kohli-cwc3.jpg",
  },
  {
    id: 4,
    round: "04",
    location: "SYDNEY",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "3 JAN 25",
    finish: "17",
    fastestLap: "41.5",
    image: "/images/kohli-fielding.jpg",
  },
  {
    id: 5,
    round: "05",
    location: "KARACHI",
    flagImage: "/images/flags/flag-Pakistan.svg",
    date: "23 FEB 25",
    finish: "84",
    fastestLap: "101.2",
    image: "/images/kohli-batting.jpg",
  },
  {
    id: 6,
    round: "06",
    location: "DUBAI",
    flagImage: "/images/flags/flag-Saudi-Arabia.svg",
    date: "2 MAR 25",
    finish: "100*",
    fastestLap: "111.8",
    image: "/images/kohli-century.jpg",
  },
  {
    id: 7,
    round: "07",
    location: "BENGALURU",
    flagImage: "/images/flags/flag-India.svg",
    date: "22 MAR 25",
    finish: "95",
    fastestLap: "136.9",
    image: "/images/kohli-rcb.jpg",
  },
  {
    id: 8,
    round: "08",
    location: "MUMBAI",
    flagImage: "/images/flags/flag-India.svg",
    date: "28 MAR 25",
    finish: "59",
    fastestLap: "129.4",
    image: "/images/kohli-captain2.jpg",
  },
  {
    id: 9,
    round: "09",
    location: "KOLKATA",
    flagImage: "/images/flags/flag-India.svg",
    date: "3 APR 25",
    finish: "73",
    fastestLap: "146.0",
    image: "/images/kohli-cwc4.jpg",
  },
  {
    id: 10,
    round: "10",
    location: "CHENNAI",
    flagImage: "/images/flags/flag-India.svg",
    date: "14 APR 25",
    finish: "12",
    fastestLap: "48.0",
    image: "/images/kohli-field.jpg",
  },
  {
    id: 11,
    round: "11",
    location: "HYDERABAD",
    flagImage: "/images/flags/flag-India.svg",
    date: "23 APR 25",
    finish: "67*",
    fastestLap: "139.5",
    image: "/images/kohli-june.jpg",
  },
  {
    id: 12,
    round: "12",
    location: "DELHI",
    flagImage: "/images/flags/flag-India.svg",
    date: "5 MAY 25",
    finish: "113",
    fastestLap: "132.5",
    image: "/images/kohli-delhi.jpg",
  },
  {
    id: 13,
    round: "13",
    location: "LORD'S",
    flagImage: "/images/flags/flag-England.svg",
    date: "10 JUL 25",
    finish: "149",
    fastestLap: "62.8",
    image: "/images/kohli-2015.jpg",
  },
  {
    id: 14,
    round: "14",
    location: "OVAL",
    flagImage: "/images/flags/flag-England.svg",
    date: "31 JUL 25",
    finish: "35",
    fastestLap: "47.2",
    image: "/images/kohli-field.jpg",
  },
  {
    id: 15,
    round: "15",
    location: "CAPE TOWN",
    flagImage: "/images/flags/flag-South-Africa.svg",
    date: "3 OCT 25",
    finish: "82",
    fastestLap: "96.4",
    image: "/images/kohli-captain.jpg",
  },
  {
    id: 16,
    round: "16",
    location: "COLOMBO",
    flagImage: "/images/flags/flag-Sri-Lanka.svg",
    date: "24 OCT 25",
    finish: "101*",
    fastestLap: "118.8",
    image: "/images/kohli-century.jpg",
  },
  {
    id: 17,
    round: "17",
    location: "DHAKA",
    flagImage: "/images/flags/flag-Bangladesh.svg",
    date: "8 NOV 25",
    finish: "54",
    fastestLap: "84.4",
    image: "/images/kohli-cwc.jpg",
  },
  {
    id: 18,
    round: "18",
    location: "AUCKLAND",
    flagImage: "/images/flags/flag-New-Zealand.svg",
    date: "30 NOV 25",
    finish: "88",
    fastestLap: "91.7",
    image: "/images/kohli-cwc3.jpg",
  },
]

// Function to get a random trophy (1-9) based on an ID to keep it consistent per render
const getRandomTrophy = (id: number | string) => {
  // Simple hash function to get a consistent number from string/number
  const val = typeof id === "string" ? Number.parseInt(id.replace(/\D/g, "") || "0") : id
  // Use modulo 9 + 1 to get 1-9
  const trophyNum = (val % 9) + 1
  return `/images/trofeus/trofeu${trophyNum}.svg`
}

export function InteractiveSchedule() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <div
      id="calendar"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-[#050303] py-32"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="w-full">
          <div className="mb-4 grid grid-cols-12 gap-4 px-4 text-[10px] font-bold uppercase text-white/30 md:text-xs">
            <div className="col-span-1">Match</div>
            <div className="col-span-4">Venue</div>
            <div className="col-span-3 text-center">When</div>
            <div className="col-span-2 text-center">Score</div>
            <div className="col-span-2 text-right">Strike Rate</div>
          </div>

          {scheduleData.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredEvent(item.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              className="group relative transition-all duration-300"
            >
              <div className="grid grid-cols-12 items-center gap-4 border-t border-white/10 px-4 py-4 transition-colors duration-300 group-hover:border-transparent group-hover:bg-[#B80F1A] md:py-6">
                <div className="col-span-1 relative">
                  <span className="relative z-10 font-[family-name:var(--font-oswald)] text-3xl font-bold text-white/40 opacity-100 group-hover:text-white md:text-5xl">
                    {item.round}
                  </span>
                  
                  <div className="pointer-events-none absolute left-0 top-1/2 z-20 h-6 w-12 -translate-y-1/2 text-[#D1AB3E] transition-colors group-hover:text-white md:h-8 md:w-16">
                    <img
                      src="/images/trass.svg"
                      alt=""
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  
                </div>

                <div className="col-span-4 flex items-center gap-3">
                  <Image
                    src={item.flagImage || "/placeholder.svg"}
                    alt={`${item.location} flag`}
                    width={40}
                    height={30}
                    className="w-8 h-6 md:w-10 md:h-8 object-cover rounded-sm shadow-sm"
                  />
                  <span className="font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase leading-none text-white transition-colors group-hover:text-white md:text-5xl">
                    {item.location}
                  </span>
                </div>

                <div className="col-span-3 text-center font-[family-name:var(--font-oswald)] text-xl font-bold uppercase text-white/80 transition-colors group-hover:text-white md:text-4xl">
                  {item.date}
                </div>

                <div className="col-span-2 text-center flex justify-center items-center gap-2 md:gap-3">
                  <Image
                    src={getRandomTrophy(item.id + item.location) || "/placeholder.svg"}
                    alt="Trophy"
                    width={32}
                    height={32}
                    className="h-8 w-8 transition-all md:h-10 md:w-10"
                  />
                  <span className="font-[family-name:var(--font-oswald)] text-2xl font-bold italic text-white group-hover:text-white md:text-4xl">
                    {item.finish}
                  </span>
                </div>

                <div className="col-span-2 text-right font-[family-name:var(--font-oswald)] text-lg font-bold text-white group-hover:text-white md:text-2xl">
                  {item.fastestLap}
                  <span className="text-xs align-top ml-1">SR</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 w-[300px] md:w-[400px] aspect-[3/4] mix-blend-normal">
        <AnimatePresence mode="wait">
          {hoveredEvent && (
            <motion.div
              key={hoveredEvent}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
              transition={{ duration: 0.3, ease: "backOut" }}
                className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src={scheduleData.find((d) => d.id === hoveredEvent)?.image || ""}
                alt="Match preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-bold uppercase text-[#D1AB3E]">Match View</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
