"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const galleryImages = [
  { src: "/images/virat-no-helmet.png", alt: "Virat Kohli portrait without helmet", aspect: "aspect-[3/4]" },
  { src: "/images/virat-helmet.jpg", alt: "Virat Kohli portrait with India helmet", aspect: "aspect-[3/4]" },
  { src: "/images/kohli-cwc.jpg", alt: "Kohli batting at ICC Cricket World Cup 2015", aspect: "aspect-[3/4]" },
  { src: "/images/kohli-captain.jpg", alt: "Captain Kohli leading India", aspect: "aspect-[4/3]" },
  { src: "/images/kohli-rcb.jpg", alt: "Virat Kohli in RCB colours", aspect: "aspect-[3/4]" },
  { src: "/images/kohli-field.jpg", alt: "Kohli batting at Trent Bridge", aspect: "aspect-[4/3]" },
  { src: "/images/kohli-century.jpg", alt: "Kohli celebrates his century at Trent Bridge", aspect: "aspect-[3/4]" },
  { src: "/images/kohli-batting.jpg", alt: "Kohli in full flow batting", aspect: "aspect-[4/3]" },
  { src: "/images/kohli-cwc3.jpg", alt: "Kohli ICC CWC action", aspect: "aspect-[3/4]" },
  { src: "/images/kohli-cwc4.jpg", alt: "Kohli pulling through midwicket", aspect: "aspect-[4/3]" },
  { src: "/images/kohli-captain2.jpg", alt: "Captain Kohli walking off the field", aspect: "aspect-[3/4]" },
  { src: "/images/kohli-2015.jpg", alt: "Virat Kohli portrait 2015", aspect: "aspect-[4/3]" },
  { src: "/images/kohli-june.jpg", alt: "Virat Kohli June 2016", aspect: "aspect-[3/4]" },
  { src: "/images/kohli-fielding.jpg", alt: "Kohli fielding at Trent Bridge 2018", aspect: "aspect-[4/3]" },
]

export default function MasonryGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.6, 0.9], ["#050303", "#160506", "#210507"])

  // Y Movement: Move grid up to reveal all images
  // Starts at 0vh and moves up to -150vh to show bottom images
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-150vh"])

  const column1 = galleryImages.filter((_, i) => i % 3 === 0)
  const column2 = galleryImages.filter((_, i) => i % 3 === 1)
  const column3 = galleryImages.filter((_, i) => i % 3 === 2)

  return (
    <section
      ref={sectionRef}
      id="masonry-gallery"
      className="relative"
      style={{
        height: "400vh",
      }}
    >
      <motion.div className="sticky top-0 h-[100dvh] w-full overflow-hidden" style={{ backgroundColor }}>
        <motion.div style={{ y }} className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-8 w-full md:w-1/3">
              {column1.map((image, index) => (
                <MasonryCard key={`col1-${index}`} image={image} index={index * 3} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8 w-full md:w-1/3">
              {column2.map((image, index) => (
                <MasonryCard key={`col2-${index}`} image={image} index={index * 3 + 1} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8 w-full md:w-1/3">
              {column3.map((image, index) => (
                <MasonryCard key={`col3-${index}`} image={image} index={index * 3 + 2} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function MasonryCard({ image, index }: { image: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative w-full overflow-hidden rounded-lg border border-[#D1AB3E]/18 bg-[#050303] shadow-2xl transition-all duration-500 ${image.aspect}`}
    >
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={95}
      />
    </motion.div>
  )
}
