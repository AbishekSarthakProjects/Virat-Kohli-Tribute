"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function StoreSection() {
  return (
    <section id="store" className="relative min-h-screen bg-[#160506] px-6 py-24 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase text-[#D1AB3E] md:text-sm">
              NEW IN:
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl lg:text-8xl">
              VK18 MATCH
              <span className="block font-brier text-[#D1AB3E]">EDITION</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/68 md:text-lg">
              Red, black and dark gold pieces shaped around the chase: cap, training tee and match-day print.
            </p>
            
            <Link
              href="#"
              className="inline-flex items-center gap-3 rounded-lg bg-[#D1AB3E] px-8 py-4 text-sm font-black uppercase text-[#050303] shadow-lg transition-transform duration-300 hover:scale-105"
            >
              VISIT THE STORE
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-[#D1AB3E]/25 transition-transform duration-300 hover:scale-105">
                <Image src="/images/virat-helmet.jpg" alt="Helmet print" fill className="object-cover" />
              </div>
              <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-[#D1AB3E]/25 transition-transform duration-300 hover:scale-105">
                <Image src="/images/kohli-jersey.jpg" alt="Training jersey" fill className="object-cover" />
              </div>
              <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-[#D1AB3E]/25 transition-transform duration-300 hover:scale-105">
                <Image src="/images/kohli-bat.jpg" alt="Bat detail print" fill className="object-cover" />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[600px] overflow-hidden rounded-lg"
          >
            <Image 
              src="/images/kohli-rcb.jpg" 
              alt="Virat Kohli in red match kit" 
              fill 
              className="object-cover" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
