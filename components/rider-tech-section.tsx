"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Zap, Wind, Layers, Activity } from "lucide-react"

interface TechStat {
  label: string
  value: string
}

interface Hotspot {
  id: number
  x: number
  y: number
  label: string
  description: string
  category: "protection" | "performance" | "comfort" | "durability"
  stats: TechStat[]
}

const hotspots: Hotspot[] = [
  {
    id: 1,
    x: 50,
    y: 14,
    label: "Match Helmet",
    description:
      "Titanium grille lid customised with the Tricolour and the No. 18, worn through long Test innings since the 2018 tour of England.",
    category: "protection",
    stats: [
      { label: "Brand", value: "Masuri Vision" },
      { label: "Weight", value: "830g" },
      { label: "Standard", value: "BS 7928:2013" },
    ],
  },
  {
    id: 2,
    x: 36,
    y: 50,
    label: "MRF Genius Grand Edition",
    description:
      "Grade 1+ English willow, hand-picked for density. Mid-to-high sweet spot tuned for Kohli's trademark cover drive.",
    category: "performance",
    stats: [
      { label: "Willow", value: "Grade 1+ EW" },
      { label: "Weight", value: "1180g" },
      { label: "Edge", value: "40mm" },
    ],
  },
  {
    id: 3,
    x: 62,
    y: 55,
    label: "Batting Gloves",
    description:
      "Vented twin-layer gloves with sausage-finger protection, engineered to keep a loose, whippy grip through long Test knocks.",
    category: "comfort",
    stats: [
      { label: "Fit", value: "Pro Tight" },
      { label: "Palm", value: "Pittards Leather" },
    ],
  },
  {
    id: 4,
    x: 52,
    y: 82,
    label: "RCB Spikes",
    description:
      "Lightweight cricket boots in Royal Challengers Bengaluru red and black. Eight-stud TPU outsole for explosive running between the wickets.",
    category: "performance",
    stats: [
      { label: "Weight", value: "290g" },
      { label: "Studs", value: "8 TPU" },
      { label: "Drop", value: "Zero" },
    ],
  },
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "protection":
      return <Shield className="w-4 h-4 text-vk-red" />
    case "performance":
      return <Zap className="w-4 h-4 text-vk-red" />
    case "comfort":
      return <Wind className="w-4 h-4 text-vk-red" />
    case "durability":
      return <Layers className="w-4 h-4 text-vk-red" />
    default:
      return <Activity className="w-4 h-4 text-vk-red" />
  }
}

interface HotspotPointProps {
  spot: Hotspot
  isActive: boolean
  onHover: () => void
  onLeave: () => void
}

function HotspotPoint({ spot, isActive, onHover, onLeave }: HotspotPointProps) {
  return (
    <div
      style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onHover}
    >
      <div className="relative flex items-center justify-center w-12 h-12">
        <motion.div
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
          className="absolute inset-0 bg-vk-red/40 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeOut", delay: 0.2 }}
          className="absolute inset-0 bg-vk-red/30 rounded-full"
        />
        <div className="relative h-3 w-3 rounded-full bg-[#D1AB3E] shadow-[0_0_15px_rgba(155,116,24,0.85)] ring-2 ring-black/20" />
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full mt-4 left-1/2 -translate-x-1/2 z-50 w-[320px] md:w-[360px]"
          >
            {/* Connector Line */}
            <div className="absolute -top-4 left-1/2 w-px h-4 bg-gradient-to-b from-transparent to-vk-red/50" />
            <div className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#D1AB3E] shadow-[0_0_10px_#D1AB3E]" />

            {/* Card Container - Glassmorphism & Tech Borders */}
            <div className="relative overflow-hidden rounded-lg border border-[#D1AB3E]/20 bg-[#050303]/88 shadow-2xl backdrop-blur-xl">
              {/* Decorative Tech Lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-vk-red/50 to-transparent opacity-50" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-vk-red/5 blur-[50px]" />

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(spot.category)}
                  <span className="text-xs font-bold uppercase text-vk-red opacity-80">
                    {spot.category}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-white/40">SYS.ID.{spot.id.toString().padStart(3, "0")}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 font-[family-name:var(--font-oswald)] text-xl font-bold uppercase text-white">
                  {spot.label}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5 border-l-2 border-vk-red/30 pl-3">
                  {spot.description}
                </p>

                {/* Tech Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {spot.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 rounded px-3 py-2 border border-white/5 hover:border-vk-red/30 transition-colors group"
                    >
                      <div className="mb-1 font-brier text-[10px] uppercase text-white/40 transition-colors group-hover:text-vk-red/70">
                        {stat.label}
                      </div>
                      <div className="text-sm font-medium text-white font-mono">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Decor */}
              <div className="absolute bottom-2 right-2 flex gap-0.5 opacity-30">
                <div className="w-1 h-1 bg-vk-red rounded-full" />
                <div className="w-1 h-1 bg-white rounded-full" />
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function RiderTechSection() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  return (
    <section id="tech-specs" className="relative mb-0 min-h-screen overflow-visible bg-[#050303] px-6 py-0 pb-24 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 pt-24">
          <h2 className="text-5xl font-black uppercase leading-tight md:text-7xl lg:text-8xl">
            <span className="block font-sans leading-[0.85] text-white">THE</span>
            <span className="block font-brier text-8xl text-[#D1AB3E] md:text-9xl">KIT BAG</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base text-white/68 md:text-base">
            Every piece of gear Virat carries into battle. Hover over the points to see the helmet, bat, gloves and spikes that define the No. 18.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2]">
            <Image src="/images/kohli-batting.jpg" alt="Virat Kohli batting stance with full kit" fill className="object-contain" priority />

            {/* Hotspots overlay */}
            {hotspots.map((spot) => (
              <HotspotPoint
                key={spot.id}
                spot={spot}
                isActive={activeHotspot === spot.id}
                onHover={() => setActiveHotspot(spot.id)}
                onLeave={() => setActiveHotspot(null)}
              />
            ))}
          </div>

          {/* Mobile instruction hint */}
          <div className="md:hidden text-center mt-8 text-gray-500 text-sm">
            Tap on the pulsating points to see the information
          </div>
        </div>
      </div>
    </section>
  )
}
