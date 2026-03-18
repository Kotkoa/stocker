export interface AboutHero {
  heading: string
  subheading: string
  intro: string
  image: string
  imageAlt: string
}

export interface AboutStory {
  heading: string
  paragraphs: string[]
}

export interface AboutCTA {
  heading: string
  description: string
  buttonText: string
  buttonHref: string
}

export interface SocialLink {
  name: string
  url: string
}

export const aboutHero: AboutHero = {
  heading: "Andrey & Olesia",
  subheading: "The creative duo behind Kotkoa Studio",
  intro:
    "We are a husband-and-wife team creating hand-painted watercolor illustrations, seamless patterns, photo bundles, and mockups for designers and small businesses worldwide. Based in sunny Spain, with over 25,000 digital assets across major creative marketplaces — we've been doing this since 2012.",
  image: "/images/team.jpg",
  imageAlt: "Andrey & Olesia — Kotkoa Studio",
}

export const aboutStory: AboutStory = {
  heading: "Our Story",
  paragraphs: [
    "Kotkoa Studio started in 2012, when we decided to stop working separately and build something together. It felt natural: Andrey was already thinking in systems — automating workflows, writing scripts, organizing content — while Olesia was focused on the visual side, shaping ideas through illustration, photography, and a strong sense of aesthetics. Somewhere in between structure and creativity, Kotkoa began to take form.",
    "In the beginning, it was all about vector graphics in Adobe Illustrator — long nights, constant experiments, learning by doing. Then in 2018, we found watercolor, almost by accident. And it changed the way we work completely. Real textures, imperfect brushstrokes, the feeling of something made by hand — that became the core of our style. Since then, we've created a library of over 25,000 assets, always moving forward, exploring new ideas instead of staying in familiar territory.",
    "Our life has moved a lot over the years — from Crimea to the mountains of Zakarpattia, then to Lviv, and eventually to the Mediterranean coast of Spain, where we now live with our daughter. Each place left its mark. Nature, seasons, botanicals, weathered textures — all of it quietly flows into our work. Today, most of what we create starts on paper, with paint and brush, and then evolves into digital assets — carefully refined and ready to become part of someone else's project.",
  ],
}

export const aboutCTA: AboutCTA = {
  heading: "See what we've been working on",
  description:
    "Browse our latest collections of watercolor illustrations, patterns, and design resources.",
  buttonText: "Visit Our Shop",
  buttonHref: "https://creativemarket.com/Kotkoa",
}

export const socialLinks: SocialLink[] = [
  { name: "Pinterest", url: "https://pinterest.com/kotko_olesya" },
  { name: "Dribbble", url: "https://dribbble.com/Kotkoa" },
  { name: "Instagram", url: "https://instagram.com/kotko.olesya" },
]
