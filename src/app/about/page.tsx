import type { Metadata } from "next"
import { HeroSection } from "@/components/about/HeroSection"
import { StorySection } from "@/components/about/StorySection"
import { CTASection } from "@/components/about/CTASection"

export const metadata: Metadata = {
  title: "About",
  description:
    "Kotkoa Studio is a creative design studio by Andrey & Olesia, specializing in watercolor illustrations, floral patterns, and digital assets.",
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <CTASection />
    </>
  )
}
