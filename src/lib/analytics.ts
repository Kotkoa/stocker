type GtagParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      eventNameOrConfig: string,
      params?: GtagParams,
    ) => void
  }
}

/**
 * Send a custom event to Google Analytics 4.
 * Safe no-op when gtag is not loaded (e.g. dev without GA, or before script init).
 */
export function trackEvent(name: string, params?: GtagParams): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}
