import type { Metadata } from "next";
import { TeamSection } from "@/components/about/TeamSection";
import { ContactSection } from "@/components/about/ContactSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kotkoa Studio is a creative design studio by Andrey & Olesia, specializing in watercolor illustrations, floral patterns, and digital assets.",
};

export default function AboutPage() {
  return (
    <main>
      <TeamSection />
      <ContactSection />
    </main>
  );
}
