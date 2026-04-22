"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const nicknameRail = [
  "Cheeku",
  "King Kohli",
  "Chase Master",
  "Run Machine",
  "VK",
  "No. 18",
  "Delhi",
  "India",
  "RCB",
]

const stats = [
  { value: "85", label: "International centuries", detail: "54 ODI, 30 Test, 1 T20I" },
  { value: "14,797", label: "ODI runs", detail: "311 matches, 58.72 average" },
  { value: "9,230", label: "Test runs", detail: "123 matches, 46.85 average" },
  { value: "4,188", label: "T20I runs", detail: "125 matches, 48.69 average" },
  { value: "10", label: "ICC awards", detail: "Most awarded player in international cricket" },
  { value: "5", label: "Major trophies", detail: "U19, World Cups, Champions Trophy runs" },
]

const panels = [
  {
    kicker: "New Delhi, 1988",
    title: "Born into pressure. Built for it.",
    body: "Virat Kohli grew from West Delhi academy cricket into India's defining top-order batter, carrying the No. 18 with a career shaped by discipline, intensity and run-chases.",
    meta: "Right-handed batter · Occasional medium pace · Top order",
  },
  {
    kicker: "India, 2008",
    title: "The chase became his language.",
    body: "ODI debut in 2008, Test debut in 2011 and T20I debut in 2010. Kohli turned the run chase into a repeatable craft, stacking hundreds when the target was alive.",
    meta: "India 2008-present · Delhi 2006-present · RCB 2008-present",
  },
  {
    kicker: "Captaincy",
    title: "A harder edge for Indian cricket.",
    body: "India's most successful Test captain, holder of three consecutive Test mace retentions and the only batter to earn 900-plus rating points across all three formats.",
    meta: "Former all-format captain · 121 Test catches · 167 ODI catches",
  },
  {
    kicker: "Honours",
    title: "The cabinet kept expanding.",
    body: "Arjuna Award, Padma Shri, Khel Ratna, ICC Cricketer of the Decade, World Cup Player of the Tournament and two IPL Orange Caps.",
    meta: "2013 · 2017 · 2018 · 2020 · 2023 · 2024",
  },
]

function SplitTitle({ children }: { children: string }) {
  return (
    <>
      {children.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="mr-3 inline-block overflow-hidden align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.75, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )
}

export default function KohliLegacySection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  })

  const railX = useTransform(smoothProgress, [0, 1], ["0%", "-42%"])
  const giantX = useTransform(smoothProgress, [0, 1], ["4%", "-18%"])
  const giantXReverse = useTransform(smoothProgress, [0, 1], ["-20%", "8%"])

  const imageScale = useTransform(smoothProgress, [0, 0.35, 0.72, 1], [0.86, 1.04, 0.92, 0.78])
  const imageRotate = useTransform(smoothProgress, [0, 0.45, 1], [-3, 0, 4])

  const photoAOpacity = useTransform(smoothProgress, [0, 0.18, 0.3], [1, 1, 0])
  const photoBOpacity = useTransform(smoothProgress, [0.2, 0.35, 0.55], [0, 1, 0])
  const photoCOpacity = useTransform(smoothProgress, [0.45, 0.62, 0.82], [0, 1, 0])
  const photoDOpacity = useTransform(smoothProgress, [0.72, 0.86, 1], [0, 1, 1])

  const panelAOpacity = useTransform(smoothProgress, [0, 0.16, 0.28], [1, 1, 0])
  const panelBOpacity = useTransform(smoothProgress, [0.22, 0.34, 0.5], [0, 1, 0])
  const panelCOpacity = useTransform(smoothProgress, [0.46, 0.58, 0.74], [0, 1, 0])
  const panelDOpacity = useTransform(smoothProgress, [0.72, 0.84, 1], [0, 1, 1])
  const panelY = useTransform(smoothProgress, [0, 1], ["6%", "-6%"])

  return (
    <section ref={sectionRef} id="legacy" className="relative h-[520vh] bg-[#050303] text-white">
      <div className="sticky top-0 min-h-[100dvh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(209,171,62,0.22),rgba(5,3,3,0)_30%),radial-gradient(circle_at_18%_78%,rgba(184,15,26,0.35),rgba(5,3,3,0)_36%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(209,171,62,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(184,15,26,0.22)_1px,transparent_1px)] [background-size:56px_56px]" />

        <motion.div
          style={{ x: giantX }}
          className="pointer-events-none absolute left-0 top-[13dvh] whitespace-nowrap font-brier text-[8rem] uppercase leading-none text-[#D1AB3E]/28 md:text-[15rem]"
        >
          Chase Master · Run Machine · No. 18 ·
        </motion.div>
        <motion.div
          style={{ x: giantXReverse }}
          className="pointer-events-none absolute bottom-[16dvh] left-0 whitespace-nowrap font-brier text-[8rem] uppercase leading-none text-[#B80F1A]/34 md:text-[15rem]"
        >
          King Kohli · India · Bengaluru · Delhi ·
        </motion.div>

        <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-24 md:grid-cols-[0.78fr_1.05fr_0.88fr] md:px-10 lg:px-16">
          <div className="relative">
            <p className="mb-4 text-xs font-black uppercase text-[#D1AB3E]">Career record</p>
            <h2 className="max-w-[9ch] font-brier text-5xl uppercase leading-[0.84] text-white md:text-6xl lg:text-7xl">
              <SplitTitle>Pressure turned into numbers</SplitTitle>
            </h2>
            <p className="mt-8 max-w-sm text-sm font-semibold uppercase leading-relaxed text-white/66">
              Born 5 November 1988 in New Delhi. Right-handed top-order batter. Former India all-format captain.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#D1AB3E]/24 bg-[#D1AB3E]/24">
              {[
                ["Born", "5 Nov 1988"],
                ["Height", "5 ft 9 in"],
                ["Role", "Top order"],
                ["Batting", "Right hand"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#080303]/92 p-4">
                  <div className="text-[10px] font-black uppercase text-[#D1AB3E]/76">{label}</div>
                  <div className="mt-2 text-lg font-black uppercase text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            style={{ scale: imageScale, rotate: imageRotate }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-lg border border-[#D1AB3E]/35 bg-[#160506]"
          >
            <motion.div style={{ opacity: photoAOpacity }} className="absolute inset-0">
              <Image src="/images/virat-helmet.jpg" alt="Virat Kohli in India helmet" fill className="object-cover" priority />
            </motion.div>
            <motion.div style={{ opacity: photoBOpacity }} className="absolute inset-0">
              <Image src="/images/kohli-cwc5.jpg" alt="Virat Kohli World Cup celebration" fill className="object-cover" />
            </motion.div>
            <motion.div style={{ opacity: photoCOpacity }} className="absolute inset-0">
              <Image src="/images/kohli-rcb.jpg" alt="Virat Kohli in Royal Challengers red" fill className="object-cover" />
            </motion.div>
            <motion.div style={{ opacity: photoDOpacity }} className="absolute inset-0">
              <Image src="/images/kohli-padma.jpg" alt="Virat Kohli receiving Padma Shri" fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050303]/92 via-transparent to-[#050303]/10" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="text-xs font-black uppercase text-[#D1AB3E]">International centuries</div>
                <div className="font-brier text-8xl leading-none text-white">85</div>
              </div>
              <div className="max-w-[145px] text-right text-xs font-bold uppercase leading-relaxed text-white/70">
                Most ODI hundreds. Second-most international hundreds.
              </div>
            </div>
          </motion.div>

          <div className="relative min-h-[430px]">
            <motion.div style={{ opacity: panelAOpacity, y: panelY }} className="absolute inset-0">
              <InfoPanel panel={panels[0]} />
            </motion.div>
            <motion.div style={{ opacity: panelBOpacity, y: panelY }} className="absolute inset-0">
              <InfoPanel panel={panels[1]} />
            </motion.div>
            <motion.div style={{ opacity: panelCOpacity, y: panelY }} className="absolute inset-0">
              <InfoPanel panel={panels[2]} />
            </motion.div>
            <motion.div style={{ opacity: panelDOpacity, y: panelY }} className="absolute inset-0">
              <InfoPanel panel={panels[3]} />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 border-y border-[#D1AB3E]/26 bg-[#050303]/92 py-4 backdrop-blur-md">
          <motion.div style={{ x: railX }} className="flex w-max gap-4 px-4">
            {[...stats, ...stats].map((item, index) => (
              <div key={`${item.label}-${index}`} className="grid min-w-[310px] grid-cols-[0.7fr_1fr] gap-4 rounded-lg border border-[#B80F1A]/42 bg-[#0B0304]/96 p-4 md:min-w-[390px]">
                <div className="font-brier text-5xl leading-none text-[#D1AB3E] md:text-6xl">{item.value}</div>
                <div>
                  <div className="text-sm font-black uppercase text-white">{item.label}</div>
                  <div className="mt-1 text-xs font-semibold uppercase leading-relaxed text-white/58">{item.detail}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute right-5 top-24 hidden h-[calc(100dvh-190px)] w-[84px] overflow-hidden rounded-lg border border-[#D1AB3E]/24 md:block">
          <div className="legacy-photo-reel flex flex-col gap-3 p-2">
            {[
              "/images/virat-no-helmet.png",
              "/images/kohli-captain.jpg",
              "/images/kohli-century.jpg",
              "/images/kohli-pmo.jpg",
              "/images/kohli-cwc3.jpg",
              "/images/kohli-fielding.jpg",
              "/images/virat-helmet.jpg",
              "/images/kohli-rcb.jpg",
            ].map((src, index) => (
              <div key={`${src}-${index}`} className="relative aspect-[3/4] shrink-0 overflow-hidden rounded-lg">
                <Image src={src} alt="" fill className="object-cover" sizes="84px" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-0 z-20 w-full overflow-hidden border-b border-[#D1AB3E]/18 bg-[#050303]/78 py-2 backdrop-blur-md">
          <div className="legacy-name-rail flex w-max gap-8 whitespace-nowrap text-xs font-black uppercase text-[#D1AB3E]">
            {[...nicknameRail, ...nicknameRail, ...nicknameRail, ...nicknameRail].map((name, index) => (
              <span key={`${name}-${index}`}>{name}</span>
            ))}
          </div>
        </div>

        <style jsx>{`
          .legacy-name-rail {
            animation: legacy-name-slide 18s linear infinite;
          }

          .legacy-photo-reel {
            animation: legacy-photo-slide 24s linear infinite;
          }

          @keyframes legacy-name-slide {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(-50%, 0, 0);
            }
          }

          @keyframes legacy-photo-slide {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(0, -50%, 0);
            }
          }
        `}</style>
      </div>
    </section>
  )
}

function InfoPanel({
  panel,
}: {
  panel: {
    kicker: string
    title: string
    body: string
    meta: string
  }
}) {
  return (
    <div className="flex h-full flex-col justify-center border-l border-[#D1AB3E]/28 pl-6 md:pl-8">
      <div className="mb-5 inline-flex w-fit rounded-lg border border-[#D1AB3E]/32 bg-[#D1AB3E]/10 px-3 py-2 text-[11px] font-black uppercase text-[#D1AB3E]">
        {panel.kicker}
      </div>
      <h3 className="max-w-[10ch] font-brier text-4xl uppercase leading-[0.9] text-white md:text-6xl">
        {panel.title}
      </h3>
      <p className="mt-6 max-w-md text-base font-semibold leading-relaxed text-white/70">{panel.body}</p>
      <div className="mt-8 border-t border-[#B80F1A]/48 pt-5 text-xs font-black uppercase leading-relaxed text-[#D1AB3E]">
        {panel.meta}
      </div>
    </div>
  )
}
