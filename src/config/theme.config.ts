const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://betelsighet.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  name: "Betel Sighet",
  description:
    "un singur trup, un singur Duh, un singur Domn, o singură credință, un singur botez, un singur Dumnezeu şi Tată al tuturor",
  url: siteUrl,
  locale: "ro-RO",
  language: "ro",
  repositoryUrl: "https://github.com/boroicaradu/betelsighet",
};

export const NAVIGATION = [
  { to: "/", label: "Acasă" },
  { to: "/about", label: "Despre noi" },
  { to: "/confession", label: "Noi credem" },
  { to: "/events", label: "Evenimente" },
  { to: "/blog", label: "Articole" },
  { to: "/contact", label: "Contact" },
  { to: "/archive", label: "Arhiva Video" },
  { to: "/radio", label: "Radio" },
  { to: "/live", label: "LIVE" },
];

export const CONTACT = {
  email: "contact@betelsighet.ro",
  socialHandle: "@betelsighet",
  socialUrl_Instagram: "https://www.instagram.com/betelsighet/",
  socialUrl_Facebook: "https://www.facebook.com/betelsighet/",
  socialUrl_TikTok: "https://www.tiktok.com/betelsighet/",
  socialUrl_YouTube: "https://www.youtube.com/betelsighet/",
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
  { href: CONTACT.socialUrl_Instagram, label: `${SITE.name} pe Instagram`, icon: "instagram" },
  { href: CONTACT.socialUrl_Facebook, label: `${SITE.name} pe Facebook`, icon: "facebook" },
  { href: CONTACT.socialUrl_TikTok, label: `${SITE.name} pe TikTok`, icon: "tiktok" },
  { href: CONTACT.socialUrl_YouTube, label: `${SITE.name} pe Youtube`, icon: "youtube" },
];

export const authors = [
  {
    slug: "simion-bumbar",
    name: "Simion BUMBAR",
    bio: "Pastor coordonator, Secretar General al Cultului Creștin Penticostal din România.",
    longBio:
      "long bio Simion Bumbar",
    avatar: "/avatars/Simion-Bumbar.svg",
  },
  {
    slug: "grigore-todoran",
    name: "Grigore TODORAN",
    bio: "Pastor asistent, membru al conducerii Comunității Regionale Penticostale Maramureș–Sătmar.",
    longBio:
      "long bio Grigore Todoran",
    avatar: "/avatars/Grigore-Todoran.svg",
  },
  {
    slug: "marius-turza",
    name: "Marius TURZA",
    bio: "Pastor asistent, membru al conducerii Comunității Regionale Penticostale Maramureș–Sătmar.",
    longBio:
      "long bio Marius Turza",
    avatar: "/avatars/Marius-Turza.svg",
  },
  {
    slug: "florin-pop",
    name: "Florin POP",
    bio: "Pastor asistent, lider tineret TBS.",
    longBio:
      "long bio Florin Pop",
    avatar: "/avatars/Florin-Pop.svg",
  },
];

export const categories = [
  { slug: "sermons", name: "Predici" },
  { slug: "essays", name: "Eseuri" },
  { slug: "interviews", name: "Interviuri" },
  { slug: "field-notes", name: "Notițe de teren" },
  { slug: "design", name: "Design" },
];

export const tags = [
];
