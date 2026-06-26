"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

interface ProductViewTrackerProps {
  slug: string
  category: string
}

export function ProductViewTracker({ slug, category }: ProductViewTrackerProps) {
  useEffect(() => {
    trackEvent("view_product", { product_slug: slug, category })
  }, [slug, category])

  return null
}
