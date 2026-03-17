"use client"

import { useAtom } from "jotai"
import { activeCategoryAtom } from "@/store/gallery"
import { categories } from "@/data/categories"

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useAtom(activeCategoryAtom)

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => setActiveCategory("all")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          activeCategory === "all"
            ? "bg-foreground text-background"
            : "bg-transparent text-muted border border-border hover:text-foreground hover:border-foreground"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setActiveCategory(cat.value)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === cat.value
              ? "bg-foreground text-background"
              : "bg-transparent text-muted border border-border hover:text-foreground hover:border-foreground"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
