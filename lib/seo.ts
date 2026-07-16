// lib/seo.ts
// Single source of truth for the production domain. Update this once when the
// custom domain cutover (see public/CNAME) is complete — everything else
// (sitemap, robots.txt, canonical tags, Open Graph/Twitter urls, JSON-LD)
// reads from here.
export const SITE_URL = "https://wilpattuwildadventures.com";
export const SITE_NAME = "Wilpattu Wild Adventures";

export const OG_IMAGE =
  "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/hero.jpg";

export const CONTACT = {
  phones: [
    { display: "077 311 8295", tel: "+94773118295" },
    { display: "076 047 8310", tel: "+94760478310" },
  ],
  whatsapp: "+94771878400",
};
