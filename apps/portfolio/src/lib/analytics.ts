/**
 * Privacy-conscious analytics abstraction.
 *
 * Disabled by default. Enable by setting VITE_ANALYTICS_ENABLED=true
 * and optionally VITE_ANALYTICS_ENDPOINT to a collector URL.
 *
 * Tracks only portfolio interactions — no PII, no fingerprints beyond
 * what the configured vendor already collects.
 */

export type AnalyticsEvent =
  | "resume_download"
  | "contact_click"
  | "project_link_click"
  | "github_click"
  | "linkedin_click"
  | "section_view"
  | "theme_toggle"
  | "sdk_github_click"
  | "sdk_npm_click"
  | "sdk_crates_click"
  | "sdk_whirlpools_pr_click";

export type AnalyticsPayload = {
  event: AnalyticsEvent;
  properties?: Record<string, string | number | boolean | undefined>;
};

const isEnabled = (): boolean =>
  import.meta.env.VITE_ANALYTICS_ENABLED === "true";

const endpoint = (): string | undefined => {
  const value = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  return typeof value === "string" && value.length > 0 ? value : undefined;
};

/** In-memory buffer useful for tests and local debugging */
export const analyticsBuffer: AnalyticsPayload[] = [];

export function track(
  event: AnalyticsEvent,
  properties?: AnalyticsPayload["properties"],
): void {
  const payload: AnalyticsPayload = { event, properties };
  analyticsBuffer.push(payload);

  if (!isEnabled()) {
    if (import.meta.env.DEV) {
      console.debug("[analytics:disabled]", payload);
    }
    return;
  }

  const url = endpoint();
  if (!url) {
    console.warn(
      "[analytics] Enabled but VITE_ANALYTICS_ENDPOINT is not set. Event ignored.",
      payload,
    );
    return;
  }

  // fire-and-forget; never block UI
  void fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      ts: Date.now(),
      path: typeof window !== "undefined" ? window.location.pathname : undefined,
    }),
    keepalive: true,
  }).catch(() => {
    /* swallow network errors — analytics must not affect UX */
  });
}

export function resetAnalyticsBuffer(): void {
  analyticsBuffer.length = 0;
}
