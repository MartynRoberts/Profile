import { track } from "@vercel/analytics";

export function trackEvent(name, data = {}) {
  if (!import.meta.env.PROD) return;
  track(name, data);
}
