"use client"

import { useState } from "react"
import { siteConfig } from "@/data/site"

interface ShareButtonsProps {
  slug: string
  title: string
}

export function ShareButtons({ slug, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const url = `${siteConfig.url}/products/${slug}`
  const pinterestHref = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`

  function handleCopyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex flex-row items-center gap-4">
      <span className="text-sm text-muted">Share</span>
      <a
        href={pinterestHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        Pin it
      </a>
      <button
        type="button"
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        {copied ? "Copied!" : "Link"}
      </button>
    </div>
  )
}
