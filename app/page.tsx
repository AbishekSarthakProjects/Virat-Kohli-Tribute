import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import KohliLegacySection from "@/components/kohli-legacy-section"
import MissionSection from "@/components/mission-section"
import RiderTechSection from "@/components/rider-tech-section"
// import SignatureMarqueeSection from "@/components/signature-marquee-section"
import HelmetHall from "@/components/helmet-hall"
import StoreSection from "@/components/store-section"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import MasonryGallerySection from "@/components/masonry-gallery-section"
import { RaceDayCountdown } from "@/components/race-day-countdown"
import { InteractiveSchedule } from "@/components/interactive-schedule"
import { HistoricalResultsAccordion } from "@/components/historical-results-accordion"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <div className="relative z-10">
        <KohliLegacySection />
        <MissionSection />
        <MasonryGallerySection />
        {/* <TrackSplitSection /> */}
        <RiderTechSection />
        <HelmetHall />
        <StoreSection />

        <RaceDayCountdown />
        <InteractiveSchedule />
        <HistoricalResultsAccordion />

        <SocialSection />
        <Footer />
      </div>
    </main>
  )
}
