export const DISCORD_USER_ID = "890250538191581264" as const;

export const TIME_FORMAT_OPTIONS = {
  timeZone: "Pacific/Guam",
  hour: "numeric",
  minute: "numeric",
} as const satisfies Intl.DateTimeFormatOptions;

export const LINKS = {
  BaseURL: "https://mqryjqne.vercel.app/",
  Discord: `https://discordapp.com/users/${DISCORD_USER_ID}`,
  Email: "pyschomqry@gmail.com",
  Github: "https://github.com/mqry",
  GitRepo: "https://github.com/mqry/profile",
  Twitter: "https://twitter.com/maqryjqne",
} as const;

export const ICONS = {
  Github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  X: "static/icons/X.svg",
  ExternalLink: "static/icons/ExternalLink.svg",
  Envelope: "static/icons/Envelope.svg",
} as const;
