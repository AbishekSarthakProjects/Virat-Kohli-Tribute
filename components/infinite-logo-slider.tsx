"use client"

const milestones = [
  "9230 ODI RUNS",
  "82 INT'L CENTURIES",
  "IPL ORANGE CAP 2024",
  "ICC CRICKETER OF THE YEAR",
  "PADMA SHRI 2017",
  "KHEL RATNA 2018",
  "T20 WORLD CUP 2024",
  "FASTEST TO 12000 ODI RUNS",
  "RCB CAPTAIN 2013-21",
]

export default function InfiniteLogoSlider() {
  const singleSequence = [...milestones, ...milestones, ...milestones, ...milestones]
  const sliderContent = [...singleSequence, ...singleSequence]

  return (
    <div className="w-full overflow-hidden py-10 relative mask-gradient bg-transparent">
      <style jsx>{`
        @keyframes infinite-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-slide {
          animation: infinite-slide 55s linear infinite;
        }
      `}</style>

      <div className="flex w-max animate-infinite-slide">
        {sliderContent.map((label, index) => (
          <div
            key={index}
            className="flex items-center gap-6 flex-shrink-0 mx-10"
          >
            <span className="whitespace-nowrap font-[family-name:var(--font-oswald)] text-lg uppercase text-white/90 md:text-2xl">
              {label}
            </span>
            <span className="h-2 w-2 rounded-full bg-[#D1AB3E]" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}
