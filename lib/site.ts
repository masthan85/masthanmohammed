export const site = {
  name: "Masthan Mohammed",
  title: "Senior Data Architect",
  location: "London, United Kingdom",
  linkedin: "https://www.linkedin.com/in/masthan-mohammed-760672402",
  // Public scheduling page (Cal.com or Calendly), e.g. "https://cal.com/your-name/intro-call".
  // Bookings are emailed to the account behind this link, so no email address or
  // phone number needs to appear on the site. Leave empty to hide the scheduler.
  bookingUrl: "",
} as const;

/** The scheduling page URL prepared for inline embedding. */
export function bookingEmbedUrl(): string {
  if (!site.bookingUrl) return "";
  const url = new URL(site.bookingUrl);
  if (url.hostname.endsWith("cal.com")) {
    url.searchParams.set("embed", "true");
    url.searchParams.set("theme", "light");
  }
  if (url.hostname.endsWith("calendly.com")) {
    url.searchParams.set("hide_gdpr_banner", "1");
  }
  return url.toString();
}
