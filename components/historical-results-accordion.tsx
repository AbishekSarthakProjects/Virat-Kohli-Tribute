"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface MatchResult {
  round: string
  location: string
  flagImage: string
  date: string
  finish: string
  fastestLap: string
}

interface YearData {
  year: string
  podiums: string
  bestFinish: string
  results: MatchResult[]
}

const historicalData: YearData[] = [
  {
    year: "2023",
    podiums: "08",
    bestFinish: "101*",
    results: [
      {
        round: "01",
        location: "MELBOURNE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "22 OCT 23",
        finish: "85",
        fastestLap: "102.4",
      },
      {
        round: "02",
        location: "AHMEDABAD",
        flagImage: "/images/flags/flag-India.svg",
        date: "5 NOV 23",
        finish: "88*",
        fastestLap: "99.1",
      },
      {
        round: "03",
        location: "KOLKATA",
        flagImage: "/images/flags/flag-India.svg",
        date: "15 NOV 23",
        finish: "117",
        fastestLap: "101.7",
      },
      {
        round: "04",
        location: "AHMEDABAD",
        flagImage: "/images/flags/flag-India.svg",
        date: "19 NOV 23",
        finish: "54",
        fastestLap: "70.9",
      },
      {
        round: "05",
        location: "BENGALURU",
        flagImage: "/images/flags/flag-India.svg",
        date: "21 APR 23",
        finish: "61*",
        fastestLap: "139.2",
      },
      {
        round: "06",
        location: "HYDERABAD",
        flagImage: "/images/flags/flag-India.svg",
        date: "18 MAY 23",
        finish: "100*",
        fastestLap: "147.0",
      },
      {
        round: "07",
        location: "CAPE TOWN",
        flagImage: "/images/flags/flag-South-Africa.svg",
        date: "3 JAN 23",
        finish: "49",
        fastestLap: "61.2",
      },
      {
        round: "08",
        location: "DHAKA",
        flagImage: "/images/flags/flag-Bangladesh.svg",
        date: "4 DEC 22",
        finish: "79",
        fastestLap: "94.1",
      },
    ],
  },
  {
    year: "2018",
    podiums: "11",
    bestFinish: "200",
    results: [
      {
        round: "01",
        location: "CENTURION",
        flagImage: "/images/flags/flag-South-Africa.svg",
        date: "13 JAN 18",
        finish: "153",
        fastestLap: "60.2",
      },
      {
        round: "02",
        location: "JOHANNESBURG",
        flagImage: "/images/flags/flag-South-Africa.svg",
        date: "24 JAN 18",
        finish: "54*",
        fastestLap: "52.4",
      },
      {
        round: "03",
        location: "BIRMINGHAM",
        flagImage: "/images/flags/flag-England.svg",
        date: "1 AUG 18",
        finish: "149",
        fastestLap: "63.9",
      },
      {
        round: "04",
        location: "NOTTINGHAM",
        flagImage: "/images/flags/flag-England.svg",
        date: "18 AUG 18",
        finish: "97",
        fastestLap: "47.1",
      },
      {
        round: "05",
        location: "PERTH",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "14 DEC 18",
        finish: "123",
        fastestLap: "53.2",
      },
      {
        round: "06",
        location: "MELBOURNE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "26 DEC 18",
        finish: "82",
        fastestLap: "47.9",
      },
      {
        round: "07",
        location: "ADELAIDE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "6 DEC 18",
        finish: "34",
        fastestLap: "39.5",
      },
      {
        round: "08",
        location: "GUWAHATI",
        flagImage: "/images/flags/flag-India.svg",
        date: "21 OCT 18",
        finish: "157*",
        fastestLap: "119.8",
      },
    ],
  },
  {
    year: "2016",
    podiums: "16",
    bestFinish: "235",
    results: [
      {
        round: "01",
        location: "BENGALURU",
        flagImage: "/images/flags/flag-India.svg",
        date: "14 MAY 16",
        finish: "113",
        fastestLap: "156.1",
      },
      {
        round: "02",
        location: "MUMBAI",
        flagImage: "/images/flags/flag-India.svg",
        date: "18 MAY 16",
        finish: "108*",
        fastestLap: "136.1",
      },
      {
        round: "03",
        location: "DELHI",
        flagImage: "/images/flags/flag-India.svg",
        date: "27 MAY 16",
        finish: "54",
        fastestLap: "124.0",
      },
      {
        round: "04",
        location: "MOHALI",
        flagImage: "/images/flags/flag-India.svg",
        date: "27 MAR 16",
        finish: "82*",
        fastestLap: "136.6",
      },
      {
        round: "05",
        location: "BENGALURU",
        flagImage: "/images/flags/flag-India.svg",
        date: "23 MAR 16",
        finish: "90*",
        fastestLap: "147.5",
      },
      {
        round: "06",
        location: "MOHALI",
        flagImage: "/images/flags/flag-India.svg",
        date: "19 MAR 16",
        finish: "55*",
        fastestLap: "122.2",
      },
      {
        round: "07",
        location: "NORTH SOUND",
        flagImage: "/images/flags/flag-West-Indies.svg",
        date: "21 JUL 16",
        finish: "200",
        fastestLap: "57.0",
      },
      {
        round: "08",
        location: "NAGPUR",
        flagImage: "/images/flags/flag-India.svg",
        date: "20 OCT 16",
        finish: "154*",
        fastestLap: "92.8",
      },
    ],
  },
  {
    year: "2011",
    podiums: "02",
    bestFinish: "112",
    results: [
      {
        round: "01",
        location: "MUMBAI",
        flagImage: "/images/flags/flag-India.svg",
        date: "2 APR 11",
        finish: "35",
        fastestLap: "66.0",
      },
      {
        round: "02",
        location: "BENGALURU",
        flagImage: "/images/flags/flag-India.svg",
        date: "27 FEB 11",
        finish: "8",
        fastestLap: "50.0",
      },
      {
        round: "03",
        location: "NAGPUR",
        flagImage: "/images/flags/flag-India.svg",
        date: "13 MAR 11",
        finish: "100*",
        fastestLap: "102.0",
      },
      {
        round: "04",
        location: "PORT OF SPAIN",
        flagImage: "/images/flags/flag-West-Indies.svg",
        date: "13 JUN 11",
        finish: "81",
        fastestLap: "74.3",
      },
      {
        round: "05",
        location: "KINGSTON",
        flagImage: "/images/flags/flag-West-Indies.svg",
        date: "20 JUN 11",
        finish: "30",
        fastestLap: "42.3",
      },
      {
        round: "06",
        location: "DOMINICA",
        flagImage: "/images/flags/flag-West-Indies.svg",
        date: "6 JUL 11",
        finish: "30",
        fastestLap: "52.6",
      },
      {
        round: "07",
        location: "VISAKHAPATNAM",
        flagImage: "/images/flags/flag-India.svg",
        date: "2 DEC 11",
        finish: "117",
        fastestLap: "107.3",
      },
      {
        round: "08",
        location: "DELHI",
        flagImage: "/images/flags/flag-India.svg",
        date: "5 DEC 11",
        finish: "107",
        fastestLap: "95.5",
      },
    ],
  },
]

const getRandomTrophy = (id: number | string) => {
  const val = typeof id === "string" ? Number.parseInt(id.replace(/\D/g, "") || "0") : id
  const trophyNum = (val % 9) + 1
  return `/images/trofeus/trofeu${trophyNum}.svg`
}

export function HistoricalResultsAccordion() {
  const [activeYear, setActiveYear] = useState<string | null>("2023")

  return (
    <div id="results" className="w-full bg-[#050303] px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="flex flex-col">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase leading-none text-white md:text-6xl">
              CAREER
            </h2>
            <h1 className="mt-2.5 font-brier text-5xl leading-none text-[#D1AB3E] md:-mt-2 md:text-7xl">
              All Results
            </h1>
          </div>
          <p className="text-zinc-500 text-sm md:text-base max-w-xs md:text-right font-medium">
            Seventeen seasons of India blue and RCB red. Peel back any year to revisit the milestone innings.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {historicalData.map((data) => (
            <div key={data.year} className="border-b border-white/10 last:border-none">
              <button
                onClick={() => setActiveYear(activeYear === data.year ? null : data.year)}
                className={cn(
                  "w-full flex items-center justify-between p-4 md:p-6 transition-all duration-300 ease-out group",
                  activeYear === data.year
                    ? "bg-[#B80F1A] text-white"
                    : "bg-transparent text-white hover:bg-white/5",
                )}
              >
                <div className="flex items-center gap-6">
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 md:w-8 md:h-8 transition-transform duration-300",
                      activeYear === data.year ? "rotate-180 text-[#D1AB3E]" : "text-white -rotate-90",
                    )}
                  />
                  <span className="font-[family-name:var(--font-oswald)] text-5xl font-bold leading-none md:text-7xl">
                    {data.year}
                  </span>
                </div>

                <div className="flex items-center gap-8 md:gap-16 pr-4">
                  <div className="flex flex-col items-end">
                    <div className="text-xs font-bold uppercase opacity-60 mb-1">Top Score</div>
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-4xl italic leading-none">
                      {data.bestFinish}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-xs font-bold uppercase opacity-60 mb-1">Centuries</div>
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-4xl leading-none">
                      {data.podiums}
                    </span>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {activeYear === data.year && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[#160506]"
                  >
                    <div className="grid grid-cols-12 gap-4 border-b border-white/10 px-6 py-4 text-[10px] font-bold uppercase text-white/30 md:text-xs">
                      <div className="col-span-1">Match</div>
                      <div className="col-span-4">Venue</div>
                      <div className="col-span-3 text-center">Date</div>
                      <div className="col-span-2 text-center">Score</div>
                      <div className="col-span-2 text-right">Strike Rate</div>
                    </div>

                    <div className="p-0">
                      {data.results.map((result, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-12 gap-4 py-4 px-6 border-b border-white/5 text-white hover:bg-white/5 transition-colors items-center group"
                        >
                          <div className="col-span-1 relative">
                            <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl text-white/40 relative z-10">
                              {result.round}
                            </span>
                          </div>

                          <div className="col-span-4 flex items-center gap-3">
                            <Image
                              src={result.flagImage || "/placeholder.svg"}
                              alt={`${result.location} flag`}
                              width={32}
                              height={24}
                              className="w-7 h-5 md:w-8 md:h-6 object-cover rounded-sm"
                            />
                            <span className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase leading-none md:text-4xl">
                              {result.location}
                            </span>
                          </div>

                          <div className="col-span-3 text-center font-[family-name:var(--font-oswald)] font-bold text-xl md:text-2xl text-white/70 uppercase">
                            {result.date}
                          </div>

                          <div className="col-span-2 text-center font-[family-name:var(--font-oswald)] font-bold text-xl md:text-3xl italic flex items-center justify-center gap-2 md:gap-3">
                            <Image
                              src={getRandomTrophy(index + result.location) || "/placeholder.svg"}
                              alt="Milestone"
                              width={32}
                              height={32}
                              className="w-7 h-7 md:w-9 md:h-9"
                            />
                            <span
                              className={
                                /\d{3,}/.test(result.finish) ? "text-[#D1AB3E]" : "text-white"
                              }
                            >
                              {result.finish}
                            </span>
                          </div>

                          <div className="col-span-2 text-right font-[family-name:var(--font-oswald)] font-bold text-lg">
                            {result.fastestLap}
                            <span className="text-xs ml-1 text-white/40">SR</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
