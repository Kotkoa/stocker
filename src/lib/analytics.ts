type GtagParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      eventNameOrConfig: string,
      params?: GtagParams,
    ) => void
    dataLayer?: unknown[]
  }
}

/**
 * Send a custom event to Google Analytics 4.
 *
 * When gtag is ready, dispatch immediately. When it isn't yet (e.g. an event
 * fires from a mount effect before the GA library has loaded), queue it on
 * dataLayer — gtag.js replays queued entries once it initializes, so the event
 * is not lost. No-op during SSR.
 */
export function trackEvent(name: string, params?: GtagParams): void {
  if (typeof window === "undefined") return
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params)
    return
  }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(["event", name, params])
}
