"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import InfiniteLogoSlider from "./infinite-logo-slider"

export default function Footer() {
  return (
    <footer id="footer" className="relative flex min-h-screen flex-col justify-end bg-[#B80F1A] px-4 pb-5 pt-0 md:px-8">
      <div className="absolute left-0 right-0 top-0 z-0 h-72 bg-gradient-to-b from-[#070303] to-[#B80F1A]" />

      {/* Main Dark Card Container */}
      <div className="relative flex-1 flex flex-col w-full max-w-[1688px] mx-auto mt-12 z-10">
        {/* SVG Background Mask */}
        <div
          className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#050303]"
          style={{
            maskImage: 'url("/images/footer-mask.svg")',
            WebkitMaskImage: 'url("/images/footer-mask.svg")',
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          {/* <AnimatedTextureCanvas /> */}

          <div
            className="absolute inset-0 w-full h-full opacity-30"
            style={{
              backgroundImage: 'url("/images/curv.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        {/* Increased padding-x to push content inwards away from mask edges, and added padding-bottom to prevent overflow */}
        <div className="relative z-20 flex flex-col h-full px-8 md:px-24 py-12 md:py-20 md:pb-12 md:pl-0 md:pr-0">
          {/* Main Content Grid */}
          <div className="mt-0 grid flex-1 grid-cols-1 items-stretch gap-8 md:grid-cols-12">
            {/* Left Column - Pages */}
            <div className="md:col-span-3 text-center order-2 md:order-1 md:pl-8 flex flex-col justify-center h-full">
              <h4 className="mb-6 text-xs font-black uppercase text-vk-text-light/40">PAGES</h4>
              <ul className="space-y-2">
                {[
                  ["HOME", "#home"],
                  ["ON FIELD", "#masonry-gallery"],
                  ["KIT", "#tech-specs"],
                  ["SCORES", "#results"],
                ].map(([item, href]) => (
                  <li className="leading-5" key={item}>
                    <a
                      href={href}
                      className="inline-block text-xl font-bold uppercase leading-4 text-vk-text-light transition-colors hover:text-[#D1AB3E] md:text-2xl"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#store"
                    className="inline-block text-xl font-black uppercase text-[#D1AB3E] transition-colors hover:text-white md:text-2xl"
                  >
                    SHOP
                  </a>
                </li>
              </ul>
            </div>

            {/* Center Column - Helmet & Title */}
            <div className="md:col-span-6 flex flex-col items-center justify-center order-1 md:order-2 relative">
              {/* Typography Overlay - Increased top margin for more spacing */}
              <div className="absolute top-0 left-0 right-0 z-0 text-center transform -translate-y-1/4 md:-translate-y-0 mt-24">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl font-black uppercase leading-[0.9] text-vk-text-light opacity-90 mix-blend-overlay md:text-7xl lg:text-8xl"
                >
                  <span className="font-sans block">CHASE THE
                    <span className="font-brier text-[#D1AB3E]"> SCORE.</span>
                  </span>
                  <span className="font-sans block">
                    RULE THE <span className="font-brier text-[#D1AB3E]">GAME.</span>
                  </span>
                </motion.h2>
              </div>

              {/* Hero portrait + jersey number */}
              <div className="relative w-full h-[300px] md:h-[500px] z-10 mt-24 md:mt-24 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative aspect-[3/4] w-[220px] overflow-hidden rounded-lg border-4 border-[#D1AB3E] shadow-[0_20px_80px_rgba(155,116,24,0.25)] md:w-[360px]"
                >
                  <Image
                    src="/images/virat-helmet.jpg"
                    alt="Virat Kohli portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 220px, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050303]/74 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <div className="text-[10px] uppercase text-[#D1AB3E]/80">
                        No.
                      </div>
                      <div className="font-[family-name:var(--font-oswald)] text-6xl font-black leading-none text-[#D1AB3E] md:text-7xl">
                        18
                      </div>
                    </div>
                    <div className="text-right text-[10px] uppercase opacity-80">
                      India
                      <br />
                      RCB
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button - Adjusted bottom position to be closer to helmet */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-12 z-20 flex items-center gap-2 rounded-lg bg-[#D1AB3E] px-8 py-4 text-sm font-black uppercase text-[#050303] transition-colors hover:bg-white"
              >
                BUSINESS ENQUIRIES
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.button>
            </div>

            {/* Right Column - Follow */}
            <div className="md:col-span-3 text-center order-3 md:order-2 md:pr-8 flex flex-col justify-center h-full">
              <h4 className="mb-6 text-xs font-black uppercase text-vk-text-light/40">
                FOLLOW ON
              </h4>
              <ul className="space-y-2">
                {["INSTAGRAM", "X / TWITTER", "YOUTUBE", "FACEBOOK"].map((platform) => (
                  <li className="leading-5" key={platform}>
                    <a
                      href="#"
                      className="inline-block text-xl font-bold uppercase leading-4 text-vk-text-light transition-colors hover:text-[#D1AB3E] md:text-2xl"
                    >
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Partners Row */}
          {/* Added mb-8 to ensure logos don't touch the bottom edge of the mask */}
          <div className="border-vk-text-light/10 border-t-0 mb-0 mt-32 pt-0">
            <InfiniteLogoSlider />
          </div>
        </div>
      </div>

      {/* Bottom Bar (Outside Card) */}
      {/* Wrapped in max-w container to align perfectly with the card above */}
      <div className="w-full max-w-[1688px] mx-auto px-8 md:px-12 relative z-20 pt-0">
        <div className="flex flex-col items-center justify-between text-xs font-bold uppercase text-white md:flex-row">
          <p>© 2026 Virat Kohli Tribute. All rights reserved</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:opacity-60 transition-opacity">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              TERMS
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1688px] mx-auto px-8 md:px-12 relative z-20 pt-0">
        <div className="flex flex-col items-center justify-between text-xs font-bold uppercase text-white md:flex-row">
          <p className="text-xs mt-7 opacity-40 font-medium leading-4 text-left">
            This is an unofficial fan tribute site celebrating Virat Kohli and Royal Challengers Bengaluru. Photography
            sourced from Wikimedia Commons under Creative Commons licences. No affiliation with Virat Kohli, the BCCI,
            RCB, the IPL or any partner brand is implied. Statistics, fixtures and stories are used here for
            illustrative purposes only within this design demo.
          </p>
        </div>
      </div>
    </footer>
  )
}
