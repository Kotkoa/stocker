"use client"

import { useAtom } from "jotai"
import { activeCategoryAtom } from "@/store/gallery"
import { categories } from "@/data/categories"

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useAtom(activeCategoryAtom)

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        type="button"
        onClick={() => setActiveCategory("all")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-warm ${
          activeCategory === "all"
            ? "bg-birch text-foreground"
            : "bg-transparent text-muted border border-border hover:bg-bg-alt hover:text-foreground"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          type="button"
          key={cat.value}
          onClick={() => setActiveCategory(cat.value)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-warm ${
            activeCategory === cat.value
              ? "bg-birch text-foreground"
              : "bg-transparent text-muted border border-border hover:bg-bg-alt hover:text-foreground"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
