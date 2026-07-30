const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://betelsighet.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  name: "BETEL",
  description:
    "un singur trup, un singur Duh, un singur Domn, o singură credință, un singur botez, un singur Dumnezeu şi Tată al tuturor",
  url: siteUrl,
  locale: "en-US",
  language: "en",
  repositoryUrl: "https://github.com/boroicaradu/betelsighet",
};

export const NAVIGATION = [
  { to: "/", label: "Acasă" },
  { to: "/blog", label: "Noi credem" },
  { to: "/about", label: "Despre noi" },
  { to: "/events", label: "Evenimente" },
  { to: "/archive", label: "Arhiva Video" },
  { to: "/contact", label: "Contact" },
  { to: "/live", label: "LIVE" },
];

export const CONTACT = {
  email: "contact@betelsighet.ro",
  socialHandle: "@betelsighet",
  socialUrl: "https://www.instagram.com/betelsighet/",
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
  { href: "/rss.xml", label: "RSS feed", icon: "rss" },
  { href: CONTACT.socialUrl, label: `${SITE.name} on X`, icon: "twitter" },
  { href: SITE.repositoryUrl, label: `${SITE.name} on GitHub`, icon: "github" },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "elena-march",
    name: "Simion BUMBAR",
    bio: "Pastor coordonator, Secretar General al Cultului Creștin Penticostal din România.",
    longBio:
      "long bio Simion Bumabar",
    avatar: "/avatars/elena-march.svg",
  },
  {
    slug: "samuel-okafor",
    name: "Grigore Todoran",
    bio: "Pastor asistent, membru al conducerii Comunității Regionale Penticostale Maramureș–Sătmar.",
    longBio:
      "long bio Grigore Todoran",
    avatar: "/avatars/samuel-okafor.svg",
  },
  {
    slug: "mira-iwasaki",
    name: "Mira Iwasaki",
    bio: "Pastor asistent, membru al conducerii Comunității Regionale Penticostale Maramureș–Sătmar.",
    longBio:
      "long bio Marius Turza",
    avatar: "/avatars/mira-iwasaki.svg",
  },
];

export const categories = [
  { slug: "essays", name: "Essays" },
  { slug: "design", name: "Design" },
  { slug: "engineering", name: "Engineering" },
  { slug: "field-notes", name: "Field Notes" },
  { slug: "interviews", name: "Interviews" },
];

export const tags = [
  { slug: "writing", name: "Writing" },
  { slug: "typography", name: "Typography" },
  { slug: "minimalism", name: "Minimalism" },
  { slug: "tools", name: "Tools" },
  { slug: "travel", name: "Travel" },
  { slug: "process", name: "Process" },
  { slug: "web", name: "Web" },
  { slug: "books", name: "Books" },
];
