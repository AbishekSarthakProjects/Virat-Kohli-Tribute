"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  ["Legacy", "#legacy"],
  ["On Field", "#masonry-gallery"],
  ["Kit", "#tech-specs"],
  ["Milestones", "#helmets"],
  ["Scores", "#results"],
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll >= 300)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 top-0 z-50 text-white transition-all duration-300 ${
          scrolled ? "border-b border-[#B80F1A]/40 bg-[#050303]/88 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="grid size-10 place-items-center rounded-lg border border-[#D1AB3E]/60 bg-[#050303]/76 font-brier text-xl leading-none text-[#D1AB3E]">
              18
            </div>
            <div className="hidden text-[10px] font-bold uppercase text-white/72 sm:block">
              India since 2008
            </div>
          </motion.div>

          <nav className="hidden items-center gap-6 text-[11px] font-black uppercase text-white/72 md:flex">
            {navItems.map(([item, href]) => (
              <a key={item} href={href} className="transition-colors hover:text-[#D1AB3E]">
                {item}
              </a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <a
              href="#store"
              className="hidden rounded-lg border border-[#B80F1A]/70 bg-[#B80F1A] px-4 py-2 text-[10px] font-black uppercase text-white transition-colors hover:bg-[#D1AB3E] hover:text-[#050303] sm:inline-flex"
            >
              Store
            </a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-white/20 bg-[#050303]/88 px-3 py-2.5 text-white transition-colors hover:border-[#D1AB3E]/70 hover:bg-[#151010]"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#050303]/96 backdrop-blur-xl"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="text-center"
            >
              <motion.ul className="space-y-6 text-4xl font-black uppercase text-white md:text-6xl">
                {[["HOME", "#home"], ...navItems.map(([item, href]) => [item.toUpperCase(), href]), ["CONTACT", "#footer"]].map(([item, href]) => (
                  <motion.li
                    key={item}
                    variants={{
                      open: { opacity: 1, y: 0, rotate: 0 },
                      closed: { opacity: 0, y: 20, rotate: -5 },
                    }}
                  >
                    <a
                      href={href}
                      className="inline-block transform transition-colors duration-300 hover:scale-105 hover:text-[#D1AB3E]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-12 flex justify-center gap-6"
              >
                {["INSTAGRAM", "X / TWITTER", "YOUTUBE"].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ scale: 1.1, color: "#D1AB3E" }}
                    href="#"
                    className="text-sm font-bold text-white/60 transition-colors hover:text-[#D1AB3E]"
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
