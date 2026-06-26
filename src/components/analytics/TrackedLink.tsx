"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { trackEvent } from "@/lib/analytics"

interface TrackedLinkProps {
  href: string
  event: string
  params?: Record<string, string | number | boolean | undefined>
  className?: string
  children: ReactNode
}

export function TrackedLink({ href, event, params, className, children }: TrackedLinkProps) {
  return (
    <Link href={href} className={className} onClick={() => trackEvent(event, params)}>
      {children}
    </Link>
  )
}
