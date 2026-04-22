"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const socialImages = [
  "/images/kohli-portrait.jpg",
  "/images/kohli-2015.jpg",
  "/images/kohli-delhi.jpg",
  "/images/kohli-captain.jpg", // Center image
  "/images/kohli-rcb.jpg",
  "/images/kohli-cwc.jpg",
  "/images/kohli-june.jpg",
]

const handIcons = [
  "/images/icon/icon-hand1.png",
  "/images/icon/icon-hand2.png",
  "/images/icon/icon-hand3.png",
  "/images/icon/icon-hand4.png",
  "/images/icon/icon-hand5.png",
  "/images/icon/icon-hand6.png",
]

export default function SocialSection() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % handIcons.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="social-section" className="relative overflow-hidden bg-[#070303] px-6 py-24 text-white md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-32 flex items-center justify-center mt-16">
          {/* Replaced static image with animated icon switcher */}
          <div className="relative h-full w-auto max-h-[60px] aspect-square">
            {handIcons.map((icon, index) => (
              <div
                key={icon}
                className={`absolute inset-0 transition-opacity duration-0 ${
                  index === currentIconIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={icon || "/placeholder.svg"}
                  className="h-full w-full object-contain"
                  alt="Animated hand icon"
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-2.5"
        >
          <h2 className="text-5xl font-black uppercase leading-[2.25] text-white md:text-7xl lg:text-6xl">
            WHAT'S UP
          </h2>
          <h3 className="mt-2 font-brier text-4xl leading-10 text-[#D1AB3E] md:text-6xl lg:text-6xl">ON SOCIALS</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[600px] md:h-[700px] mb-16 flex items-center justify-center"
        >
          {socialImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                rotate: (i - 3) * 6, // Adjusted rotation for 7 items (centered at index 3)
                scale: 1 - Math.abs(i - 3) * 0.02, // Reduced scale drop-off
                x: (i - 3) * 90, // Tighter horizontal overlap
                y: Math.abs(i - 3) * 35, // Adjusted vertical curve
              }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.1,
                type: "spring",
                stiffness: 60,
                damping: 12,
              }}
              viewport={{ once: true }}
              whileHover={{
                rotate: 0,
                scale: 1.1,
                zIndex: 20,
                y: -40,
                transition: { duration: 0.3 },
              }}
              className="absolute h-80 w-60 origin-bottom cursor-pointer overflow-hidden rounded-lg bg-[#050303] shadow-2xl md:h-[480px] md:w-80"
              style={{ zIndex: 10 - Math.abs(i - 3) }} // Adjusted z-index logic for 7 items
            >
              <div className="relative w-full h-full">
                <Image src={image || "/placeholder.svg"} alt={`Social post ${i + 1}`} fill className="object-cover" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <p className="text-lg font-medium text-white/76 md:text-xl">Follow Virat on social media</p>

          <div className="flex flex-wrap justify-center gap-6">
            {["INSTAGRAM", "X / TWITTER", "YOUTUBE", "FACEBOOK"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-black uppercase text-[#D1AB3E] transition-colors hover:text-white"
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
