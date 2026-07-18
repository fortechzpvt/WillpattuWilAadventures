export interface TourItem {
  name: string;
  info: string;
  badge: string;
  /** Longer copy shown only on the /book package detail page, not on the homepage card. */
  detail?: string;
  benefit?: string;
}

export interface Tour {
  idx: string;
  tag: string;
  title: string;
  desc: string;
  pkg: string;
  image?: string;
  items: TourItem[];
}

export const tours: Tour[] = [
  {
    idx: "01",
    tag: "Private · Fully Guided",
    title: "Day Safaris",
    image: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/gallery/leopard-resting.jpg",
    desc: "Three time-crafted options revealing distinct facets of Wilpattu's wildlife, from leopard-rich dawn hours to golden-hour elephant encounters.",
    pkg: "Day Safari",
    items: [
      { name: "Half-Day Morning Safari", info: "Enter as mist lifts from the villu lakes. Wilpattu's highest big-cat sighting rate at dawn.", badge: "6.00AM TO 10.00AM",
        detail: "Explore the park during the cool morning hours when wildlife is most active.",
        benefit: "Best chance to spot predators and enjoy pleasant weather." },
      { name: "Half-Day Afternoon Safari", info: "Golden-hour photography, active elephant herds, sloth bear encounters before sunset.", badge: "2.00PM TO 6.00PM",
        detail: "Experience the park as animals become active later in the day.",
        benefit: "Beautiful golden-hour lighting and excellent photography opportunities." },
      { name: "Full-Day Expedition", info: "Sunrise to dusk, deep zone exploration, bush lunch included, maximum wildlife encounters.", badge: "6.00AM TO 6.00PM",
        detail: "Spend a full day exploring different areas of the park with extended wildlife viewing.",
        benefit: "Highest chance of seeing a wide variety of animals and experiencing more of the park." },
    ],
  },
  {
    idx: "02",
    tag: "Exclusive · Overnight",
    title: "Overnight Stays",
    image: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/bungalow.jpg",
    desc: "Fall asleep to leopard calls and wake to morning bird choruses. Exclusive bungalow accommodation on Wilpattu's wilderness boundary.",
    pkg: "Bungalow Stay",
    items: [
      { name: "Manawila Wildlife Bungalow", info: "", badge: "" },
      { name: "Lunuwewa Wildlife Bungalow", info: "", badge: "" },
      { name: "Thalawila Wildlife Bungalow", info: "", badge: "" },
      { name: "Panikkawila", info: "", badge: "" },
      { name: "Mahawewa Bungalow", info: "", badge: "" },
      { name: "Manikwila Bungalow", info: "", badge: "" },
      { name: "Kokmote bungalow ", info: "", badge: "" },
      { name: "Maradanmaduwa Wildlife Dormitory ", info: "", badge: "" },
      
    ],
  },
  {
    idx: "03",
    tag: "Specialist · Ornithology",
    title: "Bird Watching",
    image: "https://raw.githubusercontent.com/fortechzpvt/WillpattuWilAadventures/main/public/assets/bird-watching.jpg",
    desc: "Wilpattu hosts 200+ resident and migratory species. Tharaka's ornithological expertise transforms every session into a Sri Lankan avifauna masterclass.",
    pkg: "Birding Expedition",
    items: [
      { name: "Customized Package", info: "Tell us your dates and interests, Tharaka will design a bespoke birding itinerary for you.", badge: "Contact to Arrange Your Journey" },
    ],
  },
];
