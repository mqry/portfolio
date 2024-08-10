import { Contact, NavbarElement, Skill } from "types";
import { ICONS, LINKS } from "util/constants";

export const skills: Skill[] = [
  {
    name: "JavaScript",
    description:
      "Powerful scripting programming language primarily used for creating dynamic content on the web.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    description:
      "Distributed version control system used for tracking changes in source code during software development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "discord.js",
    description:
      "JavaScript library for building Discord bots and applications, enabling interaction with the Discord API.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg",
  },
];

export const contacts: Contact[] = [
  {
    name: "Discord",
    link: LINKS.Discord,
    image: "static/icons/Discord.svg",
    handle: "@mq.y",
  },
  {
    name: "Twitter",
    link: LINKS.Twitter,
    image: ICONS.X,
    handle: "@maqryjqne",
  },
  {
    name: "Email",
    link: `mailto:${LINKS.Email}`,
    image: ICONS.Envelope,
    handle: LINKS.Email,
  },
];

export const homeNavbarElements: NavbarElement[] = [
  {
    name: "about",
    target: "about",
  },
  {
    name: "projects",
    target: "projects",
  },
  {
    name: "skills",
    target: "skills",
  },
  {
    name: "contact",
    target: "contact",
  },
];
