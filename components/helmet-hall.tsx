"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const milestones = [
  {
    id: 1,
    title: "ODI Debut",
    year: "2008",
    image: "/images/kohli-2015.jpg",
    tag: "vs Sri Lanka",
  },
  {
    id: 2,
    title: "U-19 World Cup",
    year: "2008",
    image: "/images/kohli-delhi.jpg",
    tag: "India · Captain",
  },
  {
    id: 3,
    title: "Test Debut",
    year: "2011",
    image: "/images/kohli-fielding.jpg",
    tag: "Kingston",
  },
  {
    id: 4,
    title: "ICC World Cup",
    year: "2011",
    image: "/images/kohli-2015.jpg",
    tag: "Champion",
  },
  {
    id: 5,
    title: "First IPL Title",
    year: "2011",
    image: "/images/kohli-ipl.jpg",
    tag: "Orange Cap chase",
  },
  {
    id: 6,
    title: "Champions Trophy",
    year: "2013",
    image: "/images/kohli-june.jpg",
    tag: "Champion",
  },
  {
    id: 7,
    title: "Test Captaincy",
    year: "2014",
    image: "/images/kohli-captain.jpg",
    tag: "Adelaide",
  },
  {
    id: 8,
    title: "973 Runs in IPL",
    year: "2016",
    image: "/images/kohli-rcb.jpg",
    tag: "RCB · Season record",
  },
  {
    id: 9,
    title: "Sir Garfield Sobers Trophy",
    year: "2017",
    image: "/images/kohli-padma.jpg",
    tag: "ICC Cricketer of the Year",
  },
  {
    id: 10,
    title: "Padma Shri",
    year: "2017",
    image: "/images/kohli-pmo.jpg",
    tag: "Government of India",
  },
  {
    id: 11,
    title: "Rajiv Gandhi Khel Ratna",
    year: "2018",
    image: "/images/kohli-delhi.jpg",
    tag: "Highest sporting honour",
  },
  {
    id: 12,
    title: "Test No. 1 Ranking",
    year: "2018",
    image: "/images/kohli-field.jpg",
    tag: "ICC Test Batter",
  },
  {
    id: 13,
    title: "70+ Int'l Centuries",
    year: "2019",
    image: "/images/kohli-century.jpg",
    tag: "Across formats",
  },
  {
    id: 14,
    title: "Fastest to 8000 ODI Runs",
    year: "2017",
    image: "/images/kohli-cwc.jpg",
    tag: "175 innings",
  },
  {
    id: 15,
    title: "Fastest to 12000 ODI Runs",
    year: "2023",
    image: "/images/kohli-cwc3.jpg",
    tag: "242 innings",
  },
  {
    id: 16,
    title: "Wisden Cricketer of the Decade",
    year: "2020",
    image: "/images/kohli-captain2.jpg",
    tag: "2010s",
  },
  {
    id: 17,
    title: "Player of the Tournament",
    year: "2023",
    image: "/images/kohli-portrait.jpg",
    tag: "ICC World Cup 2023",
  },
  {
    id: 18,
    title: "T20 World Cup",
    year: "2024",
    image: "/images/kohli-batting.jpg",
    tag: "Champion · India",
  },
  {
    id: 19,
    title: "50th ODI Century",
    year: "2023",
    image: "/images/kohli-cwc5.jpg",
    tag: "vs New Zealand · WC SF",
  },
  {
    id: 20,
    title: "IPL 2024 Orange Cap",
    year: "2024",
    image: "/images/kohli-cwc4.jpg",
    tag: "741 runs · RCB",
  },
]

export default function HelmetHall() {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null)

  return (
    <section id="helmets" className="relative min-h-screen bg-[#070303] px-6 py-24 text-white md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black uppercase md:text-6xl lg:text-7xl">
            <span className="text-white">TROPHY</span>
            <br />
            <span className="font-brier text-7xl text-[#D1AB3E] md:text-8xl">HALL OF FAME</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 mt-6 max-w-2xl">
            From a precocious U-19 World Cup win in 2008 to lifting the T20 World Cup in 2024, every milestone that
            built the Kohli legend.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredMilestone(milestone.id)}
              onMouseLeave={() => setHoveredMilestone(null)}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#050303]
                           border border-[#2b2a29]
                           group-hover:border-[#D1AB3E]
                           group-hover:shadow-2xl
                           group-hover:shadow-[#D1AB3E]/20
                           transition-all duration-300"
              >
                <Image
                  src={milestone.image || "/placeholder.svg"}
                  alt={milestone.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050303] via-[#050303]/45 to-transparent" />

                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-[#B80F1A] px-2.5 py-1 text-[10px] font-bold uppercase text-white shadow-lg">
                    {milestone.year}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="mb-1 text-[10px] font-bold uppercase text-[#D1AB3E] md:text-xs">
                    {milestone.tag}
                  </p>
                  <p className="text-sm md:text-base font-black text-white leading-tight font-[family-name:var(--font-oswald)] uppercase">
                    {milestone.title}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
